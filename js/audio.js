/**
 * Web Audio API Sound Synthesizer & Generative Ambient Music
 * Completely self-contained, no external audio files required.
 */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
        this.musicEnabled = false;
        this.musicGain = null;
        this.sfxGain = null;
        this.masterGain = null;
        this.bgmOscillators = [];
        this.bgmTimer = null;
        this.isMusicPlaying = false;
        this.volume = 0.7;
        this.musicVolume = 0.35;
    }

    init() {
        if (this.ctx) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);

            this.sfxGain = this.ctx.createGain();
            this.sfxGain.gain.setValueAtTime(this.soundEnabled ? this.volume : 0, this.ctx.currentTime);
            this.sfxGain.connect(this.masterGain);

            this.musicGain = this.ctx.createGain();
            this.musicGain.gain.setValueAtTime(this.musicEnabled ? this.musicVolume : 0, this.ctx.currentTime);
            this.musicGain.connect(this.masterGain);
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setSoundEnabled(enabled) {
        this.soundEnabled = enabled;
        if (this.sfxGain && this.ctx) {
            this.sfxGain.gain.setValueAtTime(enabled ? this.volume : 0, this.ctx.currentTime);
        }
    }

    setMusicEnabled(enabled) {
        this.musicEnabled = enabled;
        if (this.musicGain && this.ctx) {
            this.musicGain.gain.setValueAtTime(enabled ? this.musicVolume : 0, this.ctx.currentTime);
        }
        if (enabled && !this.isMusicPlaying) {
            this.startMusic();
        } else if (!enabled && this.isMusicPlaying) {
            this.stopMusic();
        }
    }

    setVolume(val) {
        this.volume = Math.max(0, Math.min(1, val));
        if (this.sfxGain && this.ctx && this.soundEnabled) {
            this.sfxGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        }
    }

    // Play button click sound
    playClick() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.08);
    }

    // Play difference found chime
    playSuccess(combo = 1) {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        // Multi-tone chime tuned to major pentatonic scale
        const baseFreq = 523.25; // C5
        const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5]; // C5, D5, E5, G5, A5, C6
        const pitchIndex = Math.min((combo - 1) % scale.length, scale.length - 1);
        const f1 = scale[pitchIndex];
        const f2 = f1 * 1.5; // perfect fifth
        const f3 = f1 * 2;   // octave

        [f1, f2, f3].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = idx === 0 ? 'triangle' : 'sine';
            const startTime = now + idx * 0.06;
            osc.frequency.setValueAtTime(freq, startTime);

            gain.gain.setValueAtTime(0.25 / (idx + 1), startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(startTime);
            osc.stop(startTime + 0.45);
        });

        // Add a gentle sparkle shimmer
        const shimmerOsc = this.ctx.createOscillator();
        const shimmerGain = this.ctx.createGain();
        shimmerOsc.type = 'sine';
        shimmerOsc.frequency.setValueAtTime(1760, now + 0.12);
        shimmerOsc.frequency.exponentialRampToValueAtTime(2637, now + 0.35);
        shimmerGain.gain.setValueAtTime(0.08, now + 0.12);
        shimmerGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        shimmerOsc.connect(shimmerGain);
        shimmerGain.connect(this.sfxGain);
        shimmerOsc.start(now + 0.12);
        shimmerOsc.stop(now + 0.35);
    }

    // Play incorrect click penalty sound
    playError() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(85, now + 0.22);

        // Low-pass filter to make it soft, not harsh
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.22);
    }

    // Play hint reveal sparkle
    playHint() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [659.25, 783.99, 987.77, 1318.51, 1567.98]; // E5, G5, B5, E6, G6
        
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            const startTime = now + idx * 0.07;
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.18, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(startTime);
            osc.stop(startTime + 0.3);
        });
    }

    // Play level victory fanfare
    playVictory() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        // Bright triumphant chords
        const chords = [
            [523.25, 659.25, 783.99],       // C Major
            [587.33, 739.99, 880.00],       // D Major
            [659.25, 830.61, 987.77],       // E Major
            [783.99, 987.77, 1174.66, 1567.98] // G Major high resolve
        ];

        chords.forEach((chord, step) => {
            const stepTime = now + step * 0.16;
            const duration = step === chords.length - 1 ? 0.9 : 0.24;
            chord.forEach((freq, nIdx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = nIdx === 0 ? 'triangle' : 'sine';
                osc.frequency.setValueAtTime(freq, stepTime);
                gain.gain.setValueAtTime(0.15, stepTime);
                gain.gain.exponentialRampToValueAtTime(0.001, stepTime + duration);

                osc.connect(gain);
                gain.connect(this.sfxGain);

                osc.start(stepTime);
                osc.stop(stepTime + duration);
            });
        });
    }

    // Play game over sound
    playGameOver() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [440, 415.3, 392, 349.23]; // A4, G#4, G4, F4
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            const startTime = now + idx * 0.22;
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(startTime);
            osc.stop(startTime + 0.35);
        });
    }

    // Timer countdown tick
    playTick() {
        if (!this.soundEnabled) return;
        this.init();
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.04);
    }

    // Ambient procedural BGM (cozy peaceful synth pads)
    startMusic() {
        this.init();
        this.resume();
        if (this.isMusicPlaying) return;
        this.isMusicPlaying = true;

        const chordProgression = [
            [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
            [220.00, 261.63, 329.63, 392.00], // Am7   (A3, C4, E4, G4)
            [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
            [196.00, 246.94, 293.66, 349.23]  // G7    (G3, B3, D4, F4)
        ];

        let chordIndex = 0;

        const playNextChord = () => {
            if (!this.isMusicPlaying || !this.ctx) return;
            const now = this.ctx.currentTime;
            const currentChord = chordProgression[chordIndex];
            chordIndex = (chordIndex + 1) % chordProgression.length;

            const chordDuration = 3.6;

            currentChord.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();

                osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
                // Add tiny detune for analog warmth
                osc.frequency.setValueAtTime(freq, now);
                osc.detune.setValueAtTime((idx - 1.5) * 4, now);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(550, now);
                filter.frequency.exponentialRampToValueAtTime(750, now + chordDuration * 0.5);
                filter.frequency.exponentialRampToValueAtTime(500, now + chordDuration);

                // Smooth attack and release envelope
                gain.gain.setValueAtTime(0.001, now);
                gain.gain.linearRampToValueAtTime(0.05, now + 1.0);
                gain.gain.linearRampToValueAtTime(0.04, now + chordDuration - 0.8);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + chordDuration);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.musicGain);

                osc.start(now);
                osc.stop(now + chordDuration);
            });

            this.bgmTimer = setTimeout(playNextChord, (chordDuration - 0.4) * 1000);
        };

        playNextChord();
    }

    stopMusic() {
        this.isMusicPlaying = false;
        if (this.bgmTimer) {
            clearTimeout(this.bgmTimer);
            this.bgmTimer = null;
        }
    }
}

// Global sound instance
window.soundEngine = new SoundEngine();
