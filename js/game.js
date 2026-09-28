/**
 * Find the Differences - Master Game Engine
 * Handles State Machine, Dual-Canvas Synced Zoom/Pan, Touch/Click Mapping,
 * Particles, Web Audio Integration, LocalStorage Persistence, Achievements, and Daily Challenges.
 */

class SpotTheDifferenceGame {
    constructor() {
        this.renderer = new SceneRenderer();
        this.currentLevel = null;
        this.currentLevelIndex = 0;
        this.gameMode = 'classic'; // 'classic' | 'relax' | 'time_challenge' | 'daily'
        this.foundDifferences = new Set();
        this.score = 0;
        this.timer = 0;
        this.maxTimer = 0;
        this.timerInterval = null;
        this.isPaused = false;
        this.hintsRemaining = 3;
        this.mistakesCount = 0;
        this.comboStreak = 0;
        this.totalFoundCount = 0;

        // Synchronized Zoom & Pan state
        this.zoom = 1.0;
        this.panX = 0;
        this.panY = 0;
        this.isPanning = false;
        this.startPanX = 0;
        this.startPanY = 0;
        this.initialPinchDistance = 0;
        this.initialZoom = 1.0;
        this.mobileViewMode = 'stacked'; // 'stacked' | 'compare'

        // Particle system
        this.particles = [];
        this.markerRings = []; // Discovered difference markers
        this.hintSpotlight = null;

        // Persistence & User Data
        this.userData = this.loadUserData();

        // Canvas references
        this.canvasOriginal = null;
        this.ctxOriginal = null;
        this.canvasModified = null;
        this.ctxModified = null;

        this.init();
    }

    init() {
        // Cache DOM elements
        this.canvasOriginal = document.getElementById('canvas-original');
        this.ctxOriginal = this.canvasOriginal.getContext('2d');
        this.canvasModified = document.getElementById('canvas-modified');
        this.ctxModified = this.canvasModified.getContext('2d');

        this.setupEventListeners();
        this.setupCanvasInteractions();
        this.resizeCanvases();
        window.addEventListener('resize', () => {
            this.resizeCanvases();
            this.renderCurrentLevel();
        });

        // Start render loop for particles and overlays
        this.startAnimationLoop();

        // Render level select grid
        this.renderLevelSelectGrid();
        this.renderAchievementsGrid();
        this.checkDailyStatus();

        // Initialize sound toggles based on stored settings
        if (window.soundEngine) {
            window.soundEngine.setSoundEnabled(this.userData.settings.sound);
            window.soundEngine.setMusicEnabled(this.userData.settings.music);
            window.soundEngine.setVolume(this.userData.settings.volume || 0.7);
        }
    }

    // =========================================================================
    // LocalStorage Data Management
    // =========================================================================
    loadUserData() {
        const defaultData = {
            unlockedLevels: [1],
            stars: {}, // { levelId: starsCount }
            highScores: {}, // { levelId: score }
            bestTimes: {}, // { levelId: seconds }
            achievements: {}, // { achId: boolean }
            dailyStreak: 0,
            lastDailyDate: null,
            totalDifferencesFound: 0,
            settings: {
                sound: true,
                music: false,
                volume: 0.7,
                vibration: true
            }
        };

        try {
            const raw = localStorage.getItem('spot_diff_game_save');
            if (raw) {
                return Object.assign(defaultData, JSON.parse(raw));
            }
        } catch (e) {
            console.warn("Could not read localStorage", e);
        }
        return defaultData;
    }

    saveUserData() {
        try {
            localStorage.setItem('spot_diff_game_save', JSON.stringify(this.userData));
        } catch (e) {
            console.warn("Could not write localStorage", e);
        }
    }

    resizeCanvases() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.dpr = dpr;

