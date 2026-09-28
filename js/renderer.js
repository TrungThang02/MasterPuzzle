/**
 * Find the Differences - High Quality Vector Canvas Scene Renderer
 * Provides 20 distinct, beautifully illustrated scenes with 100% verified genuine visual differences.
 */

class SceneRenderer {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Helper utilities for rich vector canvas rendering
     */
    static drawLinearGrad(ctx, x1, y1, x2, y2, stops) {
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        stops.forEach(s => grad.addColorStop(s[0], s[1]));
        return grad;
    }

    static drawRadialGrad(ctx, x1, y1, r1, x2, y2, r2, stops) {
        const grad = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
        stops.forEach(s => grad.addColorStop(s[0], s[1]));
        return grad;
    }

    static drawRoundedRect(ctx, x, y, w, h, r, fill, stroke, strokeW = 1) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = fill;
            ctx.fill();
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeW;
            ctx.stroke();
        }
    }

    static drawCircle(ctx, x, y, r, fill, stroke, strokeW = 1) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        if (fill) {
            ctx.fillStyle = fill;
            ctx.fill();
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeW;
            ctx.stroke();
        }
    }

    static drawStar(ctx, cx, cy, spikes, outerR, innerR, fill, stroke) {
        let rot = (Math.PI / 2) * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerR);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerR;
            y = cy + Math.sin(rot) * outerR;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerR;
            y = cy + Math.sin(rot) * innerR;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerR);
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = fill;
            ctx.fill();
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    }

    static drawCloud(ctx, x, y, scale = 1, fill = "rgba(255, 255, 255, 0.85)") {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(0, 0, 24, 0, Math.PI * 2);
        ctx.arc(22, -8, 20, 0, Math.PI * 2);
        ctx.arc(44, 0, 22, 0, Math.PI * 2);
        ctx.arc(22, 10, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    /**
     * Master render function
     */
    render(ctx, levelId, width, height, isModified = false) {
        ctx.save();
        ctx.clearRect(0, 0, width, height);

        // Standard coordinate space: 800 x 600
        const scaleX = width / 800;
        const scaleY = height / 600;
        ctx.scale(scaleX, scaleY);

        const level = (window.LEVELS_DATA && window.LEVELS_DATA[levelId - 1]) || { archetype: ((levelId - 1) % 20) + 1, variant: 0 };
        const archetypeId = level.archetype || (((levelId - 1) % 20) + 1);

        const drawFn = this[`drawLevel${archetypeId}`];
        if (typeof drawFn === 'function') {
            drawFn.call(this, ctx, 800, 600, isModified, level);

            // Apply artistic atmospheric color grading for variant levels (variants 1..4)
            if (level.variant > 0) {
                const variantFilters = [
                    null,                        // 0: default
                    'rgba(52, 211, 153, 0.08)',  // 1: Fresh morning emerald tint
                    'rgba(249, 115, 22, 0.10)',  // 2: Golden sunset amber glow
                    'rgba(168, 85, 247, 0.11)',  // 3: Twilight mystic violet aura
                    'rgba(244, 63, 94, 0.09)'    // 4: Deep rose crimson dusk
                ];
                const tint = variantFilters[level.variant % variantFilters.length];
                if (tint) {
                    ctx.fillStyle = tint;
                    ctx.fillRect(0, 0, 800, 600);
                }
            }
        } else {
            this.drawFallback(ctx, 800, 600, levelId, isModified);
        }

        ctx.restore();
    }

    // =========================================================================
    // LEVEL 1: Cozy Living Room (5 Subtle Detective Differences)
    // =========================================================================
    drawLevel1(ctx, w, h, isMod) {
        // Wall gradient
        const wallGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 420, [
            [0, '#fef3c7'],
            [1, '#fed7aa']
        ]);
        ctx.fillStyle = wallGrad;
        ctx.fillRect(0, 0, w, 420);

        // Wallpaper pattern (soft vertical stripes)
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.08)';
        ctx.lineWidth = 14;
        for (let x = 20; x < w; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 420);
            ctx.stroke();
        }

        // Bookshelf on far left (Intricate background clutter)
        SceneRenderer.drawRoundedRect(ctx, 16, 80, 52, 280, 4, '#78350f', '#451a03', 3);
        // Shelves
        ctx.fillStyle = '#92400e';
        ctx.fillRect(18, 140, 48, 6);
        ctx.fillRect(18, 210, 48, 6);
        ctx.fillRect(18, 280, 48, 6);
        // Books on shelf 1
        const bookColors = ['#dc2626', '#2563eb', '#16a34a', '#d97706'];
        for (let b = 0; b < 4; b++) {
            ctx.fillStyle = bookColors[b];
            ctx.fillRect(22 + b * 10, 94 + (b % 2) * 6, 8, 44 - (b % 2) * 6);
        }
        // Small potted succulent on shelf 2
        SceneRenderer.drawRoundedRect(ctx, 32, 185, 18, 16, 2, '#ea580c');
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(41, 180, 7, 0, Math.PI * 2);
        ctx.fill();
        // Books on shelf 3
        for (let b = 0; b < 3; b++) {
            ctx.fillStyle = bookColors[3 - b];
            ctx.fillRect(24 + b * 12, 230, 9, 48);
        }

        // Hardwood floor
        const floorGrad = SceneRenderer.drawLinearGrad(ctx, 0, 420, 0, h, [
            [0, '#78350f'],
            [0.1, '#92400e'],
            [1, '#451a03']
        ]);
        ctx.fillStyle = floorGrad;
        ctx.fillRect(0, 420, w, h - 420);

        // Floor planks
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2;
        for (let y = 450; y < h; y += 35) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Baseboard
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 410, w, 14);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(0, 422, w, 3);

        // Window drapery / curtains framing
        ctx.fillStyle = 'rgba(251, 146, 60, 0.4)';
        // Left curtain fold
        ctx.beginPath();
        ctx.moveTo(215, 55);
        ctx.quadraticCurveTo(205, 180, 225, 320);
        ctx.lineTo(240, 320);
        ctx.quadraticCurveTo(225, 180, 240, 55);
        ctx.closePath();
        ctx.fill();
        // Right curtain fold
        ctx.beginPath();
        ctx.moveTo(485, 55);
        ctx.quadraticCurveTo(495, 180, 475, 320);
        ctx.lineTo(460, 320);
        ctx.quadraticCurveTo(475, 180, 460, 55);
        ctx.closePath();
        ctx.fill();

        // Large Window in center-left with sunny outdoor view
        ctx.save();
        SceneRenderer.drawRoundedRect(ctx, 240, 60, 240, 260, 16, '#38bdf8', '#ffffff', 8);
        ctx.clip();
        // Outside hill & sun
        SceneRenderer.drawCircle(ctx, 420, 120, 40, '#fde047');
        ctx.beginPath();
        ctx.arc(360, 360, 180, 0, Math.PI * 2);
        ctx.fillStyle = '#86efac';
        ctx.fill();
        SceneRenderer.drawCloud(ctx, 280, 100, 0.7);
        ctx.restore();

        // Window frame bars
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(356, 60, 8, 260);
        ctx.fillRect(240, 180, 240, 8);
        // Window sill
        SceneRenderer.drawRoundedRect(ctx, 230, 316, 260, 14, 4, '#f1f5f9', '#94a3b8', 1);

        // Large Oval Area Rug with decorative fringe
        const rugGrad = SceneRenderer.drawRadialGrad(ctx, 400, 510, 30, 400, 510, 220, [
            [0, '#fbcfe8'],
            [0.7, '#f472b6'],
            [1, '#be185d']
        ]);
        ctx.beginPath();
        ctx.ellipse(400, 510, 250, 65, 0, 0, Math.PI * 2);
        ctx.fillStyle = rugGrad;
        ctx.fill();
        ctx.strokeStyle = '#fdf2f8';
        ctx.lineWidth = 4;
        ctx.setLineDash([8, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Cozy Modern Sofa on right (centers around x: 580, y: 390)
        ctx.fillStyle = '#0284c7';
        SceneRenderer.drawRoundedRect(ctx, 470, 330, 250, 140, 24, '#0284c7', '#0369a1', 3);
        // Sofa back cushions
        SceneRenderer.drawRoundedRect(ctx, 480, 300, 110, 80, 16, '#0ea5e9');
        SceneRenderer.drawRoundedRect(ctx, 600, 300, 110, 80, 16, '#0ea5e9');
        // Armrests
        SceneRenderer.drawRoundedRect(ctx, 455, 350, 36, 110, 18, '#38bdf8', '#0284c7', 2);
        SceneRenderer.drawRoundedRect(ctx, 700, 350, 36, 110, 18, '#38bdf8', '#0284c7', 2);

        // =====================================================================
        // SUBTLE DIFFERENCE 1: Wall Clock Markers (x: 400, y: 80)
        // Original: Double golden dot marker at 12 o'clock
        // Modified: Single dot marker (subtle inspection required)
        // =====================================================================
        ctx.save();
        SceneRenderer.drawCircle(ctx, 400, 80, 34, '#ffffff', '#b45309', 4);
        SceneRenderer.drawCircle(ctx, 400, 80, 30, '#fef3c7');
        // Clock tick dots
        for (let a = 1; a < 12; a++) {
            const ang = (a * Math.PI) / 6;
            ctx.fillStyle = '#78350f';
            ctx.fillRect(400 + Math.sin(ang) * 24 - 1.5, 80 - Math.cos(ang) * 24 - 1.5, 3, 3);
        }
        // 12 o'clock marker difference
        ctx.fillStyle = '#b45309';
        if (!isMod) {
            // Original: Double gold dot marker at 12
            ctx.fillRect(397, 57, 2.5, 4);
            ctx.fillRect(401, 57, 2.5, 4);
        } else {
            // Modified: Single dot marker
            ctx.fillRect(399, 57, 2.5, 4);
        }
        // Center pin
        SceneRenderer.drawCircle(ctx, 400, 80, 3.5, '#78350f');
        // Hands: Both at 10:10, subtle minute angle
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(400, 80);
        ctx.lineTo(400 - 15, 80 - 10); // hour hand to 10
        ctx.moveTo(400, 80);
        ctx.lineTo(400 + 15, 80 - 10); // minute hand to 2
        ctx.stroke();
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 2: Floor Lamp Brass Pull-Chain (x: 108, y: 275)
        // Original: Has slender brass pull-chain with golden bead
        // Modified: Pull-chain is missing!
        // Lampshade color is identical (#2dd4bf) in BOTH views!
        // =====================================================================
        ctx.save();
        // Lamp stand
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(96, 470);
        ctx.lineTo(96, 210);
        ctx.stroke();
        // Base
        SceneRenderer.drawCircle(ctx, 96, 470, 24, '#64748b');
        // Lamp Shade: Identical classy mint shade in both
        const shadeColor = '#2dd4bf';
        const shadeBorder = '#0d9488';
        ctx.beginPath();
        ctx.moveTo(66, 260);
        ctx.lineTo(126, 260);
        ctx.lineTo(112, 200);
        ctx.lineTo(80, 200);
        ctx.closePath();
        ctx.fillStyle = shadeColor;
        ctx.fill();
        ctx.strokeStyle = shadeBorder;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Warm glow underneath (identical in both)
        const lampGlow = SceneRenderer.drawRadialGrad(ctx, 96, 262, 5, 96, 262, 60, [
            [0, 'rgba(45, 212, 191, 0.35)'],
            [1, 'rgba(255, 255, 255, 0)']
        ]);
        ctx.fillStyle = lampGlow;
        ctx.beginPath();
        ctx.moveTo(66, 260);
        ctx.lineTo(126, 260);
        ctx.lineTo(146, 320);
        ctx.lineTo(46, 320);
        ctx.closePath();
        ctx.fill();

        // Difference: Pull chain with bead
        if (!isMod) {
            ctx.strokeStyle = '#d97706';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(108, 260);
            ctx.lineTo(108, 282);
            ctx.stroke();
            SceneRenderer.drawCircle(ctx, 108, 284, 3, '#f59e0b', '#b45309', 1);
        }
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 3: Wall Painting Seagulls (x: 642, y: 106)
        // Original: 3 flying seagulls in the sunset sky
        // Modified: Only 2 seagulls (one missing)
        // Both images have the exact same Sailboat on sunset sea!
        // =====================================================================
        ctx.save();
        SceneRenderer.drawRoundedRect(ctx, 600, 75, 110, 110, 6, '#451a03', '#78350f', 5);
        ctx.beginPath();
        ctx.rect(608, 83, 94, 94);
        ctx.clip();
        // Sunset gradient
        const seaGrad = SceneRenderer.drawLinearGrad(ctx, 608, 83, 608, 177, [
            [0, '#fb923c'],
            [0.5, '#f43f5e'],
            [1, '#3b82f6']
        ]);
        ctx.fillStyle = seaGrad;
        ctx.fillRect(608, 83, 94, 94);
        // Sailboat
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(655, 110);
        ctx.lineTo(655, 145);
        ctx.lineTo(675, 145);
        ctx.closePath();
        ctx.fill();
        // Boat hull
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.moveTo(640, 148);
        ctx.lineTo(676, 148);
        ctx.lineTo(670, 158);
        ctx.lineTo(646, 158);
        ctx.closePath();
        ctx.fill();

        // Seagulls in sky
        const drawSeagull = (bx, by) => {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(bx - 3, by, 3, Math.PI, 0);
            ctx.arc(bx + 3, by, 3, Math.PI, 0);
            ctx.stroke();
        };
        drawSeagull(634, 102);
        drawSeagull(648, 96);
        // Third seagull only in original!
        if (!isMod) {
            drawSeagull(658, 106);
        }
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 4: Sleeping Cat Tail Tip (x: 232, y: 466)
        // Original: White fluffy tip on the curved tail
        // Modified: Tail tip is solid ginger (stripe missing)
        // =====================================================================
        ctx.save();
        // Cat body
        SceneRenderer.drawCircle(ctx, 200, 456, 32, '#ea580c');
        SceneRenderer.drawCircle(ctx, 176, 442, 20, '#ea580c'); // Cat head
        // Ears
        ctx.fillStyle = '#c2410c';
        ctx.beginPath();
        ctx.moveTo(164, 432);
        ctx.lineTo(168, 416);
        ctx.lineTo(178, 428);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(178, 428);
        ctx.lineTo(188, 416);
        ctx.lineTo(192, 432);
        ctx.closePath();
        ctx.fill();
        // Sleeping eye curves
        ctx.strokeStyle = '#7c2d12';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(170, 444, 4, 0, Math.PI);
        ctx.stroke();
        // Tail
        ctx.beginPath();
        ctx.arc(224, 460, 14, 0, Math.PI * 1.2);
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#ea580c';
        ctx.stroke();
        // Tail tip difference:
        if (!isMod) {
            // White tip
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(233, 466, 4.5, 0, Math.PI * 2);
            ctx.fill();
        }
        // Bow Tie / Collar (identical red collar in both)
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(186, 448);
        ctx.lineTo(194, 444);
        ctx.lineTo(194, 452);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(186, 448);
        ctx.lineTo(178, 444);
        ctx.lineTo(178, 452);
        ctx.closePath();
        ctx.fill();
        SceneRenderer.drawCircle(ctx, 186, 448, 3, '#ffffff');
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 5: Cushion Tufting Button (x: 516, y: 391)
        // Original: Cushion has an embroidered floral button in the center
        // Modified: Center tufted button is missing!
        // Both have the same yellow cushion and stripes!
        // =====================================================================
        ctx.save();
        SceneRenderer.drawRoundedRect(ctx, 490, 365, 52, 52, 12, '#fde047', '#eab308', 2);
        ctx.beginPath();
        ctx.rect(490, 365, 52, 52);
        ctx.clip();
        // Diagonal stripes in both
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3.5;
        for (let i = -40; i < 90; i += 13) {
            ctx.beginPath();
            ctx.moveTo(490 + i, 365);
            ctx.lineTo(490 + i + 40, 417);
            ctx.stroke();
        }
        // Center button difference:
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 516, 391, 5, '#b91c1c', '#ffffff', 1.5);
        }
        ctx.restore();

        // Coffee table in center
        SceneRenderer.drawRoundedRect(ctx, 310, 440, 150, 40, 8, '#b45309', '#78350f', 2);
        // Table legs
        ctx.fillStyle = '#78350f';
        ctx.fillRect(324, 480, 10, 36);
        ctx.fillRect(426, 480, 10, 36);
        // Teacup with saucer and steam curl
        SceneRenderer.drawRoundedRect(ctx, 372, 436, 26, 4, 2, '#e2e8f0', '#94a3b8', 1); // saucer
        SceneRenderer.drawRoundedRect(ctx, 377, 424, 16, 13, 3, '#f8fafc', '#94a3b8', 1); // cup
        // Tea steam curl
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(385, 420);
        ctx.quadraticCurveTo(382, 412, 387, 406);
        ctx.stroke();
    }

    // =========================================================================
    // LEVEL 2: Sunny Meadow Farm (5 differences)
    // =========================================================================
    drawLevel2(ctx, w, h, isMod) {
        // Sky gradient
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 350, [
            [0, '#60a5fa'],
            [0.7, '#93c5fd'],
            [1, '#fef08a']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 350);

        // Sun
        SceneRenderer.drawCircle(ctx, 690, 70, 42, '#fde047');
        SceneRenderer.drawCircle(ctx, 690, 70, 52, 'rgba(253, 224, 71, 0.3)');

        // Fluffy clouds
        SceneRenderer.drawCloud(ctx, 120, 80, 1.2);
        SceneRenderer.drawCloud(ctx, 450, 95, 0.9);

        // Rolling green hills
        ctx.fillStyle = '#86efac';
        ctx.beginPath();
        ctx.arc(150, 460, 240, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.arc(620, 440, 260, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#22c55e';
        ctx.fillRect(0, 380, w, h - 380);

        // --- Barn House on left (Center ~ x: 220, y: 240) ---
        // Barn main body
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(160, 170, 130, 130);
        // Barn white cross trim
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.strokeRect(170, 180, 110, 110);
        ctx.beginPath();
        ctx.moveTo(170, 180);
        ctx.lineTo(280, 290);
        ctx.moveTo(280, 180);
        ctx.lineTo(170, 290);
        ctx.stroke();

        // Barn roof
        ctx.fillStyle = '#991b1b';
        ctx.beginPath();
        ctx.moveTo(145, 170);
        ctx.lineTo(225, 90);
        ctx.lineTo(305, 170);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#7f1d1d';
        ctx.lineWidth = 3;
        ctx.stroke();

        // --- DIFFERENCE 1: Barn Weathercock (0.28, 0.25 -> x: 224, y: 150) ---
        ctx.save();
        // Roof spire
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(225, 90);
        ctx.lineTo(225, 60);
        ctx.stroke();
        // Weathercock Rooster: Original = Facing Right; Modified = Facing Left
        ctx.fillStyle = '#eab308';
        ctx.translate(225, 60);
        if (isMod) {
            ctx.scale(-1, 1); // Flip horizontally
        }
        // Rooster silhouette
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.arc(7, -4, 5, 0, Math.PI * 2);
        ctx.fill();
        // Beak
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        ctx.moveTo(11, -4);
        ctx.lineTo(16, -2);
        ctx.lineTo(11, 0);
        ctx.closePath();
        ctx.fill();
        // Comb
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(5, -11, 4, 4);
        ctx.restore();

        // --- Windmill on right (Center ~ x: 680, y: 170) ---
        // Tower
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.moveTo(655, 260);
        ctx.lineTo(665, 120);
        ctx.lineTo(695, 120);
        ctx.lineTo(705, 260);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Windmill roof cap
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(680, 120, 20, Math.PI, 0);
        ctx.fill();

        // =====================================================================
        // SUBTLE DIFFERENCE 2: Windmill Top Blade Weather Ribbon (x: 680, y: 70)
        // Original: Top vertical blade has a small blue ribbon on its tip
        // Modified: Ribbon is missing!
        // Blades are identical clean white in both!
        // =====================================================================
        ctx.save();
        ctx.translate(680, 120);
        // Blade hub
        SceneRenderer.drawCircle(ctx, 0, 0, 7, '#1e293b');
        for (let b = 0; b < 4; b++) {
            ctx.rotate(Math.PI / 2);
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(2, -6, 52, 12);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(16, -4, 34, 8);
        }
        // Weather ribbon on top blade in original
        if (!isMod) {
            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.moveTo(0, -52);
            ctx.lineTo(10, -56);
            ctx.lineTo(4, -50);
            ctx.lineTo(10, -44);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 3: Dairy Cow Brass Bell (x: 416, y: 430)
        // Original: Cow wears a red collar with a tiny golden bell
        // Modified: Bell is missing!
        // =====================================================================
        ctx.save();
        ctx.translate(460, 420);
        // Cow body
        SceneRenderer.drawRoundedRect(ctx, -40, -25, 75, 50, 16, '#ffffff', '#475569', 2);
        // Legs
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-32, 24, 10, 24);
        ctx.fillRect(-12, 24, 10, 24);
        ctx.fillRect(12, 24, 10, 24);
        ctx.fillRect(24, 24, 10, 24);
        // Cow head
        SceneRenderer.drawCircle(ctx, -48, -12, 16, '#ffffff', '#475569', 2);
        SceneRenderer.drawRoundedRect(ctx, -62, -8, 20, 14, 6, '#fbcfe8'); // Muzzle
        // Cow spot on flank (identical in both)
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.ellipse(8, -4, 14, 11, 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Collar & bell difference
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-48, 2, 8, 4); // collar strap
        if (!isMod) {
            // Golden bell
            SceneRenderer.drawCircle(ctx, -44, 10, 4.5, '#f59e0b', '#b45309', 1);
        }
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 4: Apple on Lower Branch (x: 112, y: 324)
        // Original: 4th ripe red apple hanging on the lower branch
        // Modified: Apple is missing!
        // =====================================================================
        // Big Apple Tree on bottom-left
        ctx.save();
        ctx.fillStyle = '#78350f';
        ctx.fillRect(100, 310, 26, 120); // Trunk
        // Foliage
        ctx.fillStyle = '#15803d';
        SceneRenderer.drawCircle(ctx, 112, 270, 50);
        SceneRenderer.drawCircle(ctx, 80, 290, 35);
        SceneRenderer.drawCircle(ctx, 145, 290, 38);
        // Common Apples
        SceneRenderer.drawCircle(ctx, 82, 270, 7, '#dc2626');
        SceneRenderer.drawCircle(ctx, 130, 260, 7, '#dc2626');
        SceneRenderer.drawCircle(ctx, 145, 305, 7, '#dc2626');
        // Lower branch apple (only in original)
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 112, 324, 7.5, '#dc2626');
            ctx.fillStyle = '#15803d'; // Little leaf
            ctx.fillRect(113, 314, 4, 3);
        }
        ctx.restore();

        // =====================================================================
        // SUBTLE DIFFERENCE 5: Honeybee near Sunflowers (x: 644, y: 462)
        // Original: Little honeybee hovering near the flower
        // Modified: Honeybee is absent!
        // =====================================================================
        ctx.save();
        const drawSingleSunflower = (sx, sy) => {
            // Stem
            ctx.strokeStyle = '#15803d';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(sx, sy + 40);
            ctx.lineTo(sx, sy);
            ctx.stroke();
            // Petals
            ctx.fillStyle = '#eab308';
            for (let p = 0; p < 8; p++) {
                const ang = (p * Math.PI) / 4;
                ctx.beginPath();
                ctx.arc(sx + Math.cos(ang) * 14, sy + Math.sin(ang) * 14, 6, 0, Math.PI * 2);
                ctx.fill();
            }
            // Center disc
            SceneRenderer.drawCircle(ctx, sx, sy, 10, '#78350f');
        };
        drawSingleSunflower(610, 490);
        drawSingleSunflower(660, 500);

        // Hovering honeybee difference
        if (!isMod) {
            ctx.save();
            ctx.translate(644, 462);
            // Bee body
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            ctx.ellipse(0, 0, 6, 4, 0.2, 0, Math.PI * 2);
            ctx.fill();
            // Stripes
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(-2, -3.5, 2, 7);
            ctx.fillRect(2, -3.5, 2, 7);
            // Wings
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.ellipse(-1, -6, 3, 5, -0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        ctx.restore();

        // Fence posts across middle
        ctx.fillStyle = '#ffffff';
        for (let fx = 300; fx < 600; fx += 45) {
            ctx.fillRect(fx, 345, 8, 35);
        }
        ctx.fillRect(295, 355, 310, 6);
        ctx.fillRect(295, 370, 310, 6);
    }

    // =========================================================================
    // LEVEL 3: Tropical Coral Beach (5 differences)
    // =========================================================================
    drawLevel3(ctx, w, h, isMod) {
        // Sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 260, [
            [0, '#38bdf8'],
            [0.7, '#bae6fd'],
            [1, '#fed7aa']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 260);

        // Golden Sun
        SceneRenderer.drawCircle(ctx, 160, 80, 36, '#fbbf24');

        // --- DIFFERENCE 5: Sky Cloud (0.44, 0.14 -> x: 352, y: 84) ---
        ctx.save();
        if (!isMod) {
            // Normal puffy cloud
            SceneRenderer.drawCloud(ctx, 352, 84, 1.1);
        } else {
            // Heart-shaped cloud!
            ctx.save();
            ctx.translate(352, 84);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.beginPath();
            ctx.moveTo(0, 16);
            ctx.bezierCurveTo(-22, -12, -32, -28, 0, -38);
            ctx.bezierCurveTo(32, -28, 22, -12, 0, 16);
            ctx.fill();
            ctx.restore();
        }
        ctx.restore();

        // Distant island on horizon
        ctx.fillStyle = '#0d9488';
        ctx.beginPath();
        ctx.ellipse(540, 240, 90, 20, 0, 0, Math.PI * 2);
        ctx.fill();

        // Turquoise Ocean
        const seaGrad = SceneRenderer.drawLinearGrad(ctx, 0, 230, 0, 380, [
            [0, '#0284c7'],
            [0.4, '#06b6d4'],
            [1, '#22d3ee']
        ]);
        ctx.fillStyle = seaGrad;
        ctx.fillRect(0, 230, w, 150);

        // Ocean waves white foam
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let wx = 0; wx < w; wx += 40) {
            ctx.arc(wx + 20, 375, 18, Math.PI, 0);
        }
        ctx.stroke();

        // --- DIFFERENCE 1: Sailboat Stripe (0.82, 0.34 -> x: 656, y: 204) ---
        ctx.save();
        // Boat Hull
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(630, 220);
        ctx.lineTo(685, 220);
        ctx.lineTo(675, 232);
        ctx.lineTo(640, 232);
        ctx.closePath();
        ctx.fill();
        // Main Sail: Original = Cyan (#06b6d4); Modified = Magenta (#ec4899)
        const sailColor = isMod ? '#ec4899' : '#06b6d4';
        ctx.fillStyle = sailColor;
        ctx.beginPath();
        ctx.moveTo(658, 175);
        ctx.lineTo(658, 218);
        ctx.lineTo(682, 218);
        ctx.closePath();
        ctx.fill();
        // Front sail
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.moveTo(656, 182);
        ctx.lineTo(656, 218);
        ctx.lineTo(638, 218);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Golden Sandy Beach
        const sandGrad = SceneRenderer.drawLinearGrad(ctx, 0, 370, 0, h, [
            [0, '#fef08a'],
            [0.3, '#fde047'],
            [1, '#eab308']
        ]);
        ctx.fillStyle = sandGrad;
        ctx.fillRect(0, 370, w, h - 370);

        // Large Palm Tree on left
        ctx.save();
        // Trunk
        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 18;
        ctx.beginPath();
        ctx.moveTo(110, h);
        ctx.quadraticCurveTo(120, 340, 144, 216);
        ctx.stroke();
        // Palm Fronds
        ctx.fillStyle = '#16a34a';
        for (let pf = 0; pf < 6; pf++) {
            const pang = (pf * Math.PI) / 3 - 0.4;
            ctx.beginPath();
            ctx.moveTo(144, 216);
            ctx.quadraticCurveTo(144 + Math.cos(pang) * 70, 216 + Math.sin(pang) * 70 - 20, 144 + Math.cos(pang) * 110, 216 + Math.sin(pang) * 110);
            ctx.quadraticCurveTo(144 + Math.cos(pang) * 60, 216 + Math.sin(pang) * 60 + 10, 144, 216);
            ctx.fill();
        }

        // --- DIFFERENCE 3: Coconut Count (0.18, 0.36 -> x: 144, y: 216) ---
        SceneRenderer.drawCircle(ctx, 138, 224, 7, '#713f12');
        SceneRenderer.drawCircle(ctx, 150, 222, 7, '#713f12');
        // Original has 3 coconuts; Modified has only 2 (missing 3rd one!)
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 144, 234, 7, '#713f12');
        }
        ctx.restore();

        // --- DIFFERENCE 2: Sand Crab with Sunglasses (0.26, 0.82 -> x: 208, y: 492) ---
        ctx.save();
        ctx.translate(208, 492);
        // Crab body
        SceneRenderer.drawCircle(ctx, 0, 0, 14, '#ef4444');
        // Claws
        SceneRenderer.drawCircle(ctx, -18, -10, 7, '#dc2626');
        SceneRenderer.drawCircle(ctx, 18, -10, 7, '#dc2626');
        // Eyes
        SceneRenderer.drawCircle(ctx, -5, -14, 4, '#ffffff');
        SceneRenderer.drawCircle(ctx, 5, -14, 4, '#ffffff');
        SceneRenderer.drawCircle(ctx, -5, -14, 2, '#000000');
        SceneRenderer.drawCircle(ctx, 5, -14, 2, '#000000');
        // Sunglasses on Modified!
        if (isMod) {
            ctx.fillStyle = '#0f172a';
            SceneRenderer.drawRoundedRect(ctx, -10, -18, 9, 8, 2, '#0f172a');
            SceneRenderer.drawRoundedRect(ctx, 1, -18, 9, 8, 2, '#0f172a');
            ctx.fillRect(-2, -15, 4, 2);
        }
        ctx.restore();

        // --- DIFFERENCE 4: Starfish Color (0.68, 0.86 -> x: 544, y: 516) ---
        ctx.save();
        const starColor = isMod ? '#0ea5e9' : '#f43f5e';
        SceneRenderer.drawStar(ctx, 544, 516, 5, 20, 9, starColor, '#ffffff');
        ctx.restore();

        // Beach Umbrella on right
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.arc(680, 420, 50, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.moveTo(680, 420);
        ctx.arc(680, 420, 50, Math.PI + 0.6, Math.PI + 1.5);
        ctx.closePath();
        ctx.fill();
        // Umbrella pole
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(680, 420);
        ctx.lineTo(670, 530);
        ctx.stroke();
    }

    // =========================================================================
    // LEVEL 4: Sweet Pastry Bakery (5 differences)
    // =========================================================================
    drawLevel4(ctx, w, h, isMod) {
        // Bakery wall with cozy brick pattern
        ctx.fillStyle = '#fff7ed';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(234, 88, 12, 0.08)';
        ctx.lineWidth = 2;
        for (let y = 0; y < 320; y += 24) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Bakery wooden counter & shelves
        SceneRenderer.drawRoundedRect(ctx, 40, 200, 720, 18, 6, '#9a3412'); // Upper shelf
        SceneRenderer.drawRoundedRect(ctx, 20, 360, 760, 220, 12, '#c2410c'); // Main counter top
        ctx.fillStyle = '#7c2d12';
        ctx.fillRect(30, 390, 740, 190);

        // Baker character in center background
        ctx.save();
        ctx.translate(384, 156);
        // Baker face
        SceneRenderer.drawCircle(ctx, 0, 40, 26, '#fed7aa');
        // Eyes and smile
        ctx.fillStyle = '#78350f';
        SceneRenderer.drawCircle(ctx, -8, 38, 3);
        SceneRenderer.drawCircle(ctx, 8, 38, 3);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 46, 6, 0, Math.PI);
        ctx.stroke();
        // Baker mustache
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.ellipse(-6, 52, 7, 3, -0.2, 0, Math.PI * 2);
        ctx.ellipse(6, 52, 7, 3, 0.2, 0, Math.PI * 2);
        ctx.fill();

        // --- DIFFERENCE 3: Chef Hat Ribbon (0.48, 0.26 -> x: 384, y: 156) ---
        // Big White Chef Toque
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(-16, -4, 22, 0, Math.PI * 2);
        ctx.arc(16, -4, 22, 0, Math.PI * 2);
        ctx.arc(0, -18, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(-22, 4, 44, 16);
        // Ribbon: Modified has a stylish blue ribbon!
        if (isMod) {
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(-22, 14, 44, 6);
        }
        ctx.restore();

        // --- DIFFERENCE 1: Cupcake Cherry / Strawberry (0.22, 0.58 -> x: 176, y: 348) ---
        ctx.save();
        ctx.translate(176, 348);
        // Cupcake wrapper
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.moveTo(-20, 10);
        ctx.lineTo(-14, 30);
        ctx.lineTo(14, 30);
        ctx.lineTo(20, 10);
        ctx.closePath();
        ctx.fill();
        // Swirl frosting
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(0, 6, 22, Math.PI, 0);
        ctx.fill();
        ctx.arc(0, -4, 15, Math.PI, 0);
        ctx.fill();
        // Topping: Original = Red Cherry; Modified = Strawberry with green leaf
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, -12, 6, '#dc2626');
            ctx.strokeStyle = '#78350f';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, -12);
            ctx.quadraticCurveTo(4, -22, 8, -20);
            ctx.stroke();
        } else {
            // Strawberry
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.moveTo(0, -4);
            ctx.lineTo(-6, -14);
            ctx.lineTo(6, -14);
            ctx.closePath();
            ctx.fill();
            // Green leaf
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(-4, -17, 8, 3);
        }
        ctx.restore();

        // --- DIFFERENCE 2: Pretzel on Shelf (0.74, 0.48 -> x: 592, y: 288) ---
        ctx.save();
        ctx.translate(592, 288);
        // Pretzel: Original = Golden Baked (#d97706); Modified = Dark Chocolate (#451a03)
        const pretColor = isMod ? '#451a03' : '#d97706';
        ctx.strokeStyle = pretColor;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(-10, -5, 12, 0, Math.PI * 2);
        ctx.arc(10, -5, 12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeRect(-16, 2, 32, 10);
        // Salt crystals on original
        if (!isMod) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(-12, -8, 2, 2);
            ctx.fillRect(8, -6, 2, 2);
            ctx.fillRect(0, 6, 2, 2);
        }
        ctx.restore();

        // --- DIFFERENCE 4: Baguette Crust Cuts (0.38, 0.72 -> x: 304, y: 432) ---
        ctx.save();
        ctx.translate(304, 432);
        ctx.rotate(-0.3);
        SceneRenderer.drawRoundedRect(ctx, -40, -14, 80, 28, 12, '#ea580c', '#c2410c', 2);
        // Diagonal scoring: Original = 4 cuts; Modified = 2 cuts
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        const cuts = isMod ? [-12, 12] : [-24, -8, 8, 24];
        cuts.forEach(cx => {
            ctx.beginPath();
            ctx.moveTo(cx - 4, -8);
            ctx.lineTo(cx + 4, 8);
            ctx.stroke();
        });
        ctx.restore();

        // --- DIFFERENCE 5: Coffee Mug Heart Steam (0.84, 0.76 -> x: 672, y: 456) ---
        ctx.save();
        ctx.translate(672, 456);
        // Mug body
        SceneRenderer.drawRoundedRect(ctx, -16, 0, 32, 36, 6, '#0284c7');
        // Mug handle
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(18, 18, 10, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        // Steam: Original has steam; Modified has missing steam!
        if (!isMod) {
            ctx.strokeStyle = 'rgba(203, 213, 225, 0.85)';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(-4, -4);
            ctx.bezierCurveTo(-10, -14, 0, -22, -6, -32);
            ctx.moveTo(6, -4);
            ctx.bezierCurveTo(12, -14, 2, -22, 8, -32);
            ctx.stroke();
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 5: Playful Puppy Park (5 differences)
    // =========================================================================
    drawLevel5(ctx, w, h, isMod) {
        // Sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 300, [
            [0, '#38bdf8'],
            [1, '#bae6fd']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 300);

        // Lush grass lawn
        const grassGrad = SceneRenderer.drawLinearGrad(ctx, 0, 280, 0, h, [
            [0, '#4ade80'],
            [0.5, '#22c55e'],
            [1, '#15803d']
        ]);
        ctx.fillStyle = grassGrad;
        ctx.fillRect(0, 280, w, h - 280);

        // Doghouse on left
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(60, 380, 110, 110);
        ctx.fillStyle = '#7f1d1d';
        ctx.beginPath();
        ctx.moveTo(45, 380);
        ctx.lineTo(115, 310);
        ctx.lineTo(185, 380);
        ctx.closePath();
        ctx.fill();
        // Doghouse door
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(115, 440, 28, Math.PI, 0);
        ctx.lineTo(143, 490);
        ctx.lineTo(87, 490);
        ctx.closePath();
        ctx.fill();

        // --- DIFFERENCE 5: Dog Bone beside Doghouse (0.15, 0.84 -> x: 120, y: 504) ---
        if (!isMod) {
            ctx.save();
            ctx.translate(120, 504);
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            ctx.fillRect(-12, -4, 24, 8);
            SceneRenderer.drawCircle(ctx, -12, -5, 4);
            SceneRenderer.drawCircle(ctx, -12, 5, 4);
            SceneRenderer.drawCircle(ctx, 12, -5, 4);
            SceneRenderer.drawCircle(ctx, 12, 5, 4);
            ctx.restore();
        }

        // Playful Puppy in center (around x: 336, y: 372)
        ctx.save();
        ctx.translate(336, 372);
        // Body
        SceneRenderer.drawRoundedRect(ctx, -35, -20, 70, 48, 18, '#fbbf24', '#d97706', 2);
        // Paws
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-28, 22, 12, 22);
        ctx.fillRect(-8, 22, 12, 22);
        ctx.fillRect(16, 22, 12, 22);
        // Head
        SceneRenderer.drawCircle(ctx, 36, -18, 24, '#fbbf24', '#d97706', 2);
        // Floppy ears
        SceneRenderer.drawRoundedRect(ctx, 22, -12, 12, 26, 6, '#b45309');
        // Snout
        SceneRenderer.drawCircle(ctx, 50, -12, 10, '#fef08a');
        SceneRenderer.drawCircle(ctx, 54, -16, 4, '#0f172a'); // Nose
        // Happy eye
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(38, -22, 5, Math.PI, 0);
        ctx.stroke();
        // Tail wag
        ctx.beginPath();
        ctx.moveTo(-32, -10);
        ctx.quadraticCurveTo(-50, -32, -44, -40);
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 8;
        ctx.stroke();

        // --- DIFFERENCE 2: Collar Tag (0.42, 0.62 -> x: 350, y: 372) ---
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(28, -2, 14, 0.2, Math.PI * 0.8);
        ctx.stroke();
        // Tag: Original = Round Gold Coin; Modified = Star Badge
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 32, 14, 6, '#eab308', '#ffffff', 1);
        } else {
            SceneRenderer.drawStar(ctx, 32, 14, 5, 8, 4, '#38bdf8', '#ffffff');
        }
        ctx.restore();

        // --- DIFFERENCE 1: Ball Color (0.78, 0.76 -> x: 624, y: 456) ---
        ctx.save();
        const ballColor = isMod ? '#a855f7' : '#84cc16';
        SceneRenderer.drawCircle(ctx, 624, 456, 22, ballColor, '#ffffff', 3);
        // Curved tennis seam
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(616, 456, 16, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(632, 456, 16, Math.PI / 2, -Math.PI / 2);
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 3: Flying Kite (0.82, 0.16 -> x: 656, y: 96) ---
        ctx.save();
        ctx.translate(656, 96);
        ctx.rotate(0.2);
        // Diamond Kite
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(0, -32);
        ctx.lineTo(24, 0);
        ctx.lineTo(0, 32);
        ctx.lineTo(-24, 0);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(0, -32);
        ctx.lineTo(24, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, 32);
        ctx.lineTo(-24, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        // Kite Tail with Bows
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 32);
        ctx.bezierCurveTo(15, 60, -10, 80, 20, 110);
        ctx.stroke();
        // Bow count: Original = 2 bows; Modified = 4 bows!
        const bowTies = isMod ? [45, 65, 85, 105] : [55, 90];
        ctx.fillStyle = '#06b6d4';
        bowTies.forEach(by => {
            ctx.beginPath();
            ctx.arc(8, by, 4, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();

        // --- DIFFERENCE 4: Butterfly Color (0.24, 0.38 -> x: 192, y: 228) ---
        ctx.save();
        ctx.translate(192, 228);
        const bflyColor = isMod ? '#8b5cf6' : '#f97316';
        ctx.fillStyle = bflyColor;
        // Wings
        ctx.beginPath();
        ctx.ellipse(-8, -6, 12, 8, -0.4, 0, Math.PI * 2);
        ctx.ellipse(8, -6, 12, 8, 0.4, 0, Math.PI * 2);
        ctx.ellipse(-6, 8, 8, 6, 0.3, 0, Math.PI * 2);
        ctx.ellipse(6, 8, 8, 6, -0.3, 0, Math.PI * 2);
        ctx.fill();
        // Body
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-2, -10, 4, 20);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 6: Enchanted Fairy Forest (7 differences)
    // =========================================================================
    drawLevel6(ctx, w, h, isMod) {
        // Deep magical twilight background
        const bgGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, h, [
            [0, '#0f172a'],
            [0.5, '#1e1b4b'],
            [1, '#064e3b']
        ]);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        // Ancient Twisted Tree on right
        ctx.fillStyle = '#3f2212';
        ctx.beginPath();
        ctx.moveTo(600, h);
        ctx.quadraticCurveTo(620, 300, 680, 0);
        ctx.lineTo(760, 0);
        ctx.quadraticCurveTo(700, 320, 780, h);
        ctx.closePath();
        ctx.fill();

        // Tree hollow on right (x: 624, y: 156)
        SceneRenderer.drawCircle(ctx, 624, 156, 26, '#1a0d05');

        // --- DIFFERENCE 2: Hollow Tree Owl Eyes (0.78, 0.26 -> x: 624, y: 156) ---
        ctx.save();
        if (!isMod) {
            // Amber round eyes
            SceneRenderer.drawCircle(ctx, 616, 156, 6, '#f59e0b');
            SceneRenderer.drawCircle(ctx, 632, 156, 6, '#f59e0b');
            SceneRenderer.drawCircle(ctx, 616, 156, 3, '#0f172a');
            SceneRenderer.drawCircle(ctx, 632, 156, 3, '#0f172a');
        } else {
            // Sleepy winking eye
            SceneRenderer.drawCircle(ctx, 616, 156, 6, '#f59e0b');
            SceneRenderer.drawCircle(ctx, 616, 156, 3, '#0f172a');
            // Winking arc on other
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(632, 156, 5, 0, Math.PI);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 4: Hanging Lantern Flame (0.15, 0.36 -> x: 120, y: 216) ---
        ctx.save();
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 160);
        ctx.quadraticCurveTo(80, 170, 120, 200);
        ctx.stroke();
        // Lantern cage
        SceneRenderer.drawRoundedRect(ctx, 108, 200, 24, 34, 4, '#1e293b', '#e2e8f0', 1.5);
        // Crystal Flame: Original = Golden Firefly Glow; Modified = Eerie Cyan Blue
        const flameColor = isMod ? '#06b6d4' : '#fbbf24';
        SceneRenderer.drawCircle(ctx, 120, 217, 7, flameColor);
        ctx.restore();

        // --- DIFFERENCE 3: Fairy Wings Glow (0.48, 0.44 -> x: 384, y: 264) ---
        ctx.save();
        ctx.translate(384, 264);
        // Little Fairy
        SceneRenderer.drawCircle(ctx, 0, 0, 9, '#fed7aa'); // Face
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(-5, 9, 10, 16); // Dress
        // Wings: Original = Radiant Emerald (#10b981); Modified = Ethereal Purple (#c084fc)
        const wingColor = isMod ? 'rgba(192, 132, 252, 0.85)' : 'rgba(16, 185, 129, 0.85)';
        ctx.fillStyle = wingColor;
        ctx.beginPath();
        ctx.ellipse(-14, -6, 16, 8, -0.6, 0, Math.PI * 2);
        ctx.ellipse(14, -6, 16, 8, 0.6, 0, Math.PI * 2);
        ctx.ellipse(-12, 10, 12, 6, 0.5, 0, Math.PI * 2);
        ctx.ellipse(12, 10, 12, 6, -0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 1: Giant Mushroom Spots (0.24, 0.76 -> x: 192, y: 456) ---
        ctx.save();
        ctx.translate(192, 456);
        // Stem
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(-14, 0, 28, 60);
        // Cap
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.arc(0, 0, 54, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        // Spots: Original = Neon Cyan (#38bdf8); Modified = Bright Magenta (#f43f5e)
        const spotColor = isMod ? '#f43f5e' : '#38bdf8';
        SceneRenderer.drawCircle(ctx, -26, -20, 8, spotColor);
        SceneRenderer.drawCircle(ctx, 0, -34, 10, spotColor);
        SceneRenderer.drawCircle(ctx, 28, -18, 7, spotColor);
        SceneRenderer.drawCircle(ctx, 12, -10, 6, spotColor);
        ctx.restore();

        // --- DIFFERENCE 7: Crystal Cluster Spire (0.38, 0.82 -> x: 304, y: 492) ---
        ctx.save();
        ctx.translate(304, 492);
        ctx.fillStyle = '#a855f7';
        // Side crystals
        ctx.beginPath();
        ctx.moveTo(-18, 20);
        ctx.lineTo(-12, -18);
        ctx.lineTo(-6, 20);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(8, 20);
        ctx.lineTo(14, -14);
        ctx.lineTo(20, 20);
        ctx.closePath();
        ctx.fill();
        // Central tall spire: Original has tall spire; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#d8b4fe';
            ctx.beginPath();
            ctx.moveTo(-8, 20);
            ctx.lineTo(0, -36);
            ctx.lineTo(8, 20);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // --- DIFFERENCE 5: Potion Vial Liquid (0.62, 0.84 -> x: 496, y: 504) ---
        ctx.save();
        ctx.translate(496, 504);
        // Glass flask
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.strokeRect(-4, -20, 8, 10);
        ctx.beginPath();
        ctx.arc(0, 4, 16, 0, Math.PI * 2);
        ctx.stroke();
        // Liquid: Original = Ruby Red (#ef4444); Modified = Lime Green (#84cc16)
        const potColor = isMod ? '#84cc16' : '#ef4444';
        ctx.fillStyle = potColor;
        ctx.beginPath();
        ctx.arc(0, 4, 13, 0, Math.PI);
        ctx.fill();
        // Cork
        ctx.fillStyle = '#92400e';
        ctx.fillRect(-5, -24, 10, 5);
        ctx.restore();

        // --- DIFFERENCE 6: Midnight Blossom Petals (0.86, 0.74 -> x: 688, y: 444) ---
        ctx.save();
        ctx.translate(688, 444);
        const petalCount = isMod ? 6 : 5;
        ctx.fillStyle = '#ec4899';
        for (let p = 0; p < petalCount; p++) {
            const ang = (p * Math.PI * 2) / petalCount;
            ctx.beginPath();
            ctx.arc(Math.cos(ang) * 14, Math.sin(ang) * 14, 7, 0, Math.PI * 2);
            ctx.fill();
        }
        SceneRenderer.drawCircle(ctx, 0, 0, 6, '#fef08a');
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 7: Downtown Coffee Haven (7 differences)
    // =========================================================================
    drawLevel7(ctx, w, h, isMod) {
        // Cafe wooden wall
        ctx.fillStyle = '#451a03';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = '#290e02';
        ctx.lineWidth = 3;
        for (let y = 0; y < 350; y += 30) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Espresso machine counter
        SceneRenderer.drawRoundedRect(ctx, 40, 320, 720, 240, 10, '#1c1917', '#44403c', 2);

        // --- DIFFERENCE 3: Vintage Clock (0.18, 0.18 -> x: 144, y: 108) ---
        ctx.save();
        SceneRenderer.drawCircle(ctx, 144, 108, 30, '#ffffff', '#78350f', 5);
        SceneRenderer.drawCircle(ctx, 144, 108, 3, '#1e293b');
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(144, 108);
        if (!isMod) {
            // 10:10
            ctx.lineTo(132, 94);
            ctx.moveTo(144, 108);
            ctx.lineTo(158, 98);
        } else {
            // 2:45
            ctx.lineTo(124, 108);
            ctx.moveTo(144, 108);
            ctx.lineTo(156, 96);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 6: Hanging Pothos Leaves (0.60, 0.15 -> x: 480, y: 90) ---
        ctx.save();
        // Rope hanger
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(480, 0);
        ctx.lineTo(480, 70);
        ctx.stroke();
        // Pot
        SceneRenderer.drawRoundedRect(ctx, 465, 70, 30, 20, 4, '#ea580c');
        // Trailing vines: Original has long trailing vine; Modified is trimmed short
        ctx.fillStyle = '#22c55e';
        SceneRenderer.drawCircle(ctx, 470, 96, 5);
        SceneRenderer.drawCircle(ctx, 490, 94, 5);
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 475, 110, 6);
            SceneRenderer.drawCircle(ctx, 485, 124, 6);
            SceneRenderer.drawCircle(ctx, 480, 138, 5);
        }
        ctx.restore();

        // --- DIFFERENCE 4: Chalkboard Specials (0.82, 0.28 -> x: 656, y: 168) ---
        ctx.save();
        SceneRenderer.drawRoundedRect(ctx, 600, 100, 112, 136, 6, '#0f172a', '#b45309', 4);
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText("TODAY", 632, 126);
        // Drawing on chalkboard: Original = Coffee Cup; Modified = Croissant
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 2;
        if (!isMod) {
            ctx.strokeRect(638, 150, 24, 18);
            ctx.beginPath();
            ctx.arc(662, 158, 6, -Math.PI / 2, Math.PI / 2);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.arc(650, 160, 14, 0.8, Math.PI * 1.2);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 2: Barista Apron Logo (0.30, 0.38 -> x: 240, y: 228) ---
        ctx.save();
        ctx.translate(240, 228);
        // Barista head & shoulders
        SceneRenderer.drawCircle(ctx, 0, -20, 20, '#fed7aa');
        SceneRenderer.drawRoundedRect(ctx, -24, 0, 48, 70, 8, '#064e3b'); // Green apron
        // Badge: Original = Coffee Bean; Modified = Coffee Leaf
        if (!isMod) {
            ctx.fillStyle = '#78350f';
            ctx.beginPath();
            ctx.ellipse(0, 18, 6, 9, 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, 11);
            ctx.quadraticCurveTo(2, 18, 0, 25);
            ctx.stroke();
        } else {
            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.moveTo(0, 9);
            ctx.quadraticCurveTo(8, 18, 0, 27);
            ctx.quadraticCurveTo(-8, 18, 0, 9);
            ctx.fill();
        }
        ctx.restore();

        // --- DIFFERENCE 1: Espresso Steam Curls (0.44, 0.52 -> x: 352, y: 312) ---
        ctx.save();
        ctx.translate(352, 330);
        // Espresso cup
        SceneRenderer.drawRoundedRect(ctx, -14, 0, 28, 22, 4, '#dc2626');
        // Steam curls: Original = 2 curls; Modified = 3 curls
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        const curls = isMod ? [-6, 0, 6] : [-4, 4];
        curls.forEach(cx => {
            ctx.beginPath();
            ctx.moveTo(cx, -4);
            ctx.quadraticCurveTo(cx - 6, -16, cx + 2, -26);
            ctx.stroke();
        });
        ctx.restore();

        // --- DIFFERENCE 5: Pastry Glass Bell (0.72, 0.60 -> x: 576, y: 360) ---
        ctx.save();
        ctx.translate(576, 360);
        // Glass bell
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.beginPath();
        ctx.arc(0, 0, 26, Math.PI, 0);
        ctx.lineTo(26, 10);
        ctx.lineTo(-26, 10);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Pastry inside: Original = Butter Golden Croissant; Modified = Dark Chocolate Roll
        const pastryCol = isMod ? '#451a03' : '#d97706';
        ctx.fillStyle = pastryCol;
        ctx.beginPath();
        ctx.arc(0, 8, 12, Math.PI, 0);
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 7: Takeaway Cup Sleeve (0.88, 0.82 -> x: 704, y: 492) ---
        ctx.save();
        ctx.translate(704, 492);
        // Cup
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-12, -20, 24, 40);
        // Sleeve band: Original = Kraft Brown (#b45309); Modified = Emerald Green (#059669)
        const sleeveColor = isMod ? '#059669' : '#b45309';
        ctx.fillStyle = sleeveColor;
        ctx.fillRect(-13, -6, 26, 18);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 8: Deep Ocean Odyssey (7 differences)
    // =========================================================================
    drawLevel8(ctx, w, h, isMod) {
        // Deep water gradient
        const oceanGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, h, [
            [0, '#0284c7'],
            [0.5, '#0369a1'],
            [1, '#082f49']
        ]);
        ctx.fillStyle = oceanGrad;
        ctx.fillRect(0, 0, w, h);

        // Sunken seabed
        ctx.fillStyle = '#eab308';
        ctx.fillRect(0, 500, w, 100);

        // --- DIFFERENCE 2: Submarine Spotlight (0.76, 0.22 -> x: 608, y: 132) ---
        ctx.save();
        ctx.translate(608, 132);
        // Yellow Mini-sub
        SceneRenderer.drawRoundedRect(ctx, -35, -16, 70, 32, 16, '#eab308', '#ca8a04', 2);
        // Periscope
        ctx.fillRect(-5, -28, 8, 14);
        ctx.fillRect(-5, -28, 16, 6);
        // Spotlight cone: Original = Yellow beam; Modified = Cyan beam
        const beamColor = isMod ? 'rgba(6, 182, 212, 0.35)' : 'rgba(253, 224, 71, 0.35)';
        ctx.fillStyle = beamColor;
        ctx.beginPath();
        ctx.moveTo(35, 0);
        ctx.lineTo(140, -50);
        ctx.lineTo(140, 50);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 3: Sea Turtle Shell (0.50, 0.36 -> x: 400, y: 216) ---
        ctx.save();
        ctx.translate(400, 216);
        // Flippers & head
        ctx.fillStyle = '#15803d';
        SceneRenderer.drawCircle(ctx, 32, 0, 10);
        ctx.beginPath();
        ctx.ellipse(10, -22, 16, 8, 0.4, 0, Math.PI * 2);
        ctx.ellipse(10, 22, 16, 8, -0.4, 0, Math.PI * 2);
        ctx.fill();
        // Shell
        SceneRenderer.drawCircle(ctx, 0, 0, 24, '#166534', '#14532d', 2);
        // Shell pattern: Original = Hexagon pattern; Modified = Sunburst lines
        ctx.strokeStyle = '#86efac';
        ctx.lineWidth = 2;
        if (!isMod) {
            ctx.strokeRect(-8, -8, 16, 16);
        } else {
            for (let a = 0; a < 8; a++) {
                const ang = (a * Math.PI) / 4;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(ang) * 20, Math.sin(ang) * 20);
                ctx.stroke();
            }
        }
        ctx.restore();

        // --- DIFFERENCE 1: Clownfish Stripes (0.22, 0.46 -> x: 176, y: 276) ---
        ctx.save();
        ctx.translate(176, 276);
        // Fish body
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.ellipse(0, 0, 22, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        // Tail
        ctx.beginPath();
        ctx.moveTo(-18, 0);
        ctx.lineTo(-30, -12);
        ctx.lineTo(-30, 12);
        ctx.closePath();
        ctx.fill();
        // Stripes: Original = 3 white stripes; Modified = 2 stripes
        ctx.fillStyle = '#ffffff';
        const stripes = isMod ? [-6, 6] : [-12, 0, 12];
        stripes.forEach(sx => {
            ctx.fillRect(sx, -11, 4, 22);
        });
        ctx.restore();

        // --- DIFFERENCE 4: Jellyfish Color (0.82, 0.56 -> x: 656, y: 336) ---
        ctx.save();
        ctx.translate(656, 336);
        const jellyColor = isMod ? '#a855f7' : '#ec4899';
        ctx.fillStyle = jellyColor;
        ctx.beginPath();
        ctx.arc(0, 0, 22, Math.PI, 0);
        ctx.fill();
        // Tentacles
        ctx.strokeStyle = jellyColor;
        ctx.lineWidth = 2.5;
        for (let t = -16; t <= 16; t += 8) {
            ctx.beginPath();
            ctx.moveTo(t, 2);
            ctx.quadraticCurveTo(t + 6, 18, t, 36);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 6: Rusty Anchor Link (0.14, 0.74 -> x: 112, y: 444) ---
        ctx.save();
        ctx.translate(112, 444);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 5;
        // Anchor shank & flukes
        ctx.beginPath();
        ctx.moveTo(0, -30);
        ctx.lineTo(0, 30);
        ctx.moveTo(-24, 18);
        ctx.quadraticCurveTo(0, 38, 24, 18);
        ctx.stroke();
        // Chain link at top: Original has extra chain ring; Modified is missing!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, -38, 7, null, '#94a3b8', 3);
        }
        ctx.restore();

        // --- DIFFERENCE 5: Treasure Chest Gem (0.32, 0.84 -> x: 256, y: 504) ---
        ctx.save();
        ctx.translate(256, 504);
        // Chest box
        SceneRenderer.drawRoundedRect(ctx, -26, -14, 52, 28, 4, '#78350f', '#eab308', 2);
        // Lid
        ctx.fillStyle = '#b45309';
        ctx.beginPath();
        ctx.arc(0, -14, 26, Math.PI, 0);
        ctx.fill();
        // Glowing gem: Original = Crimson Ruby (#ef4444); Modified = Deep Sapphire (#3b82f6)
        const gemColor = isMod ? '#3b82f6' : '#ef4444';
        SceneRenderer.drawCircle(ctx, 0, -4, 8, gemColor, '#ffffff', 1.5);
        ctx.restore();

        // --- DIFFERENCE 7: Seashell Shape (0.66, 0.86 -> x: 528, y: 516) ---
        ctx.save();
        ctx.translate(528, 516);
        ctx.fillStyle = '#fed7aa';
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 1.5;
        if (!isMod) {
            // Spiral conch
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            SceneRenderer.drawCircle(ctx, 4, -4, 6, null, '#f97316', 1.5);
        } else {
            // Scallop fan shell
            ctx.beginPath();
            ctx.moveTo(0, 14);
            ctx.lineTo(-14, -10);
            ctx.lineTo(14, -10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 9: Retro Space Odyssey (7 differences)
    // =========================================================================
    drawLevel9(ctx, w, h, isMod) {
        // Deep space background
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, w, h);

        // Distant stars
        ctx.fillStyle = '#ffffff';
        for (let s = 0; s < 40; s++) {
            const sx = (s * 73) % w;
            const sy = (s * 37) % 360;
            ctx.fillRect(sx, sy, 2, 2);
        }

        // --- DIFFERENCE 6: Constellation Star (0.18, 0.18 -> x: 144, y: 108) ---
        if (!isMod) {
            SceneRenderer.drawStar(ctx, 144, 108, 4, 10, 4, '#38bdf8', '#ffffff');
        }

        // --- DIFFERENCE 1: Ringed Planet Tilt (0.82, 0.20 -> x: 656, y: 120) ---
        ctx.save();
        ctx.translate(656, 120);
        // Planet body
        SceneRenderer.drawCircle(ctx, 0, 0, 32, '#f97316');
        // Rings: Original = Gold single tilt; Modified = Double Cyan rings
        ctx.strokeStyle = isMod ? '#06b6d4' : '#fde047';
        ctx.lineWidth = 5;
        ctx.beginPath();
        const rot = isMod ? 0.6 : -0.3;
        ctx.ellipse(0, 0, 56, 14, rot, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Moon horizon surface
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(400, 900, 550, 0, Math.PI * 2);
        ctx.fill();

        // --- DIFFERENCE 2: Lunar Base Radar Dish (0.48, 0.18 -> x: 384, y: 320) ---
        ctx.save();
        ctx.translate(384, 320);
        // Dome
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.arc(0, 40, 50, Math.PI, 0);
        ctx.fill();
        // Radar dish angle: Original = Facing Left; Modified = Facing Right
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        ctx.strokeRect(-4, -10, 8, 20); // Spire
        ctx.strokeStyle = '#f8fafc';
        ctx.beginPath();
        if (!isMod) {
            ctx.arc(-10, -16, 18, -Math.PI / 2, Math.PI / 2);
        } else {
            ctx.arc(10, -16, 18, Math.PI / 2, -Math.PI / 2);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 3: Astronaut Visor (0.26, 0.54 -> x: 208, y: 324) ---
        ctx.save();
        ctx.translate(208, 324);
        // Space suit
        SceneRenderer.drawRoundedRect(ctx, -20, 0, 40, 54, 8, '#f8fafc');
        SceneRenderer.drawCircle(ctx, 0, -16, 20, '#f8fafc', '#cbd5e1', 2);
        // Visor: Original = Mirrored Gold (#eab308); Modified = Cyan Galaxy (#06b6d4)
        const visorCol = isMod ? '#06b6d4' : '#eab308';
        SceneRenderer.drawRoundedRect(ctx, -12, -22, 24, 14, 6, visorCol);
        ctx.restore();

        // --- DIFFERENCE 4: Mission Flag Emblem (0.68, 0.62 -> x: 544, y: 372) ---
        ctx.save();
        ctx.translate(544, 372);
        // Flagpole
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(0, -20);
        ctx.stroke();
        // Flag cloth
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(0, -20, 36, 24);
        // Emblem: Original = Rocket icon; Modified = Planet ring icon
        ctx.fillStyle = '#ffffff';
        if (!isMod) {
            ctx.beginPath();
            ctx.moveTo(18, -16);
            ctx.lineTo(24, -6);
            ctx.lineTo(12, -6);
            ctx.closePath();
            ctx.fill();
        } else {
            SceneRenderer.drawCircle(ctx, 18, -8, 5);
        }
        ctx.restore();

        // --- DIFFERENCE 5: Lunar Rover Solar Panel (0.85, 0.76 -> x: 680, y: 456) ---
        ctx.save();
        ctx.translate(680, 456);
        // Rover chassis & wheels
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(-24, 0, 48, 18);
        SceneRenderer.drawCircle(ctx, -16, 18, 10, '#1e293b');
        SceneRenderer.drawCircle(ctx, 16, 18, 10, '#1e293b');
        // Solar panel: Original = Blue (#0284c7); Modified = Gold (#f59e0b)
        const panelCol = isMod ? '#f59e0b' : '#0284c7';
        ctx.fillStyle = panelCol;
        ctx.fillRect(-18, -16, 36, 12);
        ctx.restore();

        // --- DIFFERENCE 7: Glowing Crater Crystal (0.38, 0.84 -> x: 304, y: 504) ---
        ctx.save();
        ctx.translate(304, 504);
        // Moon crater rim
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.ellipse(0, 0, 28, 12, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Crystal: Original = Neon Emerald (#10b981); Modified = Purple Amethyst (#a855f7)
        const crystCol = isMod ? '#a855f7' : '#10b981';
        ctx.fillStyle = crystCol;
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(8, 4);
        ctx.lineTo(-8, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 10: Golden Autumn Park (7 differences)
    // =========================================================================
    drawLevel10(ctx, w, h, isMod) {
        // Crisp autumn sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 300, [
            [0, '#38bdf8'],
            [1, '#fed7aa']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 300);

        // --- DIFFERENCE 1: Hot Air Balloon Pattern (0.78, 0.16 -> x: 624, y: 96) ---
        ctx.save();
        ctx.translate(624, 96);
        // Balloon envelope: Original = Orange/Yellow stripes; Modified = Rainbow chevron
        ctx.fillStyle = isMod ? '#ec4899' : '#f97316';
        ctx.beginPath();
        ctx.arc(0, 0, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = isMod ? '#06b6d4' : '#fde047';
        ctx.fillRect(-10, -28, 20, 56);
        // Basket
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-6, 36, 12, 8);
        ctx.restore();

        // Park lawn with golden foliage
        ctx.fillStyle = '#ca8a04';
        ctx.fillRect(0, 300, w, h - 300);

        // --- DIFFERENCE 7: Streetlamp Globe (0.12, 0.36 -> x: 96, y: 216) ---
        ctx.save();
        ctx.translate(96, 216);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 160);
        ctx.lineTo(0, 0);
        ctx.stroke();
        // Glass orb: Original has glowing warm glass orb; Modified is dark/unlit!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, -8, 12, '#fef08a', '#eab308', 2);
        } else {
            SceneRenderer.drawCircle(ctx, 0, -8, 12, '#334155', '#1e293b', 2);
        }
        ctx.restore();

        // --- DIFFERENCE 4: Fountain Water Cascade (0.70, 0.54 -> x: 560, y: 324) ---
        ctx.save();
        ctx.translate(560, 324);
        // Basin
        SceneRenderer.drawRoundedRect(ctx, -40, 10, 80, 24, 6, '#94a3b8');
        // Tiers: Original = 3 tiers; Modified = Single high jet
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        if (!isMod) {
            SceneRenderer.drawRoundedRect(ctx, -24, -10, 48, 14, 4, '#cbd5e1');
            ctx.beginPath();
            ctx.arc(0, -10, 14, Math.PI, 0);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.lineTo(0, -32);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 3: Park Bench Cushion/Scarf (0.44, 0.64 -> x: 352, y: 384) ---
        ctx.save();
        ctx.translate(352, 384);
        // Wooden slats
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-45, -16, 90, 8);
        ctx.fillRect(-45, -4, 90, 8);
        ctx.fillRect(-45, 8, 90, 14); // Seat
        // Scarf: Original = Red Plaid (#dc2626); Modified = Teal Wool (#0d9488)
        const scarfCol = isMod ? '#0d9488' : '#dc2626';
        ctx.fillStyle = scarfCol;
        ctx.fillRect(-15, 6, 30, 22);
        ctx.restore();

        // --- DIFFERENCE 5: Bicycle Flowers (0.28, 0.52 -> x: 224, y: 312) ---
        ctx.save();
        ctx.translate(224, 312);
        // Bike frame & wheels
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 3;
        SceneRenderer.drawCircle(ctx, -20, 24, 14, null, '#0f172a', 3);
        SceneRenderer.drawCircle(ctx, 20, 24, 14, null, '#0f172a', 3);
        // Basket flowers: Original = Yellow Daisies (#eab308); Modified = Red Tulips (#ef4444)
        const flowerCol = isMod ? '#ef4444' : '#eab308';
        SceneRenderer.drawCircle(ctx, 16, -4, 6, flowerCol);
        SceneRenderer.drawCircle(ctx, 24, -2, 6, flowerCol);
        ctx.restore();

        // --- DIFFERENCE 2: Squirrel Holding Acorn (0.20, 0.78 -> x: 160, y: 468) ---
        ctx.save();
        ctx.translate(160, 468);
        ctx.fillStyle = '#c2410c';
        // Squirrel body & tail
        SceneRenderer.drawCircle(ctx, 0, 0, 14);
        ctx.beginPath();
        ctx.arc(-14, -8, 14, 0, Math.PI * 1.5);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#c2410c';
        ctx.stroke();
        // Golden acorn: Original has acorn; Modified has empty paws!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 12, 0, 5, '#eab308');
        }
        ctx.restore();

        // --- DIFFERENCE 6: Fallen Maple Leaf (0.54, 0.86 -> x: 432, y: 516) ---
        ctx.save();
        ctx.translate(432, 516);
        // Leaf: Original = Crimson Maple (#ef4444); Modified = Golden Oak (#eab308)
        const leafCol = isMod ? '#eab308' : '#ef4444';
        ctx.fillStyle = leafCol;
        SceneRenderer.drawStar(ctx, 0, 0, 5, 14, 6, leafCol);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 11: Medieval Citadel Castle (8 differences)
    // =========================================================================
    drawLevel11(ctx, w, h, isMod) {
        // Overcast dramatic sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 260, [
            [0, '#475569'],
            [1, '#94a3b8']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 260);

        // Stone Castle Walls
        ctx.fillStyle = '#64748b';
        ctx.fillRect(100, 120, 600, 320);
        // Battlements (crenellations)
        for (let bx = 100; bx < 700; bx += 40) {
            ctx.fillRect(bx, 90, 20, 30);
        }

        // --- DIFFERENCE 7: High Tower Pennant (0.66, 0.12 -> x: 528, y: 72) ---
        ctx.save();
        ctx.translate(528, 72);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 30);
        ctx.lineTo(0, -16);
        ctx.stroke();
        // Pennant: Original = Red Pennant (#dc2626); Modified = Blue Swallowtail (#2563eb)
        ctx.fillStyle = isMod ? '#2563eb' : '#dc2626';
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.lineTo(26, -6);
        ctx.lineTo(0, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 1: Royal Crest Banner (0.32, 0.18 -> x: 256, y: 108) ---
        ctx.save();
        ctx.translate(256, 108);
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(-18, 0, 36, 48);
        ctx.beginPath();
        ctx.moveTo(-18, 48);
        ctx.lineTo(0, 60);
        ctx.lineTo(18, 48);
        ctx.closePath();
        ctx.fill();
        // Emblem: Original = Gold Lion; Modified = Silver Dragon
        ctx.fillStyle = isMod ? '#f1f5f9' : '#fbbf24';
        SceneRenderer.drawCircle(ctx, 0, 24, 8);
        ctx.restore();

        // --- DIFFERENCE 5: Stone Gargoyle Wings (0.86, 0.28 -> x: 688, y: 168) ---
        ctx.save();
        ctx.translate(688, 168);
        ctx.fillStyle = '#334155';
        SceneRenderer.drawCircle(ctx, 0, 0, 14); // Body
        // Wings: Original = Spread wings; Modified = Folded wings
        ctx.beginPath();
        if (!isMod) {
            ctx.moveTo(0, 0);
            ctx.lineTo(-24, -18);
            ctx.lineTo(-12, 10);
            ctx.closePath();
        } else {
            ctx.ellipse(-6, 4, 6, 12, 0.2, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 3: Wall Torch Flame (0.20, 0.46 -> x: 160, y: 276) ---
        ctx.save();
        ctx.translate(160, 276);
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-4, 0, 8, 20); // Bracket
        // Flame: Original = Bright Orange (#f97316); Modified = Mystical Blue (#06b6d4)
        const flameCol = isMod ? '#06b6d4' : '#f97316';
        ctx.fillStyle = flameCol;
        ctx.beginPath();
        ctx.arc(0, -6, 10, 0, Math.PI);
        ctx.lineTo(0, -22);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Castle Gate Archway
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(400, 360, 60, Math.PI, 0);
        ctx.lineTo(460, 460);
        ctx.lineTo(340, 460);
        ctx.closePath();
        ctx.fill();

        // --- DIFFERENCE 4: Portcullis Bars (0.50, 0.60 -> x: 400, y: 360) ---
        ctx.save();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 4;
        const barCount = isMod ? 6 : 5;
        for (let b = 0; b < barCount; b++) {
            const bx = 350 + (b * 100) / (barCount - 1);
            ctx.beginPath();
            ctx.moveTo(bx, 310);
            ctx.lineTo(bx, 440);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 8: Guard Spear Tassel (0.64, 0.48 -> x: 512, y: 288) ---
        ctx.save();
        ctx.translate(512, 288);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(0, -20);
        ctx.stroke();
        // Red tassel: Original has crimson tassel; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#ef4444';
            ctx.fillRect(-4, -12, 8, 8);
        }
        ctx.restore();

        // --- DIFFERENCE 2: Knight Shield Emblem (0.76, 0.64 -> x: 608, y: 384) ---
        ctx.save();
        ctx.translate(608, 384);
        // Shield
        SceneRenderer.drawRoundedRect(ctx, -16, -20, 32, 40, 6, '#e2e8f0', '#0f172a', 2);
        // Cross / Falcon: Original = Red Cross; Modified = Gold Star
        if (!isMod) {
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(-4, -14, 8, 28);
            ctx.fillRect(-12, -6, 24, 8);
        } else {
            SceneRenderer.drawStar(ctx, 0, 0, 5, 10, 4, '#eab308');
        }
        ctx.restore();

        // Castle Moat
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(0, 480, w, 120);

        // --- DIFFERENCE 6: Moat Swan / Mallard (0.26, 0.86 -> x: 208, y: 516) ---
        ctx.save();
        ctx.translate(208, 516);
        if (!isMod) {
            // White Swan
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(8, -4);
            ctx.quadraticCurveTo(14, -20, 20, -18);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
            SceneRenderer.drawCircle(ctx, 22, -18, 3, '#ea580c'); // Beak
        } else {
            // Mallard Duck (green head)
            ctx.fillStyle = '#78350f';
            ctx.beginPath();
            ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            SceneRenderer.drawCircle(ctx, 14, -12, 7, '#047857');
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 12: Serene Zen Garden (8 differences)
    // =========================================================================
    drawLevel12(ctx, w, h, isMod) {
        // Peaceful watercolor morning sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 300, [
            [0, '#fed7aa'],
            [1, '#fbcfe8']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 300);

        // Pagoda on left
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(160, 120, 60, 80);
        // Curved roof eaves
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(130, 120);
        ctx.quadraticCurveTo(190, 95, 250, 120);
        ctx.fill();

        // --- DIFFERENCE 1: Pagoda Finial (0.24, 0.14 -> x: 192, y: 84) ---
        ctx.save();
        ctx.translate(190, 84);
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 20);
        ctx.lineTo(0, -20);
        ctx.stroke();
        // Rings: Original = 5 bronze rings; Modified = Single smooth spire
        if (!isMod) {
            ctx.fillStyle = '#eab308';
            for (let r = -12; r <= 10; r += 5) {
                ctx.fillRect(-6, r, 12, 3);
            }
        }
        ctx.restore();

        // --- DIFFERENCE 5: Sakura Blossoms (0.54, 0.20 -> x: 432, y: 120) ---
        ctx.save();
        ctx.translate(432, 120);
        // Branch
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-40, 20);
        ctx.quadraticCurveTo(0, -10, 40, 10);
        ctx.stroke();
        // Cherry blossoms: Modified has fewer, sparse petals
        const blosCount = isMod ? 4 : 10;
        ctx.fillStyle = '#f472b6';
        for (let b = 0; b < blosCount; b++) {
            const bx = -30 + (b * 60) / (blosCount - 1);
            SceneRenderer.drawCircle(ctx, bx, (b % 2) * 10 - 5, 5);
        }
        ctx.restore();

        // --- DIFFERENCE 4: Stone Lantern Window (0.72, 0.44 -> x: 576, y: 264) ---
        ctx.save();
        ctx.translate(576, 264);
        SceneRenderer.drawRoundedRect(ctx, -18, -20, 36, 40, 4, '#64748b');
        // Cutout window: Original = Square lattice; Modified = Crescent moon
        ctx.fillStyle = '#fef08a';
        if (!isMod) {
            ctx.fillRect(-8, -8, 16, 16);
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-8, -8, 16, 16);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, 8, -Math.PI / 2, Math.PI / 2);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // Red arched bridge across pond
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(320, 440, 90, Math.PI, 0);
        ctx.stroke();

        // --- DIFFERENCE 6: Bridge Post Cap (0.38, 0.54 -> x: 304, y: 324) ---
        ctx.save();
        ctx.translate(304, 324);
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(-4, 0, 8, 20);
        // Post cap: Original = Bronze Bulb (giboshi); Modified = Flat rounded cap
        ctx.fillStyle = isMod ? '#dc2626' : '#eab308';
        SceneRenderer.drawCircle(ctx, 0, -2, 6);
        ctx.restore();

        // --- DIFFERENCE 7: Bamboo Spout (0.14, 0.64 -> x: 112, y: 384) ---
        ctx.save();
        ctx.translate(112, 384);
        ctx.strokeStyle = '#65a30d';
        ctx.lineWidth = 8;
        // Rocker angle: Original = tilted down; Modified = tilted up
        ctx.beginPath();
        if (!isMod) {
            ctx.moveTo(-20, -10);
            ctx.lineTo(20, 10);
        } else {
            ctx.moveTo(-20, 10);
            ctx.lineTo(20, -10);
        }
        ctx.stroke();
        ctx.restore();

        // Koi pond & Raked Gravel
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(200, 440, 240, 160); // Pond

        // --- DIFFERENCE 2: Koi Fish Color (0.46, 0.82 -> x: 368, y: 492) ---
        ctx.save();
        ctx.translate(368, 492);
        // Fish body: Original = Orange Kohaku (#f97316); Modified = Pure White Butterfly (#ffffff)
        const fishCol = isMod ? '#ffffff' : '#f97316';
        ctx.fillStyle = fishCol;
        ctx.beginPath();
        ctx.ellipse(0, 0, 18, 9, 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 3: Bonsai Pot (0.82, 0.68 -> x: 656, y: 408) ---
        ctx.save();
        ctx.translate(656, 408);
        // Foliage
        ctx.fillStyle = '#15803d';
        SceneRenderer.drawCircle(ctx, 0, -16, 20);
        // Pot: Original = Blue glazed (#0284c7); Modified = Terracotta (#c2410c)
        const potCol = isMod ? '#c2410c' : '#0284c7';
        SceneRenderer.drawRoundedRect(ctx, -20, 0, 40, 14, 3, potCol);
        ctx.restore();

        // --- DIFFERENCE 8: Raked Gravel Pattern (0.60, 0.90 -> x: 480, y: 540) ---
        ctx.save();
        ctx.translate(480, 540);
        ctx.strokeStyle = '#d6d3d1';
        ctx.lineWidth = 3;
        const rippleCount = isMod ? 3 : 5;
        for (let r = 1; r <= rippleCount; r++) {
            ctx.beginPath();
            ctx.arc(0, 0, r * 10, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 13: Wizard's Secret Lab (8 differences)
    // =========================================================================
    drawLevel13(ctx, w, h, isMod) {
        // Mystic arcane chamber
        const labGrad = SceneRenderer.drawRadialGrad(ctx, 400, 300, 40, 400, 300, 450, [
            [0, '#1e1b4b'],
            [0.6, '#0f172a'],
            [1, '#020617']
        ]);
        ctx.fillStyle = labGrad;
        ctx.fillRect(0, 0, w, h);

        // Alchemist table
        SceneRenderer.drawRoundedRect(ctx, 160, 380, 480, 160, 12, '#3f2212', '#78350f', 3);

        // --- DIFFERENCE 4: Raven Beak Key (0.84, 0.20 -> x: 672, y: 120) ---
        ctx.save();
        ctx.translate(672, 120);
        ctx.fillStyle = '#0f172a';
        SceneRenderer.drawCircle(ctx, 0, 0, 16); // Raven body
        SceneRenderer.drawCircle(ctx, -10, -8, 10); // Head
        // Beak
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-22, -10, 12, 5);
        // Key: Original has glowing gold key; Modified is missing!
        if (!isMod) {
            ctx.strokeStyle = '#eab308';
            ctx.lineWidth = 2;
            ctx.strokeRect(-28, -6, 6, 12);
        }
        ctx.restore();

        // --- DIFFERENCE 7: Brass Astrolabe (0.68, 0.18 -> x: 544, y: 108) ---
        ctx.save();
        ctx.translate(544, 108);
        SceneRenderer.drawCircle(ctx, 0, 0, 24, null, '#eab308', 3);
        // Pointer dial: Original points North; Modified points East
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        if (!isMod) {
            ctx.lineTo(0, -18);
        } else {
            ctx.lineTo(18, 0);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 6: Floating Candle Spark (0.16, 0.34 -> x: 128, y: 204) ---
        ctx.save();
        ctx.translate(128, 204);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(-6, 0, 12, 30); // Candle wax
        // Flame color: Original = Yellow/Orange; Modified = Spectral Cyan
        const flameCol = isMod ? '#06b6d4' : '#f59e0b';
        SceneRenderer.drawCircle(ctx, 0, -8, 8, flameCol);
        ctx.restore();

        // --- DIFFERENCE 5: Hourglass Sand (0.36, 0.42 -> x: 288, y: 252) ---
        ctx.save();
        ctx.translate(288, 252);
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-16, -20);
        ctx.lineTo(16, -20);
        ctx.lineTo(-16, 20);
        ctx.lineTo(16, 20);
        ctx.closePath();
        ctx.stroke();
        // Sand color: Original = Glowing Gold; Modified = Mystic Blue
        ctx.fillStyle = isMod ? '#38bdf8' : '#eab308';
        ctx.fillRect(-10, 8, 20, 10);
        ctx.restore();

        // --- DIFFERENCE 1: Crystal Ball Aura (0.50, 0.46 -> x: 400, y: 276) ---
        ctx.save();
        ctx.translate(400, 276);
        // Stand
        ctx.fillStyle = '#b45309';
        ctx.fillRect(-14, 24, 28, 12);
        // Crystal orb: Original = Swirling Violet (#a855f7); Modified = Solar Flame (#f97316)
        const orbCol = isMod ? '#f97316' : '#a855f7';
        SceneRenderer.drawCircle(ctx, 0, 0, 28, orbCol, '#ffffff', 2);
        ctx.restore();

        // --- DIFFERENCE 3: Beaker Liquid (0.78, 0.52 -> x: 624, y: 312) ---
        ctx.save();
        ctx.translate(624, 312);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.strokeRect(-12, -24, 24, 40);
        // Liquid: Original = Emerald Green (#10b981); Modified = Royal Indigo (#6366f1)
        const beacCol = isMod ? '#6366f1' : '#10b981';
        ctx.fillStyle = beacCol;
        ctx.fillRect(-10, -6, 20, 20);
        ctx.restore();

        // --- DIFFERENCE 2: Grimoire Rune (0.24, 0.58 -> x: 192, y: 348) ---
        ctx.save();
        ctx.translate(192, 348);
        SceneRenderer.drawRoundedRect(ctx, -26, -18, 52, 36, 4, '#831843');
        // Rune: Original = Eye symbol; Modified = Flame symbol
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 2;
        if (!isMod) {
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.stroke();
            SceneRenderer.drawCircle(ctx, 0, 0, 3, '#fde047');
        } else {
            ctx.beginPath();
            ctx.moveTo(0, 8);
            ctx.lineTo(6, -8);
            ctx.lineTo(-6, -8);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 8: Relic Skull Eye (0.65, 0.76 -> x: 520, y: 456) ---
        ctx.save();
        ctx.translate(520, 456);
        SceneRenderer.drawCircle(ctx, 0, 0, 18, '#e2e8f0'); // Skull
        // Eye gem: Original = Glowing Ruby (#dc2626); Modified = Sapphire (#2563eb)
        const eyeGem = isMod ? '#2563eb' : '#dc2626';
        SceneRenderer.drawCircle(ctx, -6, -2, 5, eyeGem);
        SceneRenderer.drawCircle(ctx, 6, -2, 5, eyeGem);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 14: Pirate's Galleon Cove (8 differences)
    // =========================================================================
    drawLevel14(ctx, w, h, isMod) {
        // Sunset tropical sky
        const skyGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 300, [
            [0, '#ea580c'],
            [0.6, '#f97316'],
            [1, '#fed7aa']
        ]);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, 300);

        // Sea
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(0, 280, w, 320);

        // Pirate Warship Body
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.moveTo(180, 360);
        ctx.lineTo(620, 360);
        ctx.lineTo(580, 460);
        ctx.lineTo(240, 460);
        ctx.closePath();
        ctx.fill();

        // Masts
        ctx.fillRect(350, 100, 14, 260);

        // --- DIFFERENCE 1: Jolly Roger Flag (0.45, 0.15 -> x: 360, y: 90) ---
        ctx.save();
        ctx.translate(360, 90);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 44, 30);
        // Skull: Original = Skull with red bandana; Modified = Skull with eyepatch
        ctx.fillStyle = '#ffffff';
        SceneRenderer.drawCircle(ctx, 22, 14, 8);
        if (!isMod) {
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(14, 6, 16, 5);
        } else {
            ctx.fillStyle = '#0f172a';
            SceneRenderer.drawCircle(ctx, 26, 14, 3);
        }
        ctx.restore();

        // --- DIFFERENCE 8: Rigging Pulley (0.64, 0.30 -> x: 512, y: 180) ---
        ctx.save();
        ctx.translate(512, 180);
        // Pulley block: Original has wooden pulley; Modified is missing!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 8, '#b45309', '#78350f', 2);
        }
        ctx.restore();

        // --- DIFFERENCE 2: Figurehead Crown (0.80, 0.42 -> x: 640, y: 252) ---
        ctx.save();
        ctx.translate(640, 252);
        // Mermaid figurehead
        ctx.fillStyle = '#fde047';
        SceneRenderer.drawCircle(ctx, 0, 0, 14);
        // Crown: Original = Gold spikes; Modified = Pearl tiara
        if (!isMod) {
            ctx.fillRect(-6, -14, 12, 6);
        } else {
            SceneRenderer.drawCircle(ctx, 0, -12, 5, '#ffffff');
        }
        ctx.restore();

        // --- DIFFERENCE 4: Parrot Colors (0.18, 0.44 -> x: 144, y: 264) ---
        ctx.save();
        ctx.translate(144, 264);
        // Parrot: Original = Scarlet Macaw (#ef4444); Modified = Blue & Gold (#0284c7)
        const parCol = isMod ? '#0284c7' : '#ef4444';
        ctx.fillStyle = parCol;
        SceneRenderer.drawCircle(ctx, 0, 0, 12);
        ctx.fillRect(-4, 6, 8, 16); // Tail
        ctx.restore();

        // --- DIFFERENCE 3: Gun Deck Cannon (0.30, 0.58 -> x: 240, y: 348) ---
        ctx.save();
        ctx.translate(240, 348);
        // Cannon: Original = Polished Bronze (#b45309); Modified = Black Iron (#1e293b)
        const canCol = isMod ? '#1e293b' : '#b45309';
        ctx.fillStyle = canCol;
        ctx.fillRect(-16, -6, 32, 12);
        ctx.restore();

        // Sandy shoreline foreground
        ctx.fillStyle = '#eab308';
        ctx.fillRect(0, 480, w, 120);

        // --- DIFFERENCE 5: Treasure Map Red X (0.52, 0.72 -> x: 416, y: 432) ---
        ctx.save();
        ctx.translate(416, 432);
        SceneRenderer.drawRoundedRect(ctx, -20, -14, 40, 28, 4, '#fed7aa');
        // Mark: Original = Red X; Modified = Red Dagger
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 3;
        if (!isMod) {
            ctx.beginPath();
            ctx.moveTo(-8, -8);
            ctx.lineTo(8, 8);
            ctx.moveTo(8, -8);
            ctx.lineTo(-8, 8);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.lineTo(0, 10);
            ctx.moveTo(-5, 4);
            ctx.lineTo(5, 4);
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 6: Rum Barrel Spigot (0.74, 0.78 -> x: 592, y: 468) ---
        ctx.save();
        ctx.translate(592, 468);
        SceneRenderer.drawCircle(ctx, 0, 0, 22, '#78350f', '#451a03', 3);
        // Spigot: Original has brass tap; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#eab308';
            ctx.fillRect(18, -4, 10, 8);
        }
        ctx.restore();

        // --- DIFFERENCE 7: Gold Doubloon Pile (0.36, 0.88 -> x: 288, y: 528) ---
        ctx.save();
        ctx.translate(288, 528);
        // Goblet: Original = Gold Chalice (#eab308); Modified = Diamond Goblet (#38bdf8)
        const gobCol = isMod ? '#38bdf8' : '#eab308';
        ctx.fillStyle = gobCol;
        ctx.beginPath();
        ctx.arc(0, -6, 12, 0, Math.PI);
        ctx.fill();
        ctx.fillRect(-3, 6, 6, 10);
        ctx.fillRect(-10, 16, 20, 4);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 15: Steampunk Clockwork Lab (8 differences)
    // =========================================================================
    drawLevel15(ctx, w, h, isMod) {
        // Brass workshop wall
        ctx.fillStyle = '#291809';
        ctx.fillRect(0, 0, w, h);

        // Copper pipes network
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(80, 0);
        ctx.lineTo(80, 500);
        ctx.lineTo(720, 500);
        ctx.stroke();

        // --- DIFFERENCE 7: Steam Whistle (0.15, 0.18 -> x: 120, y: 108) ---
        ctx.save();
        ctx.translate(120, 108);
        // Whistle: Original has copper whistle pipe; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#d97706';
            ctx.fillRect(-6, -20, 12, 34);
            ctx.strokeStyle = 'rgba(255,255,255,0.7)';
            ctx.strokeRect(-6, -20, 12, 34);
        }
        ctx.restore();

        // --- DIFFERENCE 1: Master Gear Spokes (0.48, 0.32 -> x: 384, y: 192) ---
        ctx.save();
        ctx.translate(384, 192);
        // Master Gear: Original = 6 spokes; Modified = 8 spokes
        const spokeCount = isMod ? 8 : 6;
        SceneRenderer.drawCircle(ctx, 0, 0, 44, '#b45309', '#78350f', 6);
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 4;
        for (let s = 0; s < spokeCount; s++) {
            const ang = (s * Math.PI * 2) / spokeCount;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(ang) * 40, Math.sin(ang) * 40);
            ctx.stroke();
        }
        SceneRenderer.drawCircle(ctx, 0, 0, 12, '#78350f');
        ctx.restore();

        // --- DIFFERENCE 2: Pressure Dial Needle (0.22, 0.36 -> x: 176, y: 216) ---
        ctx.save();
        ctx.translate(176, 216);
        SceneRenderer.drawCircle(ctx, 0, 0, 24, '#fef3c7', '#78350f', 4);
        // Needle: Original = In Red warning zone (pointing up-right); Modified = Green zone (pointing up-left)
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        if (!isMod) {
            ctx.lineTo(12, -12); // Red danger
        } else {
            ctx.lineTo(-12, -12); // Green safe
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 3: Copper Pipe Valve (0.78, 0.42 -> x: 624, y: 252) ---
        ctx.save();
        ctx.translate(624, 252);
        // Valve wheel: Original = Red cast iron (#dc2626); Modified = Brass wheel (#eab308)
        const valveCol = isMod ? '#eab308' : '#dc2626';
        SceneRenderer.drawCircle(ctx, 0, 0, 16, null, valveCol, 5);
        ctx.fillStyle = valveCol;
        ctx.fillRect(-14, -2, 28, 4);
        ctx.fillRect(-2, -14, 4, 28);
        ctx.restore();

        // --- DIFFERENCE 5: Clockwork Owl Eye (0.62, 0.60 -> x: 496, y: 360) ---
        ctx.save();
        ctx.translate(496, 360);
        SceneRenderer.drawCircle(ctx, 0, 0, 20, '#b45309'); // Owl head
        // Eye monocle: Original = Ruby Red (#dc2626); Modified = Emerald Green (#10b981)
        const monoCol = isMod ? '#10b981' : '#dc2626';
        SceneRenderer.drawCircle(ctx, 8, -4, 7, monoCol, '#eab308', 2);
        ctx.restore();

        // --- DIFFERENCE 4: Vacuum Tube Filament (0.34, 0.64 -> x: 272, y: 384) ---
        ctx.save();
        ctx.translate(272, 384);
        // Glass tube
        SceneRenderer.drawRoundedRect(ctx, -12, -26, 24, 52, 10, 'rgba(255,255,255,0.1)', '#cbd5e1', 2);
        // Filament: Original = Warm Amber Glow (#f59e0b); Modified = Neon Blue (#06b6d4)
        const filCol = isMod ? '#06b6d4' : '#f59e0b';
        ctx.strokeStyle = filCol;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 16);
        ctx.lineTo(-4, -10);
        ctx.lineTo(4, -10);
        ctx.lineTo(0, 16);
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 6: Spanner Wrench (0.86, 0.80 -> x: 688, y: 480) ---
        ctx.save();
        ctx.translate(688, 480);
        // Wrench size: Original = Standard wrench; Modified = Heavy Cog Tool
        ctx.fillStyle = '#94a3b8';
        if (!isMod) {
            ctx.fillRect(-6, -20, 12, 40);
            ctx.strokeRect(-12, -26, 24, 12);
        } else {
            SceneRenderer.drawCircle(ctx, 0, 0, 16, '#94a3b8');
        }
        ctx.restore();

        // --- DIFFERENCE 8: Blueprint Pin (0.50, 0.88 -> x: 400, y: 528) ---
        ctx.save();
        ctx.translate(400, 528);
        SceneRenderer.drawRoundedRect(ctx, -40, -18, 80, 36, 4, '#1d4ed8'); // Blueprint
        // Clip: Original = Brass pushpin; Modified = Copper clamp
        ctx.fillStyle = isMod ? '#b45309' : '#eab308';
        SceneRenderer.drawCircle(ctx, 0, -12, 6);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 16: Cyberpunk Neon Metropolis (10 differences)
    // =========================================================================
    drawLevel16(ctx, w, h, isMod) {
        // Dark futuristic sky with rain
        ctx.fillStyle = '#050515';
        ctx.fillRect(0, 0, w, h);

        // Skyscraper silhouettes
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(60, 80, 140, 520);
        ctx.fillRect(260, 40, 160, 560);
        ctx.fillRect(480, 100, 180, 500);

        // --- DIFFERENCE 8: Rooftop Beacon (0.60, 0.10 -> x: 480, y: 60) ---
        ctx.save();
        ctx.translate(480, 60);
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(0, 0);
        ctx.stroke();
        // Red flashing beacon: Original has bright beacon; Modified is dark/missing
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 6, '#ef4444');
        }
        ctx.restore();

        // --- DIFFERENCE 1: Neon Kanji Sign (0.22, 0.16 -> x: 176, y: 96) ---
        ctx.save();
        ctx.translate(176, 96);
        // Neon symbol: Original = Hot Magenta (#ec4899); Modified = Electric Cyan (#06b6d4)
        const kanjiCol = isMod ? '#06b6d4' : '#ec4899';
        ctx.strokeStyle = kanjiCol;
        ctx.lineWidth = 4;
        ctx.strokeRect(-16, -16, 32, 32);
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(0, 10);
        ctx.moveTo(-10, 0);
        ctx.lineTo(10, 0);
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 2: Hovercar Thruster (0.72, 0.18 -> x: 576, y: 108) ---
        ctx.save();
        ctx.translate(576, 108);
        SceneRenderer.drawRoundedRect(ctx, -24, -8, 48, 16, 6, '#1e293b');
        // Thruster flame: Original = Cyan (#06b6d4); Modified = Red (#ef4444)
        const thrustCol = isMod ? '#ef4444' : '#06b6d4';
        ctx.fillStyle = thrustCol;
        ctx.beginPath();
        ctx.moveTo(-24, -4);
        ctx.lineTo(-44, 0);
        ctx.lineTo(-24, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 3: Surveillance Drone (0.46, 0.22 -> x: 368, y: 132) ---
        ctx.save();
        ctx.translate(368, 132);
        SceneRenderer.drawCircle(ctx, 0, 0, 12, '#334155');
        // Scanner Ray: Original = Yellow (#fde047); Modified = Crimson (#dc2626)
        const rayCol = isMod ? '#dc2626' : '#fde047';
        ctx.fillStyle = rayCol;
        SceneRenderer.drawCircle(ctx, 0, 6, 4);
        ctx.restore();

        // --- DIFFERENCE 4: Holo Giant Koi (0.84, 0.38 -> x: 672, y: 228) ---
        ctx.save();
        ctx.translate(672, 228);
        // Holo fish: Original = Translucent Orange (#f97316); Modified = Translucent Cyan (#06b6d4)
        const holoCol = isMod ? 'rgba(6, 182, 212, 0.7)' : 'rgba(249, 115, 22, 0.7)';
        ctx.fillStyle = holoCol;
        ctx.beginPath();
        ctx.ellipse(0, 0, 32, 14, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 5: Street Cyborg Visor (0.30, 0.56 -> x: 240, y: 336) ---
        ctx.save();
        ctx.translate(240, 336);
        SceneRenderer.drawCircle(ctx, 0, 0, 16, '#fed7aa');
        // Visor: Original = Yellow (#eab308); Modified = Emerald (#10b981)
        const cybCol = isMod ? '#10b981' : '#eab308';
        ctx.fillStyle = cybCol;
        ctx.fillRect(-12, -4, 24, 8);
        ctx.restore();

        // --- DIFFERENCE 7: Alley Graffiti Tag (0.54, 0.66 -> x: 432, y: 396) ---
        ctx.save();
        ctx.translate(432, 396);
        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = '#a855f7';
        // Tag: Original = "NEO"; Modified = "GLITCH"
        ctx.fillText(isMod ? "GLITCH" : "NEO", -20, 0);
        ctx.restore();

        // --- DIFFERENCE 6: Vending Machine Beverage (0.15, 0.74 -> x: 120, y: 444) ---
        ctx.save();
        ctx.translate(120, 444);
        SceneRenderer.drawRoundedRect(ctx, -20, -30, 40, 60, 4, '#0f172a', '#ec4899', 2);
        // Can icon: Original = Cherry Red (#ef4444); Modified = Lightning Bolt (#facc15)
        ctx.fillStyle = isMod ? '#facc15' : '#ef4444';
        SceneRenderer.drawCircle(ctx, 0, -6, 8);
        ctx.restore();

        // --- DIFFERENCE 9: Conduit Coupling (0.82, 0.82 -> x: 656, y: 492) ---
        ctx.save();
        ctx.translate(656, 492);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(30, 0);
        ctx.stroke();
        // Coupling box: Original has splice coupling; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(-8, -6, 16, 12);
        }
        ctx.restore();

        // --- DIFFERENCE 10: Cyber Cat Tail Neon (0.40, 0.88 -> x: 320, y: 528) ---
        ctx.save();
        ctx.translate(320, 528);
        SceneRenderer.drawCircle(ctx, 0, 0, 14, '#0f172a'); // Cat body
        // Tail Neon tip: Original = Neon Pink (#ec4899); Modified = Neon Cyan (#06b6d4)
        const catNeon = isMod ? '#06b6d4' : '#ec4899';
        ctx.strokeStyle = catNeon;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(14, -8, 12, 0, Math.PI);
        ctx.stroke();
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 17: Pharaoh's Golden Tomb (10 differences)
    // =========================================================================
    drawLevel17(ctx, w, h, isMod) {
        // Ancient sandstone tomb
        ctx.fillStyle = '#78350f';
        ctx.fillRect(0, 0, w, h);

        // Columns
        ctx.fillStyle = '#b45309';
        ctx.fillRect(80, 0, 60, h);
        ctx.fillRect(660, 0, 60, h);

        // --- DIFFERENCE 9: Column Lotus Petal (0.36, 0.36 -> x: 288, y: 216) ---
        ctx.save();
        ctx.translate(288, 216);
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-10, 0, 20, 100);
        // Lotus petal capital: Original has petal; Modified is broken/missing
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 14, '#15803d');
        }
        ctx.restore();

        // --- DIFFERENCE 1: Hieroglyph Falcon / Ibis (0.18, 0.16 -> x: 144, y: 96) ---
        ctx.save();
        ctx.translate(144, 96);
        ctx.fillStyle = '#fde047';
        if (!isMod) {
            // Horus Falcon
            SceneRenderer.drawCircle(ctx, 0, 0, 12);
            ctx.fillRect(-4, 10, 8, 14);
        } else {
            // Long-beaked Ibis
            SceneRenderer.drawCircle(ctx, 0, 0, 10);
            ctx.fillRect(4, -2, 18, 4);
        }
        ctx.restore();

        // --- DIFFERENCE 2: Winged Scarab Jewel (0.50, 0.22 -> x: 400, y: 132) ---
        ctx.save();
        ctx.translate(400, 132);
        // Wings
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.ellipse(-24, 0, 20, 8, -0.3, 0, Math.PI * 2);
        ctx.ellipse(24, 0, 20, 8, 0.3, 0, Math.PI * 2);
        ctx.fill();
        // Central gem: Original = Lapis Lazuli (#2563eb); Modified = Carnelian Red (#dc2626)
        const scarabCol = isMod ? '#dc2626' : '#2563eb';
        SceneRenderer.drawCircle(ctx, 0, 0, 12, scarabCol);
        ctx.restore();

        // --- DIFFERENCE 4: Torch Flame (0.82, 0.26 -> x: 656, y: 156) ---
        ctx.save();
        ctx.translate(656, 156);
        // Flame: Original = Golden Orange (#f97316); Modified = Purple Fire (#a855f7)
        const flameCol = isMod ? '#a855f7' : '#f97316';
        ctx.fillStyle = flameCol;
        SceneRenderer.drawCircle(ctx, 0, 0, 12);
        ctx.restore();

        // --- DIFFERENCE 3: Sarcophagus Uraeus Cobra (0.50, 0.52 -> x: 400, y: 312) ---
        ctx.save();
        ctx.translate(400, 312);
        // Pharaoh Golden Mask
        SceneRenderer.drawCircle(ctx, 0, 0, 48, '#eab308', '#ca8a04', 4);
        // Nemes headdress stripes
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(-38, -12, 10, 40);
        ctx.fillRect(28, -12, 10, 40);
        // Cobra Uraeus: Original = Flared cobra hood; Modified = Curled cobra
        ctx.fillStyle = '#dc2626';
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, -42, 8);
        } else {
            ctx.beginPath();
            ctx.arc(0, -42, 6, 0, Math.PI * 1.5);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#dc2626';
            ctx.stroke();
        }
        ctx.restore();

        // --- DIFFERENCE 6: Ankh Gem Inlay (0.74, 0.62 -> x: 592, y: 372) ---
        ctx.save();
        ctx.translate(592, 372);
        // Ankh cross
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 5;
        SceneRenderer.drawCircle(ctx, 0, -12, 10, null, '#eab308', 5);
        ctx.beginPath();
        ctx.moveTo(0, -2);
        ctx.lineTo(0, 20);
        ctx.moveTo(-12, 6);
        ctx.lineTo(12, 6);
        ctx.stroke();
        // Inlay: Original = Turquoise (#06b6d4); Modified = Ruby (#dc2626)
        const ankhGem = isMod ? '#dc2626' : '#06b6d4';
        SceneRenderer.drawCircle(ctx, 0, -12, 5, ankhGem);
        ctx.restore();

        // --- DIFFERENCE 5: Canopic Jar Lid (0.26, 0.68 -> x: 208, y: 408) ---
        ctx.save();
        ctx.translate(208, 408);
        SceneRenderer.drawRoundedRect(ctx, -18, -10, 36, 40, 6, '#f8fafc');
        // Head carving: Original = Jackal Anubis (tall ears); Modified = Baboon Hapi (round head)
        ctx.fillStyle = '#f8fafc';
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, -20, 10);
            ctx.fillRect(-6, -34, 4, 14);
            ctx.fillRect(2, -34, 4, 14);
        } else {
            SceneRenderer.drawCircle(ctx, 0, -20, 14);
        }
        ctx.restore();

        // --- DIFFERENCE 8: Cat Statue Collar (0.84, 0.82 -> x: 672, y: 492) ---
        ctx.save();
        ctx.translate(672, 492);
        // Black Bastet cat
        SceneRenderer.drawCircle(ctx, 0, 0, 18, '#0f172a');
        // Collar: Original = Gold ring; Modified = Scarab pendant
        if (!isMod) {
            ctx.strokeStyle = '#eab308';
            ctx.lineWidth = 4;
            ctx.strokeRect(-10, -4, 20, 8);
        } else {
            SceneRenderer.drawCircle(ctx, 0, 2, 6, '#06b6d4');
        }
        ctx.restore();

        // --- DIFFERENCE 7: Amphora Urn Pattern (0.15, 0.84 -> x: 120, y: 504) ---
        ctx.save();
        ctx.translate(120, 504);
        SceneRenderer.drawRoundedRect(ctx, -16, -20, 32, 44, 12, '#ea580c');
        // Band: Original = Zigzag; Modified = Wave
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        if (!isMod) {
            ctx.moveTo(-12, 0);
            ctx.lineTo(-6, -6);
            ctx.lineTo(0, 0);
            ctx.lineTo(6, -6);
            ctx.lineTo(12, 0);
        } else {
            ctx.arc(-6, 0, 6, 0, Math.PI);
            ctx.arc(6, 0, 6, Math.PI, 0);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 10: Gold Goblet on Platter (0.62, 0.86 -> x: 496, y: 516) ---
        ctx.save();
        ctx.translate(496, 516);
        // Gold Platter
        SceneRenderer.drawRoundedRect(ctx, -24, 0, 48, 8, 4, '#ca8a04');
        // Goblet: Original has gold chalice; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#eab308';
            ctx.beginPath();
            ctx.arc(0, -10, 8, 0, Math.PI);
            ctx.fill();
            ctx.fillRect(-2, -2, 4, 8);
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 18: Midnight Carnival Lights (10 differences)
    // =========================================================================
    drawLevel18(ctx, w, h, isMod) {
        // Deep purple festival night sky
        const nightGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 350, [
            [0, '#1e1b4b'],
            [1, '#4c1d95']
        ]);
        ctx.fillStyle = nightGrad;
        ctx.fillRect(0, 0, w, 350);

        // --- DIFFERENCE 8: Firework Spark (0.52, 0.10 -> x: 416, y: 60) ---
        ctx.save();
        ctx.translate(416, 60);
        // Firework burst: Original has spark trail; Modified is missing!
        if (!isMod) {
            SceneRenderer.drawStar(ctx, 0, 0, 8, 18, 6, '#fde047', '#ffffff');
        }
        ctx.restore();

        // --- DIFFERENCE 2: Big Top Tent Pennant (0.72, 0.24 -> x: 576, y: 144) ---
        ctx.save();
        ctx.translate(576, 144);
        // Circus Big Top Tent
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.moveTo(-50, 80);
        ctx.lineTo(0, 0);
        ctx.lineTo(50, 80);
        ctx.closePath();
        ctx.fill();
        // Pennant flag: Original = Red/White striped; Modified = Gold banner
        ctx.fillStyle = isMod ? '#eab308' : '#ffffff';
        ctx.fillRect(0, -18, 20, 10);
        ctx.restore();

        // --- DIFFERENCE 1: Ferris Wheel Bulb (0.32, 0.28 -> x: 256, y: 168) ---
        ctx.save();
        ctx.translate(256, 168);
        SceneRenderer.drawCircle(ctx, 0, 0, 60, null, '#ffffff', 4);
        // Gondola Star light: Original = Yellow Star (#facc15); Modified = Blue Diamond (#38bdf8)
        const bulbCol = isMod ? '#38bdf8' : '#facc15';
        SceneRenderer.drawCircle(ctx, 0, -60, 10, bulbCol);
        ctx.restore();

        // Carnival ground
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 350, w, 250);

        // --- DIFFERENCE 5: Balloon Bouquet (0.86, 0.44 -> x: 688, y: 264) ---
        ctx.save();
        ctx.translate(688, 264);
        // Balloon: Original = Star balloon; Modified = Heart balloon
        if (!isMod) {
            SceneRenderer.drawStar(ctx, 0, 0, 5, 16, 8, '#ec4899');
        } else {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(-6, -4, 8, Math.PI, 0);
            ctx.arc(6, -4, 8, Math.PI, 0);
            ctx.lineTo(0, 12);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // --- DIFFERENCE 3: Carousel Saddle (0.52, 0.60 -> x: 416, y: 360) ---
        ctx.save();
        ctx.translate(416, 360);
        // Carousel horse
        SceneRenderer.drawCircle(ctx, 0, 0, 24, '#ffffff', '#e2e8f0', 2);
        // Saddle: Original = Purple (#8b5cf6); Modified = Emerald (#10b981)
        const sadCol = isMod ? '#10b981' : '#8b5cf6';
        SceneRenderer.drawRoundedRect(ctx, -10, -6, 20, 12, 3, sadCol);
        ctx.restore();

        // --- DIFFERENCE 4: Cotton Candy Floss (0.16, 0.62 -> x: 128, y: 372) ---
        ctx.save();
        ctx.translate(128, 372);
        // Floss cloud: Original = Pink Strawberry (#f472b6); Modified = Blue Raspberry (#38bdf8)
        const candyCol = isMod ? '#38bdf8' : '#f472b6';
        SceneRenderer.drawCircle(ctx, 0, -10, 18, candyCol);
        ctx.fillStyle = '#ffffff'; // Paper cone
        ctx.fillRect(-2, 8, 4, 20);
        ctx.restore();

        // --- DIFFERENCE 6: Ticket Booth Stripe Count (0.82, 0.78 -> x: 656, y: 468) ---
        ctx.save();
        ctx.translate(656, 468);
        SceneRenderer.drawRoundedRect(ctx, -24, -20, 48, 50, 4, '#dc2626');
        // Awning stripes: Original = 4 stripes; Modified = 2 stripes
        ctx.fillStyle = '#ffffff';
        const strCount = isMod ? 2 : 4;
        for (let s = 0; s < strCount; s++) {
            ctx.fillRect(-20 + (s * 40) / strCount, -20, 6, 14);
        }
        ctx.restore();

        // --- DIFFERENCE 7: Popcorn Box Stripes (0.38, 0.82 -> x: 304, y: 492) ---
        ctx.save();
        ctx.translate(304, 492);
        SceneRenderer.drawRoundedRect(ctx, -14, -16, 28, 32, 2, '#ffffff');
        // Box stripes: Original = Red Stripes (#dc2626); Modified = Gold Checked (#eab308)
        ctx.fillStyle = isMod ? '#eab308' : '#dc2626';
        ctx.fillRect(-8, -16, 5, 32);
        ctx.fillRect(3, -16, 5, 32);
        ctx.restore();

        // --- DIFFERENCE 9: Juggler Pin Count (0.66, 0.76 -> x: 528, y: 456) ---
        ctx.save();
        ctx.translate(528, 456);
        // Juggler pins in air: Original = 4 pins; Modified = 3 pins
        const pinCount = isMod ? 3 : 4;
        ctx.fillStyle = '#f59e0b';
        for (let p = 0; p < pinCount; p++) {
            const ang = (p * Math.PI) / (pinCount - 1);
            SceneRenderer.drawCircle(ctx, -20 + p * 14, -20 - Math.sin(ang) * 16, 5);
        }
        ctx.restore();

        // --- DIFFERENCE 10: Teddy Bear Bow Ribbon (0.22, 0.85 -> x: 176, y: 510) ---
        ctx.save();
        ctx.translate(176, 510);
        SceneRenderer.drawCircle(ctx, 0, 0, 16, '#92400e'); // Bear
        // Bow Ribbon: Original = Red (#dc2626); Modified = Blue (#2563eb)
        const bearBow = isMod ? '#2563eb' : '#dc2626';
        ctx.fillStyle = bearBow;
        ctx.fillRect(-6, 8, 12, 6);
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 19: Alpine Winter Chalet (10 differences)
    // =========================================================================
    drawLevel19(ctx, w, h, isMod) {
        // Starry frosty night
        const nightGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, 320, [
            [0, '#0f172a'],
            [1, '#1e293b']
        ]);
        ctx.fillStyle = nightGrad;
        ctx.fillRect(0, 0, w, 320);

        // Snow-capped alpine mountains in distance
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.moveTo(100, 320);
        ctx.lineTo(260, 100);
        ctx.lineTo(420, 320);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(220, 155);
        ctx.lineTo(260, 100);
        ctx.lineTo(300, 155);
        ctx.closePath();
        ctx.fill();

        // Cozy Wooden Chalet
        ctx.fillStyle = '#78350f';
        ctx.fillRect(260, 200, 220, 180);
        // Heavy snow roof
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(220, 200);
        ctx.lineTo(370, 110);
        ctx.lineTo(520, 200);
        ctx.closePath();
        ctx.fill();

        // --- DIFFERENCE 1: Chimney Smoke Drift (0.42, 0.18 -> x: 336, y: 108) ---
        ctx.save();
        ctx.translate(336, 108);
        ctx.fillStyle = '#475569';
        ctx.fillRect(-10, 0, 20, 30); // Chimney
        // Smoke drift: Original = drifts Left; Modified = drifts Right
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        if (!isMod) {
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(-20, -20, -40, -40);
        } else {
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(20, -20, 40, -40);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 2: Roof Ridge Rooster (0.34, 0.22 -> x: 272, y: 132) ---
        ctx.save();
        ctx.translate(272, 132);
        // Rooster vane: Original has brass rooster; Modified is missing!
        if (!isMod) {
            ctx.fillStyle = '#eab308';
            SceneRenderer.drawCircle(ctx, 0, 0, 7);
        }
        ctx.restore();

        // --- DIFFERENCE 6: Fir Snow Blanket (0.86, 0.36 -> x: 688, y: 216) ---
        ctx.save();
        ctx.translate(688, 216);
        ctx.fillStyle = '#064e3b';
        ctx.beginPath();
        ctx.moveTo(0, -30);
        ctx.lineTo(30, 30);
        ctx.lineTo(-30, 30);
        ctx.closePath();
        ctx.fill();
        // Heavy snow cap: Original has snow; Modified has bare green needles
        if (!isMod) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(0, -30);
            ctx.lineTo(16, 2);
            ctx.lineTo(-16, 2);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // --- DIFFERENCE 9: Stag Antler Tips (0.14, 0.42 -> x: 112, y: 252) ---
        ctx.save();
        ctx.translate(112, 252);
        ctx.fillStyle = '#1e293b';
        SceneRenderer.drawCircle(ctx, 0, 0, 14); // Stag head
        // Antlers: Original = 8-point majestic antlers; Modified = 4-point antlers
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-6, -10);
        ctx.lineTo(-14, -28);
        ctx.moveTo(6, -10);
        ctx.lineTo(14, -28);
        if (!isMod) {
            ctx.moveTo(-10, -20);
            ctx.lineTo(-20, -22);
            ctx.moveTo(10, -20);
            ctx.lineTo(20, -22);
        }
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 3: Wood Shutter Heart (0.54, 0.44 -> x: 432, y: 264) ---
        ctx.save();
        ctx.translate(432, 264);
        SceneRenderer.drawRoundedRect(ctx, -14, -20, 28, 40, 2, '#92400e');
        // Carving: Original = Heart (#ef4444); Modified = Pine Tree (#15803d)
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 5, '#ef4444');
        } else {
            ctx.fillStyle = '#15803d';
            ctx.fillRect(-2, -6, 4, 12);
        }
        ctx.restore();

        // --- DIFFERENCE 7: Window Candle (0.40, 0.48 -> x: 320, y: 288) ---
        ctx.save();
        ctx.translate(320, 288);
        SceneRenderer.drawRoundedRect(ctx, -16, -18, 32, 36, 4, '#1e293b');
        // Warm flame: Original has glowing candle; Modified is dark!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 8, '#fde047');
        }
        ctx.restore();

        // Snowfield foreground
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(0, 360, w, 240);

        // --- DIFFERENCE 4: Snowman Scarf (0.78, 0.70 -> x: 624, y: 420) ---
        ctx.save();
        ctx.translate(624, 420);
        SceneRenderer.drawCircle(ctx, 0, 20, 26, '#ffffff', '#cbd5e1', 2);
        SceneRenderer.drawCircle(ctx, 0, -14, 18, '#ffffff', '#cbd5e1', 2);
        // Scarf: Original = Red (#dc2626); Modified = Blue (#2563eb)
        const scarfColor = isMod ? '#2563eb' : '#dc2626';
        ctx.fillStyle = scarfColor;
        ctx.fillRect(-16, -4, 32, 8);
        ctx.fillRect(4, 2, 8, 20);
        ctx.restore();

        // --- DIFFERENCE 5: Ski Pole Rings (0.22, 0.72 -> x: 176, y: 432) ---
        ctx.save();
        ctx.translate(176, 432);
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, -30);
        ctx.lineTo(10, 30);
        ctx.stroke();
        // Basket ring: Original = Red (#ef4444); Modified = Yellow (#eab308)
        const ringCol = isMod ? '#eab308' : '#ef4444';
        SceneRenderer.drawCircle(ctx, 7, 18, 8, null, ringCol, 3);
        ctx.restore();

        // --- DIFFERENCE 8: Sled Cushion (0.60, 0.84 -> x: 480, y: 504) ---
        ctx.save();
        ctx.translate(480, 504);
        // Sled wood runners
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-24, 10);
        ctx.lineTo(24, 10);
        ctx.stroke();
        // Cushion: Original = Green (#16a34a); Modified = Red (#dc2626)
        const cushCol = isMod ? '#dc2626' : '#16a34a';
        SceneRenderer.drawRoundedRect(ctx, -18, -4, 36, 12, 3, cushCol);
        ctx.restore();

        // --- DIFFERENCE 10: Hot Cocoa Drizzle (0.32, 0.88 -> x: 256, y: 528) ---
        ctx.save();
        ctx.translate(256, 528);
        SceneRenderer.drawRoundedRect(ctx, -12, 0, 24, 26, 4, '#dc2626');
        // Whipped cream topping: Original has chocolate drizzle; Modified has plain marshmallow
        ctx.fillStyle = '#ffffff';
        SceneRenderer.drawCircle(ctx, 0, -2, 10);
        if (!isMod) {
            ctx.fillStyle = '#451a03';
            ctx.fillRect(-6, -4, 12, 3);
        }
        ctx.restore();
    }

    // =========================================================================
    // LEVEL 20: Twilight Coral Fantasy (10 differences)
    // =========================================================================
    drawLevel20(ctx, w, h, isMod) {
        // Deep abyss twilight gradient
        const deepGrad = SceneRenderer.drawLinearGrad(ctx, 0, 0, 0, h, [
            [0, '#020617'],
            [0.5, '#0369a1'],
            [1, '#0c4a6e']
        ]);
        ctx.fillStyle = deepGrad;
        ctx.fillRect(0, 0, w, h);

        // --- DIFFERENCE 1: Giant Manta Runes (0.36, 0.22 -> x: 288, y: 132) ---
        ctx.save();
        ctx.translate(288, 132);
        // Manta wings
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(60, 4);
        ctx.lineTo(0, 18);
        ctx.lineTo(-60, 4);
        ctx.closePath();
        ctx.fill();
        // Bioluminescent runes: Original = Cyan (#06b6d4); Modified = Gold (#facc15)
        const mantaRune = isMod ? '#facc15' : '#06b6d4';
        ctx.strokeStyle = mantaRune;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(-30, 2);
        ctx.lineTo(-10, 4);
        ctx.moveTo(30, 2);
        ctx.lineTo(10, 4);
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 2: Nautilus Shell Spiral (0.74, 0.32 -> x: 592, y: 192) ---
        ctx.save();
        ctx.translate(592, 192);
        // Shell: Original = White with Orange tiger stripes; Modified = Iridescent Violet (#a855f7)
        const nautColor = isMod ? '#a855f7' : '#fed7aa';
        SceneRenderer.drawCircle(ctx, 0, 0, 22, nautColor, '#ffffff', 2);
        ctx.strokeStyle = isMod ? '#ffffff' : '#ea580c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(4, 4, 12, 0, Math.PI * 1.5);
        ctx.stroke();
        ctx.restore();

        // --- DIFFERENCE 6: Temple Pillar Rune Eye (0.16, 0.46 -> x: 128, y: 276) ---
        ctx.save();
        ctx.translate(128, 276);
        ctx.fillStyle = '#334155';
        ctx.fillRect(-16, -40, 32, 120);
        // Rune Eye: Original has glowing emerald eye; Modified is dark empty socket!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 0, 0, 8, '#10b981', '#ffffff', 1.5);
        } else {
            SceneRenderer.drawCircle(ctx, 0, 0, 6, '#0f172a');
        }
        ctx.restore();

        // --- DIFFERENCE 5: Emperor Angelfish Fin (0.62, 0.48 -> x: 496, y: 288) ---
        ctx.save();
        ctx.translate(496, 288);
        SceneRenderer.drawCircle(ctx, 0, 0, 18, '#1e3a8a');
        // Dorsal fin: Original = Long trailing streamer; Modified = Short rounded fin
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        if (!isMod) {
            ctx.moveTo(0, -16);
            ctx.quadraticCurveTo(-26, -34, -40, -38);
            ctx.lineTo(-12, -10);
        } else {
            ctx.arc(0, -18, 10, Math.PI, 0);
        }
        ctx.fill();
        ctx.restore();

        // --- DIFFERENCE 8: Pygmy Seahorse Crown (0.44, 0.60 -> x: 352, y: 360) ---
        ctx.save();
        ctx.translate(352, 360);
        SceneRenderer.drawCircle(ctx, 0, 0, 12, '#f43f5e'); // Head
        // Crown spikes: Original = 3 spikes; Modified = 5 spikes
        ctx.fillStyle = '#fde047';
        const spikeCnt = isMod ? 5 : 3;
        for (let s = 0; s < spikeCnt; s++) {
            ctx.fillRect(-8 + s * 4, -18, 2.5, 7);
        }
        ctx.restore();

        // --- DIFFERENCE 7: Diver Goggles Visor (0.84, 0.68 -> x: 672, y: 408) ---
        ctx.save();
        ctx.translate(672, 408);
        SceneRenderer.drawCircle(ctx, 0, 0, 22, '#475569');
        // Visor: Original = Amber Gold (#f59e0b); Modified = Neon Cyan (#06b6d4)
        const visCol = isMod ? '#06b6d4' : '#f59e0b';
        SceneRenderer.drawRoundedRect(ctx, -14, -8, 28, 16, 4, visCol);
        ctx.restore();

        // --- DIFFERENCE 4: Sea Anemone Tips (0.22, 0.78 -> x: 176, y: 468) ---
        ctx.save();
        ctx.translate(176, 468);
        // Tips color: Original = Neon Magenta (#f43f5e); Modified = Neon Lime (#84cc16)
        const tipCol = isMod ? '#84cc16' : '#f43f5e';
        ctx.strokeStyle = '#064e3b';
        ctx.lineWidth = 3;
        for (let a = -20; a <= 20; a += 8) {
            ctx.beginPath();
            ctx.moveTo(a, 30);
            ctx.lineTo(a * 1.3, -10);
            ctx.stroke();
            SceneRenderer.drawCircle(ctx, a * 1.3, -10, 4, tipCol);
        }
        ctx.restore();

        // --- DIFFERENCE 3: Clam Giant Pearl (0.50, 0.84 -> x: 400, y: 504) ---
        ctx.save();
        ctx.translate(400, 504);
        // Giant Clam Shell
        ctx.fillStyle = '#831843';
        ctx.beginPath();
        ctx.arc(0, 10, 36, Math.PI, 0);
        ctx.fill();
        // Pearl: Original = Iridescent Pink Pearl (#fbcfe8); Modified = Obsidian Black Pearl (#0f172a)
        const pearlCol = isMod ? '#0f172a' : '#fbcfe8';
        SceneRenderer.drawCircle(ctx, 0, 6, 14, pearlCol, '#ffffff', 2);
        ctx.restore();

        // --- DIFFERENCE 9: Coral Polyp Buds (0.78, 0.86 -> x: 624, y: 516) ---
        ctx.save();
        ctx.translate(624, 516);
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 30);
        ctx.lineTo(0, 0);
        ctx.lineTo(20, -18);
        ctx.stroke();
        // Glowing polyps: Original has glowing gold buds; Modified is missing!
        if (!isMod) {
            SceneRenderer.drawCircle(ctx, 20, -18, 6, '#fde047');
            SceneRenderer.drawCircle(ctx, -8, -6, 5, '#fde047');
        }
        ctx.restore();

        // --- DIFFERENCE 10: Deep Sea Starfish Hue (0.30, 0.90 -> x: 240, y: 540) ---
        ctx.save();
        ctx.translate(240, 540);
        // Starfish color: Original = Scarlet Red (#dc2626); Modified = Amethyst Purple (#a855f7)
        const starCol = isMod ? '#a855f7' : '#dc2626';
        SceneRenderer.drawStar(ctx, 0, 0, 5, 22, 10, starCol, '#ffffff');
        ctx.restore();
    }

    drawFallback(ctx, w, h, id, isMod) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px sans-serif';
        ctx.fillText(`Level ${id} Scene (${isMod ? "Modified" : "Original"})`, 260, 300);
    }
}

window.SceneRenderer = SceneRenderer;
