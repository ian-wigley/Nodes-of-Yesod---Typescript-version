﻿import Enemy = require("Enemy");
import Rectangle = require("Rectangle");
import ScreenInfo = require("ScreenInfo");

class WhirlWind extends Enemy {
    constructor(xpos: number, ypos: number, speedx: number, gamesprites: HTMLCanvasElement, wall: Array<Rectangle>, screenInfo: ScreenInfo) {
        super(xpos, ypos, speedx, gamesprites, wall, screenInfo);
        this.m_name = "WhirlWind";
        this.m_offsetX = 0 * 64;
        this.m_offsetY = 0 * 69;
    }

    public Update(): void {
        this.m_animTimer += 0.1;
        this.m_x += this.m_speed;
        if (this.m_animTimer > 0.4) {
            this.m_frame = (this.m_frame + 1) % 4;
            this.m_animTimer = 0;
        }
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.drawImage(this.m_texture, this.m_frame * 64, 8 * 69, 68, 68, this.m_x, this.m_y, 64, 64);
    }
}
export = WhirlWind; 