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
        offset?: number 
    ) {
        this._canvas = canvas
        this._context = canvas.getContext("2d")
        this._height = height
        this._width = width
        this._speed = speed
        this._color = color
        this._offset = offset ?? 0
    }

    movingUp() {
        this._direction = -this._speed
    }
    
    movingDown() {
        this._direction = this._speed
    }

    stopMove() {
        this._direction = 0
    }

    render() {
        this._context.fillStyle = this._color
        this._context.fillRect(this._offset, this._position, this._width, this._height)
        this._position += this._direction
        if (this._position <= 0 || this._position >= this._canvas.height - this._height) {
            this._direction = 0
        }
    }
}