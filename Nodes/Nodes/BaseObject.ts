﻿class BaseObject {

    protected m_texture: HTMLCanvasElement;
    protected m_x: number;
    protected m_y: number;
    protected m_width: number;
    protected m_height: number;
    protected m_frameX: number;
    protected m_frameY: number;

    constructor(texture: HTMLCanvasElement) {
        this.m_texture = texture;
        this.m_x = 0;
        this.m_y = 0;
        this.m_width = 0;
        this.m_height = 0;
        this.m_frameX = 0;
        this.m_frameX = 0;
    }

    Update(value: number): void {
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
    }
}

export = BaseObject;