export class Bar {
    private _canvas: HTMLCanvasElement
    private _context: CanvasRenderingContext2D
    private _height: number
    private _width: number
    private _speed: number
    private _direction: number = 0
    private _position: number = 100
    private _color: string
    private _offset: number

    constructor(
        canvas: HTMLCanvasElement,
        height: number,
        width: number,
        speed: number,
        color: string,
        offset?: number,
    ) {
        this._canvas = canvas
        this._context = canvas.getContext("2d")
        this._height = height
        this._width = width
        this._speed = speed
        this._color = color
        this._offset = offset ?? 0
    }
    
    movingRight() { 
        this._direction = this._speed
    }

    movingLeft() { 
        this._direction = -this._speed
    }

    stopMoving() {
        this._direction = 0
    }

    render() {
        const can = this._canvas
        const ctx = this._context
        const h = this._height
        const w = this._width
        const pos = this._position = this._position + this._direction
        
        ctx.fillStyle = this._color
        ctx.fillRect(pos, can.height - h - this._offset, w, h)
        
        if (pos <= 0 || pos >= can.width - w) {
            this._direction = 0
        }
    }
}