        [
            { c: this.canvasOriginal, ctx: this.ctxOriginal },
            { c: this.canvasModified, ctx: this.ctxModified }
        ].forEach(item => {
            if (!item.c) return;
            item.c.width = Math.round(800 * dpr);
            item.c.height = Math.round(600 * dpr);
        });
    }

    // =========================================================================
    // Modal & Dialog Management
    // =========================================================================
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
        }
    }

    closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
    }

    // =========================================================================
    // Navigation & Screen Management
    // =========================================================================
    showScreen(screenId) {
        this.closeAllModals();
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
        }
        if (screenId === 'screen-game') {
            this.resizeCanvases();
            this.renderCurrentLevel();
        } else if (screenId === 'screen-level-select') {
            this.renderLevelSelectGrid();
        } else if (screenId === 'screen-achievements') {
            this.renderAchievementsGrid();
        }
        window.soundEngine.playClick();
    }

    // =========================================================================
    // Game Flow: Start, Level Load, Timer, Victory, Game Over
    // =========================================================================
    startLevel(levelId, mode = 'classic') {
        this.closeAllModals();
        const level = LEVELS_DATA.find(lvl => lvl.id === levelId);
        if (!level) return;

        this.currentLevel = level;
        this.currentLevelIndex = LEVELS_DATA.indexOf(level);
        this.gameMode = mode;
        this.foundDifferences.clear();
        this.markerRings = [];
        this.particles = [];
        this.hintSpotlight = null;
        this.isPaused = false;
        this.mistakesCount = 0;
        this.comboStreak = 0;
        this.resetZoom();

        // Mode configurations
        if (mode === 'relax') {
            this.hintsRemaining = 999;
            this.timer = 0;
            this.maxTimer = 0;
            document.getElementById('hud-timer-container').style.display = 'none';
        } else {
            this.hintsRemaining = mode === 'daily' ? 2 : 3;
            this.maxTimer = level.timeLimit;
            this.timer = this.maxTimer;
            document.getElementById('hud-timer-container').style.display = 'flex';
        }

        this.score = 0;
        this.updateHUD();
        this.showScreen('screen-game');

        // Start timer
        this.startTimer();
        this.renderCurrentLevel();

        // Toast level announcement
        this.showToast(`Level ${level.id}: ${level.name}`);
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        if (this.gameMode === 'relax') return;

        this.timerInterval = setInterval(() => {
            if (this.isPaused) return;

            this.timer--;
            this.updateHUD();

            if (this.timer <= 10 && this.timer > 0) {
                window.soundEngine.playTick();
                document.getElementById('hud-timer').classList.add('pulse-danger');
            } else {
                document.getElementById('hud-timer').classList.remove('pulse-danger');
            }

            if (this.timer <= 0) {
                this.handleGameOver();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.openModal('modal-pause');
        } else {
            this.closeModal('modal-pause');
        }
        window.soundEngine.playClick();
    }

    restartLevel() {
        this.closeAllModals();
        this.startLevel(this.currentLevel.id, this.gameMode);
    }

    // =========================================================================
    // Core Click/Touch Detection & Difference Handling
    // =========================================================================
    handleCanvasClick(event, isCanvasModified) {
        if (this.isPaused || !this.currentLevel) return;

        const canvas = isCanvasModified ? this.canvasModified : this.canvasOriginal;
        const rect = canvas.getBoundingClientRect();
        
        let clientX = event.clientX;
        let clientY = event.clientY;
        if (event.touches && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else if (event.changedTouches && event.changedTouches.length > 0) {
            clientX = event.changedTouches[0].clientX;
            clientY = event.changedTouches[0].clientY;
        }

        if (clientX === undefined || clientY === undefined) return;

        // Position inside canvas display box (0 to rect.width, 0 to rect.height)
        const rawX = clientX - rect.left;
        const rawY = clientY - rect.top;

        // Normalized relative to display size
        const dispNormX = rawX / rect.width;
        const dispNormY = rawY / rect.height;

        // Undo zoom and pan transformation to get canonical normalized scene coordinate (0.0 to 1.0)
        const sceneX = (dispNormX - 0.5 - this.panX) / this.zoom + 0.5;
        const sceneY = (dispNormY - 0.5 - this.panY) / this.zoom + 0.5;

        // Out of illustration bounds check
        if (sceneX < 0 || sceneX > 1 || sceneY < 0 || sceneY > 1) return;

        // Test difference hit
        let foundDiff = null;
        let alreadyFound = false;

        for (const diff of this.currentLevel.differences) {
            const dx = sceneX - diff.x;
            const dy = sceneY - diff.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Precision detective hit tolerance: tuned to detail size (approx 40px on 800x600)
            const tolerance = Math.max(diff.r || 0.045, 0.055);

            if (dist <= tolerance) {
                if (this.foundDifferences.has(diff.id)) {
                    alreadyFound = true;
                } else {
                    foundDiff = diff;
                    break;
                }
            }
        }

        const targetWrapper = isCanvasModified ? document.getElementById('wrapper-modified') : document.getElementById('wrapper-original');

        if (foundDiff) {
            this.onDifferenceFound(foundDiff, rawX, rawY, targetWrapper);
        } else if (alreadyFound) {
            this.showFloatingText("Already found!", rawX, rawY, "#38bdf8", targetWrapper);
            window.soundEngine.playClick();
        } else {
            this.onMistake(rawX, rawY, targetWrapper);
        }
    }

    // =========================================================================
    // Mobile Ergonomics: Haptics & Responsive Layout
    // =========================================================================
    triggerHaptic(pattern) {
        if (this.userData.settings.vibration && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
            try {
                navigator.vibrate(pattern);
            } catch (e) {
                // Silently ignore if blocked by browser policy
            }
        }
    }

    updateMobileZoomIndicator() {
        const btn = document.getElementById('btn-mobile-reset-zoom');
        if (!btn) return;
        if (this.zoom > 1.05) {
            btn.style.display = 'inline-flex';
            btn.innerHTML = `<span>⟲ Reset (${this.zoom.toFixed(1)}x)</span>`;
        } else {
            btn.style.display = 'none';
        }
    }

    toggleMobileViewMode() {
        const container = document.getElementById('dual-canvas-container');
        const icon = document.getElementById('view-mode-icon');
        if (!container) return;

        if (this.mobileViewMode === 'compare') {
            this.mobileViewMode = 'stacked';
            container.classList.remove('view-compare', 'peek-active');
            if (icon) icon.textContent = '🔀';
            this.showToast('Stacked View: Both pictures visible');
        } else {
            this.mobileViewMode = 'compare';
            container.classList.add('view-compare');
            container.classList.remove('peek-active');
            if (icon) icon.textContent = '👁️';
            this.showToast('Focus View: Hold peek button to compare!');
        }

        this.triggerHaptic(30);
        window.soundEngine.playClick();
        setTimeout(() => {
            this.resizeCanvases();
            this.renderCurrentLevel();
        }, 60);
    }

    onDifferenceFound(diff, clickX, clickY, targetWrapper) {
        this.foundDifferences.add(diff.id);
        this.comboStreak++;
        this.totalFoundCount++;
        this.userData.totalDifferencesFound++;

        // Haptic feedback (crisp tap)
        this.triggerHaptic(45);

        // Base points + speed/combo multiplier
        const points = 100 + (this.comboStreak * 25);
        this.score += points;

        // Sound effect
        window.soundEngine.playSuccess(this.comboStreak);

        // Persistent discovery marker on both canvases
        this.markerRings.push({
            x: diff.x,
            y: diff.y,
            r: diff.r,
            alpha: 1.0,
            scale: 0.2,
            targetScale: 1.0,
            id: diff.id,
            num: this.foundDifferences.size
        });

        // Golden particle explosion
        this.spawnParticles(diff.x, diff.y, '#facc15', 25);
        this.spawnParticles(diff.x, diff.y, '#38bdf8', 15);

        // Floating score popup inside the clicked canvas wrapper
        this.showFloatingText(`+${points} PTS!`, clickX, clickY, "#4ade80", targetWrapper);

        // Clear hint spotlight if this was the hinted difference
        if (this.hintSpotlight && this.hintSpotlight.diffId === diff.id) {
            this.hintSpotlight = null;
        }

        this.updateHUD();

        // Check level completion
        if (this.foundDifferences.size === this.currentLevel.differences.length) {
            setTimeout(() => this.handleVictory(), 650);
        }
    }

    onMistake(clickX, clickY, targetWrapper) {
        this.mistakesCount++;
        this.comboStreak = 0;

        // Haptic warning vibration
        this.triggerHaptic([60, 40, 60]);

        // Penalty in classic mode
        if (this.gameMode === 'classic') {
            this.timer = Math.max(0, this.timer - 5);
            this.score = Math.max(0, this.score - 40);
            this.showFloatingText("-5 SEC", clickX, clickY, "#ef4444", targetWrapper);
        } else {
            this.showFloatingText("Miss!", clickX, clickY, "#ef4444", targetWrapper);
        }

        // Screen shake
        const container = document.querySelector('.dual-canvas-container');
        if (container) {
            container.classList.add('shake-anim');
            setTimeout(() => container.classList.remove('shake-anim'), 400);
        }

        // Audio error
        window.soundEngine.playError();
        this.updateHUD();
    }

    // =========================================================================
    // Hint System
    // =========================================================================
    useHint() {
        if (this.hintsRemaining <= 0 || this.isPaused) return;

        // Find an undiscovered difference
        const undiscovered = this.currentLevel.differences.filter(d => !this.foundDifferences.has(d.id));
        if (!undiscovered.length) return;

        // Pick the first undiscovered difference
        const targetDiff = undiscovered[0];
        this.hintsRemaining--;

        // Play hint sound & haptic
        this.triggerHaptic(30);
        window.soundEngine.playHint();

        // Activate pulsing hint spotlight
        this.hintSpotlight = {
            diffId: targetDiff.id,
            x: targetDiff.x,
            y: targetDiff.y,
            radius: targetDiff.r * 1.8,
            pulse: 0,
            startTime: performance.now(),
            duration: 8000 // Lasts up to 8 seconds
        };

        this.showToast(`Hint: ${targetDiff.label}`);
        this.updateHUD();
    }

    // =========================================================================
    // Synchronized Zoom & Pan Controls
    // =========================================================================
    zoomIn() {
        this.zoom = Math.min(this.zoom * 1.35, 3.5);
        this.clampPan();
        this.updateMobileZoomIndicator();
    }

    zoomOut() {
        this.zoom = Math.max(this.zoom / 1.35, 1.0);
        if (this.zoom === 1.0) {
            this.panX = 0;
            this.panY = 0;
        }
        this.clampPan();
        this.updateMobileZoomIndicator();
    }

    resetZoom() {
        this.zoom = 1.0;
        this.panX = 0;
        this.panY = 0;
        this.updateMobileZoomIndicator();
    }

    clampPan() {
        const maxPan = (this.zoom - 1.0) * 0.5;
        this.panX = Math.max(-maxPan, Math.min(maxPan, this.panX));
        this.panY = Math.max(-maxPan, Math.min(maxPan, this.panY));
    }

    setupCanvasInteractions() {
        const wrappers = document.querySelectorAll('.canvas-wrapper');

        wrappers.forEach(wrap => {
            const isMod = wrap.id === 'wrapper-modified';

            // Click handling
            wrap.addEventListener('click', (e) => {
                if (this.isPanningMoved) return;
                this.handleCanvasClick(e, isMod);
            });

            // Mouse wheel zoom
            wrap.addEventListener('wheel', (e) => {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomIn();
                } else {
                    this.zoomOut();
                }
            }, { passive: false });

            // Mouse drag to pan
            wrap.addEventListener('mousedown', (e) => {
                if (this.zoom <= 1.0) return;
                this.isPanning = true;
                this.isPanningMoved = false;
                this.startPanX = e.clientX;
                this.startPanY = e.clientY;
            });

            // Touch events for mobile (tap, pan & pinch-to-zoom)
            wrap.addEventListener('touchstart', (e) => {
                if (e.touches.length === 2) {
                    // Pinch gesture
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    this.initialPinchDistance = Math.hypot(dx, dy);
                    this.initialZoom = this.zoom;
                } else if (e.touches.length === 1 && this.zoom > 1.0) {
                    this.isPanning = true;
                    this.isPanningMoved = false;
                    this.startPanX = e.touches[0].clientX;
                    this.startPanY = e.touches[0].clientY;
                }
            }, { passive: true });

            wrap.addEventListener('touchmove', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    const dist = Math.hypot(dx, dy);
                    if (this.initialPinchDistance > 0) {
                        const factor = dist / this.initialPinchDistance;
                        this.zoom = Math.max(1.0, Math.min(3.5, this.initialZoom * factor));
                        this.clampPan();
                        this.updateMobileZoomIndicator();
                    }
                } else if (e.touches.length === 1 && this.isPanning) {
                    const deltaX = (e.touches[0].clientX - this.startPanX) / wrap.clientWidth;
                    const deltaY = (e.touches[0].clientY - this.startPanY) / wrap.clientHeight;
                    if (Math.hypot(deltaX, deltaY) > 0.01) {
                        this.isPanningMoved = true;
                    }
                    this.panX += deltaX;
                    this.panY += deltaY;
                    this.clampPan();
                    this.startPanX = e.touches[0].clientX;
                    this.startPanY = e.touches[0].clientY;
                }
            }, { passive: false });

            wrap.addEventListener('touchend', (e) => {
                this.isPanning = false;
                this.initialPinchDistance = 0;
            });
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.isPanning) return;
            const deltaX = (e.clientX - this.startPanX) / 600;
            const deltaY = (e.clientY - this.startPanY) / 450;
            if (Math.hypot(deltaX, deltaY) > 0.01) {
                this.isPanningMoved = true;
            }
            this.panX += deltaX;
            this.panY += deltaY;
            this.clampPan();
            this.startPanX = e.clientX;
            this.startPanY = e.clientY;
        });

        window.addEventListener('mouseup', () => {
            this.isPanning = false;
        });
    }

    // =========================================================================
    // HUD and Floating UI Updates
    // =========================================================================
    updateHUD() {
        if (!this.currentLevel) return;

        // Differences found counter
        const total = this.currentLevel.differences.length;
        const found = this.foundDifferences.size;
        document.getElementById('hud-diff-count').textContent = `${found} / ${total}`;

        // Level title badge
        document.getElementById('hud-level-title').textContent = `Level ${this.currentLevel.id}: ${this.currentLevel.name}`;

        // Progress bar
        const progressPct = (found / total) * 100;
        document.getElementById('hud-progress-fill').style.width = `${progressPct}%`;

        // Score
        document.getElementById('hud-score').textContent = this.score;

        // Timer
        if (this.gameMode !== 'relax') {
            const mins = Math.floor(this.timer / 60);
            const secs = this.timer % 60;
            document.getElementById('hud-timer').textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        // Hints remaining badge
        document.getElementById('hud-hint-badge').textContent = this.hintsRemaining;
        const hintBtn = document.getElementById('btn-hint');
        if (this.hintsRemaining <= 0) {
            hintBtn.classList.add('disabled');
        } else {
            hintBtn.classList.remove('disabled');
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

    showFloatingText(text, x, y, color = "#ffffff", parent = null) {
        const el = document.createElement('div');
        el.className = 'floating-popup';
        el.textContent = text;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.color = color;

        const container = parent || document.querySelector('.canvas-wrapper');
        if (container) {
            container.appendChild(el);
            setTimeout(() => el.remove(), 1200);
        }
    }

    // =========================================================================
    // Victory & Game Over Handling
    // =========================================================================
    handleVictory() {
        this.stopTimer();
        this.triggerHaptic([100, 50, 100, 50, 200]);
        window.soundEngine.playVictory();

        // Calculate stars: 3 stars if > 50% time left and <= 1 mistake; 2 stars if finished; 1 star minimal
        let stars = 1;
        if (this.gameMode === 'relax') {
            stars = 3;
        } else {
            const timeRatio = this.timer / this.maxTimer;
            if (timeRatio >= 0.40 && this.mistakesCount <= 2) {
                stars = 3;
            } else if (timeRatio >= 0.15 && this.mistakesCount <= 5) {
                stars = 2;
            } else {
                stars = 1;
            }
        }

        // Time Bonus points
        const timeBonus = this.timer * 15;
        this.score += timeBonus;

        // Unlock next level
        const nextLevelId = this.currentLevel.id + 1;
        if (nextLevelId <= LEVELS_DATA.length && !this.userData.unlockedLevels.includes(nextLevelId)) {
            this.userData.unlockedLevels.push(nextLevelId);
        }

        // Update high score & best time
        const lvlId = this.currentLevel.id;
        this.userData.stars[lvlId] = Math.max(this.userData.stars[lvlId] || 0, stars);
        this.userData.highScores[lvlId] = Math.max(this.userData.highScores[lvlId] || 0, this.score);
        const completionTime = this.maxTimer - this.timer;
        if (!this.userData.bestTimes[lvlId] || completionTime < this.userData.bestTimes[lvlId]) {
            this.userData.bestTimes[lvlId] = completionTime;
        }

        // Daily challenge completion
        if (this.gameMode === 'daily') {
            const today = new Date().toISOString().slice(0, 10);
            if (this.userData.lastDailyDate !== today) {
                this.userData.lastDailyDate = today;
                this.userData.dailyStreak++;
            }
        }

        this.saveUserData();
        this.checkAchievements();

        // Populate Victory Modal
        document.getElementById('victory-level-name').textContent = `Level ${this.currentLevel.id}: ${this.currentLevel.name}`;
        document.getElementById('victory-score').textContent = this.score;
        document.getElementById('victory-time').textContent = this.gameMode === 'relax' ? 'Relax Mode' : `${completionTime}s`;
        document.getElementById('victory-mistakes').textContent = this.mistakesCount;

        // Animate stars
        const starsContainer = document.getElementById('victory-stars-row');
        starsContainer.innerHTML = '';
        for (let s = 1; s <= 3; s++) {
            const starEl = document.createElement('span');
            starEl.className = `star-icon ${s <= stars ? 'active' : ''}`;
            starEl.textContent = '★';
            starEl.style.animationDelay = `${s * 0.25}s`;
            starsContainer.appendChild(starEl);
        }

        // Show Next Level button only if next level exists
        const nextBtn = document.getElementById('btn-victory-next');
        if (nextLevelId <= LEVELS_DATA.length) {
            nextBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'none';
        }

        // Blast confetti particles
        this.triggerConfetti();

        this.openModal('modal-victory');
    }

    handleGameOver() {
        this.stopTimer();
        window.soundEngine.playGameOver();

        document.getElementById('gameover-found').textContent = `${this.foundDifferences.size} / ${this.currentLevel.differences.length}`;
        document.getElementById('gameover-score').textContent = this.score;
        this.openModal('modal-gameover');
    }

    // =========================================================================
    // Particle & Overlay Animation Loop
    // =========================================================================
    spawnParticles(normX, normY, color, count = 20) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 4.5;
            this.particles.push({
                x: normX,
                y: normY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 2 + Math.random() * 4,
                color: color,
                alpha: 1.0,
                decay: 0.015 + Math.random() * 0.02
            });
        }
    }

    triggerConfetti() {
        for (let i = 0; i < 80; i++) {
            const colors = ['#f43f5e', '#38bdf8', '#facc15', '#4ade80', '#c084fc'];
            this.particles.push({
                x: 0.1 + Math.random() * 0.8,
                y: 0.1 + Math.random() * 0.3,
                vx: (Math.random() - 0.5) * 4,
                vy: -Math.random() * 4 - 2,
                size: 4 + Math.random() * 6,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1.0,
                decay: 0.008 + Math.random() * 0.01,
                gravity: 0.12
            });
        }
    }

    startAnimationLoop() {
        const loop = () => {
            this.updateAndDrawOverlays();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    updateAndDrawOverlays() {
        // Redraw scene first if level is active
        if (this.currentLevel) {
            this.renderCurrentLevel();
            this.drawOverlaysOnCanvas(this.ctxOriginal);
            this.drawOverlaysOnCanvas(this.ctxModified);
        }
    }

    renderCurrentLevel() {
        if (!this.currentLevel) return;
        const dpr = this.dpr || Math.min(window.devicePixelRatio || 1, 2);

        // Apply zoom and pan transformation
        [
            { ctx: this.ctxOriginal, isMod: false },
            { ctx: this.ctxModified, isMod: true }
        ].forEach(item => {
            const ctx = item.ctx;
            ctx.save();
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, 800, 600);

            // Zoom around center (400, 300) with pan offset
            ctx.translate(400 + this.panX * 800, 300 + this.panY * 600);
            ctx.scale(this.zoom, this.zoom);
            ctx.translate(-400, -300);

            this.renderer.render(ctx, this.currentLevel.id, 800, 600, item.isMod);
            ctx.restore();
        });
    }

    drawOverlaysOnCanvas(ctx) {
        const dpr = this.dpr || Math.min(window.devicePixelRatio || 1, 2);
        ctx.save();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.translate(400 + this.panX * 800, 300 + this.panY * 600);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-400, -300);

        // Draw discovered marker rings
        this.markerRings.forEach(m => {
            const px = m.x * 800;
            const py = m.y * 600;
            const radius = m.r * 800;

            // Glowing ring
            ctx.strokeStyle = '#4ade80';
            ctx.lineWidth = 3.5;
            ctx.shadowColor = '#22c55e';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.stroke();

            // Checkmark or discovery badge
            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.arc(px + radius * 0.7, py - radius * 0.7, 9, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(m.num, px + radius * 0.7, py - radius * 0.7);
        });

        // Draw pulsing hint spotlight if active
        if (this.hintSpotlight) {
            const elapsed = performance.now() - this.hintSpotlight.startTime;
            if (elapsed > this.hintSpotlight.duration) {
                this.hintSpotlight = null;
            } else {
                const hx = this.hintSpotlight.x * 800;
                const hy = this.hintSpotlight.y * 600;
                const baseR = this.hintSpotlight.radius * 800;
                const pulseR = baseR + Math.sin(elapsed * 0.008) * 12;

                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 4;
                ctx.shadowColor = '#eab308';
                ctx.shadowBlur = 16;
                ctx.beginPath();
                ctx.arc(hx, hy, pulseR, 0, Math.PI * 2);
                ctx.stroke();

                // Crosshair guidance
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(hx - pulseR - 8, hy);
                ctx.lineTo(hx - pulseR + 8, hy);
                ctx.moveTo(hx + pulseR - 8, hy);
                ctx.lineTo(hx + pulseR + 8, hy);
                ctx.moveTo(hx, hy - pulseR - 8);
                ctx.lineTo(hx, hy - pulseR + 8);
                ctx.moveTo(hx, hy + pulseR - 8);
                ctx.lineTo(hx, hy + pulseR + 8);
                ctx.stroke();
            }
        }

        // Draw floating particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += (p.vx / 800);
            p.y += (p.vy / 600);
            if (p.gravity) p.vy += p.gravity;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.beginPath();
            ctx.arc(p.x * 800, p.y * 600, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // =========================================================================
    // Level Selection Screen Rendering
    // =========================================================================
    renderLevelSelectGrid(filterTier = 'all') {
        const grid = document.getElementById('level-grid');
        if (!grid) return;
        grid.innerHTML = '';

        // Update stats bar
        const statUnlocked = document.getElementById('stat-unlocked-count');
        const statStars = document.getElementById('stat-stars-count');
        const statDiffs = document.getElementById('stat-diffs-count');

        const totalStars = Object.values(this.userData.stars).reduce((a, b) => a + b, 0);
        if (statUnlocked) statUnlocked.textContent = `🔓 ${this.userData.unlockedLevels.length} / ${LEVELS_DATA.length} Unlocked`;
        if (statStars) statStars.textContent = `⭐ ${totalStars} / ${LEVELS_DATA.length * 3} Stars`;
        if (statDiffs) statDiffs.textContent = `🔍 ${this.userData.totalDifferencesFound || 0} Found`;

        let filteredLevels = LEVELS_DATA;
        if (filterTier === 'novice') {
            filteredLevels = LEVELS_DATA.filter(l => l.id >= 1 && l.id <= 25);
        } else if (filterTier === 'apprentice') {
            filteredLevels = LEVELS_DATA.filter(l => l.id >= 26 && l.id <= 50);
        } else if (filterTier === 'master') {
            filteredLevels = LEVELS_DATA.filter(l => l.id >= 51 && l.id <= 75);
        } else if (filterTier === 'grandmaster') {
            filteredLevels = LEVELS_DATA.filter(l => l.id >= 76 && l.id <= 100);
        }

        filteredLevels.forEach(level => {
            const isUnlocked = this.userData.unlockedLevels.includes(level.id);
            const stars = this.userData.stars[level.id] || 0;
            const bestTime = this.userData.bestTimes[level.id];

            const card = document.createElement('div');
            card.className = `level-card ${isUnlocked ? 'unlocked' : 'locked'}`;

            // Difficulty tag color
            const diffClass = `diff-${level.difficulty.toLowerCase()}`;

            card.innerHTML = `
                <div class="level-card-header">
                    <span class="level-card-num">#${level.id}</span>
                    <span class="level-card-diff ${diffClass}">${level.difficulty}</span>
                </div>
                <div class="level-card-title">${level.name}</div>
                <div class="level-card-meta">
                    <span>${level.differences.length} Differences</span>
                    ${bestTime ? `<span>⚡ ${bestTime}s</span>` : ''}
                </div>
                <div class="level-card-stars">
                    ${isUnlocked ? `
                        <span class="star ${stars >= 1 ? 'gold' : ''}">★</span>
                        <span class="star ${stars >= 2 ? 'gold' : ''}">★</span>
                        <span class="star ${stars >= 3 ? 'gold' : ''}">★</span>
                    ` : '<span class="lock-icon">🔒 Locked</span>'}
                </div>
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    this.startLevel(level.id, 'classic');
                });
            }

            grid.appendChild(card);
        });
    }

    // =========================================================================
    // Achievements System (Scaled for 100 levels)
    // =========================================================================
    checkAchievements() {
        const totalStars = Object.values(this.userData.stars).reduce((a, b) => a + b, 0);
        const achievementsList = [
            { id: 'first_win', title: 'Eagle Eye Rookie', desc: 'Solve your first level', cond: () => Object.keys(this.userData.stars).length >= 1 },
            { id: 'tier_apprentice', title: 'Journey Begun', desc: 'Unlock the Apprentice Tier (Level 26+)', cond: () => this.userData.unlockedLevels.some(id => id >= 26) },
            { id: 'tier_master', title: 'Master Pathfinder', desc: 'Unlock the Master Tier (Level 51+)', cond: () => this.userData.unlockedLevels.some(id => id >= 51) },
            { id: 'tier_grandmaster', title: 'Grandmaster Elite', desc: 'Unlock the Grandmaster Tier (Level 76+)', cond: () => this.userData.unlockedLevels.some(id => id >= 76) },
            { id: 'century_club', title: 'Legendary Detective', desc: 'Conquer all 100 levels in the game!', cond: () => Object.keys(this.userData.stars).length >= 100 },
            { id: 'star_collector', title: 'Starlight Hoarder', desc: 'Collect 100 or more stars', cond: () => totalStars >= 100 },
            { id: 'perfect_five', title: 'Flawless Seeker', desc: 'Earn 3 stars on 10 different levels', cond: () => Object.values(this.userData.stars).filter(s => s === 3).length >= 10 },
            { id: 'speed_demon', title: 'Lightning Gaze', desc: 'Finish a level in under 25 seconds', cond: () => Object.values(this.userData.bestTimes).some(t => t < 25) },
            { id: 'streak_master', title: 'Untouchable Focus', desc: 'Find 5 differences without a single mistake', cond: () => this.mistakesCount === 0 && this.foundDifferences.size >= 5 },
            { id: 'spotter_legend', title: 'Centurion Spotter', desc: 'Spot over 250 total differences', cond: () => (this.userData.totalDifferencesFound || 0) >= 250 }
        ];

        achievementsList.forEach(ach => {
            if (!this.userData.achievements[ach.id] && ach.cond()) {
                this.userData.achievements[ach.id] = true;
                this.showToast(`🏆 Achievement Unlocked: ${ach.title}!`);
            }
        });

        this.saveUserData();
    }

    renderAchievementsGrid() {
        const container = document.getElementById('achievements-list');
        if (!container) return;
        container.innerHTML = '';

        const allAchievements = [
            { id: 'first_win', title: 'Eagle Eye Rookie', desc: 'Solve your first level' },
            { id: 'tier_apprentice', title: 'Journey Begun', desc: 'Unlock the Apprentice Tier (Level 26+)' },
            { id: 'tier_master', title: 'Master Pathfinder', desc: 'Unlock the Master Tier (Level 51+)' },
            { id: 'tier_grandmaster', title: 'Grandmaster Elite', desc: 'Unlock the Grandmaster Tier (Level 76+)' },
            { id: 'century_club', title: 'Legendary Detective', desc: 'Conquer all 100 levels in the game!' },
            { id: 'star_collector', title: 'Starlight Hoarder', desc: 'Collect 100 or more stars' },
            { id: 'perfect_five', title: 'Flawless Seeker', desc: 'Earn 3 stars on 10 different levels' },
            { id: 'speed_demon', title: 'Lightning Gaze', desc: 'Finish a level in under 25 seconds' },
            { id: 'streak_master', title: 'Untouchable Focus', desc: 'Find 5 differences without a single mistake' },
            { id: 'spotter_legend', title: 'Centurion Spotter', desc: 'Spot over 250 total differences' }
        ];

        allAchievements.forEach(ach => {
            const isUnlocked = !!this.userData.achievements[ach.id];
            const card = document.createElement('div');
            card.className = `achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="ach-icon">${isUnlocked ? '🏆' : '🔒'}</div>
                <div class="ach-details">
                    <div class="ach-title">${ach.title}</div>
                    <div class="ach-desc">${ach.desc}</div>
                </div>
                <div class="ach-status">${isUnlocked ? 'Unlocked' : 'In Progress'}</div>
            `;
            container.appendChild(card);
        });
    }

    // =========================================================================
    // Daily Challenge
    // =========================================================================
    checkDailyStatus() {
        const today = new Date().toISOString().slice(0, 10);
        const dailyBtn = document.getElementById('btn-daily-challenge');
        if (dailyBtn && this.userData.lastDailyDate === today) {
            dailyBtn.classList.add('completed');
        }
    }

    startDailyChallenge() {
        // Daily puzzle rotation based on day of year
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        const dailyLevelId = (dayOfYear % LEVELS_DATA.length) + 1;
        this.startLevel(dailyLevelId, 'daily');
    }

    // =========================================================================
    // Global Event Listener Wiring
    // =========================================================================
    setupEventListeners() {
        // Menu Navigation Buttons
        document.getElementById('btn-play-classic').addEventListener('click', () => {
            // Start lowest unplayed level or Level 1
            const lastUnlocked = Math.max(...this.userData.unlockedLevels);
            this.startLevel(lastUnlocked, 'classic');
        });

        document.getElementById('btn-mode-relax').addEventListener('click', () => {
            this.startLevel(1, 'relax');
        });

        document.getElementById('btn-daily-challenge').addEventListener('click', () => {
            this.startDailyChallenge();
        });

        document.getElementById('btn-menu-levels').addEventListener('click', () => {
            this.showScreen('screen-level-select');
        });

        document.getElementById('btn-menu-achievements').addEventListener('click', () => {
            this.showScreen('screen-achievements');
        });

        document.getElementById('btn-menu-settings').addEventListener('click', () => {
            this.openModal('modal-settings');
        });

        document.getElementById('btn-menu-how-to-play').addEventListener('click', () => {
            this.openModal('modal-instructions');
        });

        // Back / Return Buttons
        document.querySelectorAll('.btn-back-menu').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeAllModals();
                this.stopTimer();
                this.showScreen('screen-menu');
            });
        });

        // Close Modal Buttons (Settings Done, Instructions Got It)
        document.querySelectorAll('.btn-close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeAllModals();
                window.soundEngine.playClick();
            });
        });

        // In-game HUD buttons
        document.getElementById('btn-pause').addEventListener('click', () => this.togglePause());
        document.getElementById('btn-resume').addEventListener('click', () => this.togglePause());
        document.getElementById('btn-restart').addEventListener('click', () => this.restartLevel());
        document.getElementById('btn-hint').addEventListener('click', () => this.useHint());

        // Zoom buttons
        document.getElementById('btn-zoom-in').addEventListener('click', () => this.zoomIn());
        document.getElementById('btn-zoom-out').addEventListener('click', () => this.zoomOut());
        document.getElementById('btn-zoom-reset').addEventListener('click', () => this.resetZoom());

        // Victory modal buttons
        document.getElementById('btn-victory-next').addEventListener('click', () => {
            this.closeAllModals();
            const nextLvl = this.currentLevel.id + 1;
            if (nextLvl <= LEVELS_DATA.length) {
                this.startLevel(nextLvl, this.gameMode);
            } else {
                this.showToast(`Congratulations! You've conquered all ${LEVELS_DATA.length} levels!`);
                this.showScreen('screen-level-select');
            }
        });

        // Level Select Tier Tabs
        const tierTabs = document.querySelectorAll('.tier-tab');
        tierTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tierTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const tier = tab.dataset.tier;
                this.renderLevelSelectGrid(tier);
                window.soundEngine.playClick();
            });
        });

        document.getElementById('btn-victory-replay').addEventListener('click', () => {
            this.closeAllModals();
            this.startLevel(this.currentLevel.id, this.gameMode);
        });

        // Pause Next Level button
        const pauseNextBtn = document.getElementById('btn-pause-next');
        if (pauseNextBtn) {
            pauseNextBtn.addEventListener('click', () => {
                this.closeAllModals();
                const nextLvl = this.currentLevel.id + 1;
                if (nextLvl <= LEVELS_DATA.length) {
                    this.startLevel(nextLvl, this.gameMode);
                } else {
                    this.showToast("You are already on the final level!");
                }
            });
        }

        // Game Over modal buttons
        document.getElementById('btn-gameover-retry').addEventListener('click', () => {
            this.closeAllModals();
            this.startLevel(this.currentLevel.id, this.gameMode);
        });

        // Settings Toggles
        const toggleSound = document.getElementById('setting-sound');
        const toggleMusic = document.getElementById('setting-music');
        const volumeSlider = document.getElementById('setting-volume');

        if (toggleSound) {
            toggleSound.checked = this.userData.settings.sound;
            toggleSound.addEventListener('change', (e) => {
                this.userData.settings.sound = e.target.checked;
                window.soundEngine.setSoundEnabled(e.target.checked);
                this.saveUserData();
            });
        }

        if (toggleMusic) {
            toggleMusic.checked = this.userData.settings.music;
            toggleMusic.addEventListener('change', (e) => {
                this.userData.settings.music = e.target.checked;
                window.soundEngine.setMusicEnabled(e.target.checked);
                this.saveUserData();
            });
        }

        if (volumeSlider) {
            volumeSlider.value = this.userData.settings.volume * 100;
            volumeSlider.addEventListener('input', (e) => {
                const vol = parseFloat(e.target.value) / 100;
                this.userData.settings.volume = vol;
                window.soundEngine.setVolume(vol);
                this.saveUserData();
            });
        }

        // Haptic Vibration Setting Toggle
        const toggleVibration = document.getElementById('setting-vibration');
        if (toggleVibration) {
            toggleVibration.checked = this.userData.settings.vibration !== false;
            toggleVibration.addEventListener('change', (e) => {
                this.userData.settings.vibration = e.target.checked;
                if (e.target.checked) this.triggerHaptic(50);
                this.saveUserData();
            });
        }

        // Mobile View Mode Switcher
        const btnViewMode = document.getElementById('btn-view-mode');
        if (btnViewMode) {
            btnViewMode.addEventListener('click', () => {
                this.toggleMobileViewMode();
            });
        }

        // Fullscreen Toggle
        const btnFullscreen = document.getElementById('btn-fullscreen');
        if (btnFullscreen) {
            btnFullscreen.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen().catch(() => {});
                    }
                    this.showToast('Entered Fullscreen Mode');
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen().catch(() => {});
                    }
                    this.showToast('Exited Fullscreen Mode');
                }
                this.triggerHaptic(25);
                window.soundEngine.playClick();
            });
        }

        // Mobile Floating Hold-to-Peek Button
        const btnPeek = document.getElementById('btn-peek-original');
        const canvasContainer = document.getElementById('dual-canvas-container');
        if (btnPeek && canvasContainer) {
            const startPeek = (e) => {
                e.preventDefault();
                canvasContainer.classList.add('peek-active');
                btnPeek.classList.add('active');
                this.triggerHaptic(20);
            };
            const stopPeek = (e) => {
                e.preventDefault();
                canvasContainer.classList.remove('peek-active');
                btnPeek.classList.remove('active');
            };

            btnPeek.addEventListener('touchstart', startPeek, { passive: false });
            btnPeek.addEventListener('touchend', stopPeek, { passive: false });
            btnPeek.addEventListener('touchcancel', stopPeek, { passive: false });
            btnPeek.addEventListener('mousedown', startPeek);
            btnPeek.addEventListener('mouseup', stopPeek);
            btnPeek.addEventListener('mouseleave', stopPeek);
        }

        // Mobile Floating Zoom Reset Button
        const btnMobileResetZoom = document.getElementById('btn-mobile-reset-zoom');
        if (btnMobileResetZoom) {
            btnMobileResetZoom.addEventListener('click', () => {
                this.resetZoom();
                this.triggerHaptic(25);
                window.soundEngine.playClick();
            });
        }
    }
}

window.SpotTheDifferenceGame = SpotTheDifferenceGame;

// Instantiate and start game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    window.game = new SpotTheDifferenceGame();
});
