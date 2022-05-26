const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 400
canvas.height = 350

let x = 100
let barWidth = 50
let barHeight = 10
let directionX = 0
let speed = 10

document.addEventListener("keydown", ev => {
    if (!ev.repeat && ev.code == "KeyD") 
        return directionX = speed

    if (!ev.repeat && ev.code == "KeyA")
        return directionX = -speed
})

document.addEventListener("keyup", ev => {
    if (ev.code == "KeyD" || ev.code == "KeyA")
        return directionX = 0
})

function mainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(x, canvas.height-barHeight, barWidth, barHeight)
    x += directionX
    if (x <= 0 || x >= canvas.width - barWidth) {
        directionX = 0
    }
    requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)

document.body.append(canvas)