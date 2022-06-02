import { Bar } from "./Bar.ts"

const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

const bar = new Bar(canvas, 10, 50, 10, "red", 10)
const bar2 = new Bar(canvas, 10, 50, 10, "blue", 30)
canvas.width = 400
canvas.height = 350

document.addEventListener("keydown", ev => {
    if (!ev.repeat && ev.code == "KeyD")
        bar.movingRight()

    if (!ev.repeat && ev.code == "KeyA")
        bar.movingLeft()

    if (!ev.repeat && ev.code == "ArrowRight")
        bar2.movingRight()

    if (!ev.repeat && ev.code == "ArrowLeft")
        bar2.movingLeft()
})

document.addEventListener("keyup", ev => {
    if (ev.code == "KeyD" || ev.code == "KeyA")
        return bar.stopMoving()
})

function mainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    bar.render() // reder the object bar
    bar2.render() // reder the object bar
    requestAnimationFrame(mainLoop) // responsive exec
}

requestAnimationFrame(mainLoop) // first exec 
document.body.append(canvas)

















// let x = 100
// let barWidth = 50
// let barHeight = 10
// let directionX = 0
// let speed = 10

// document.addEventListener("keydown", ev => {
//     if (!ev.repeat && ev.code == "KeyD")
//         return directionX = speed

//     if (!ev.repeat && ev.code == "KeyA")
//         return directionX = -speed
// })

// document.addEventListener("keyup", ev => {
//     if (ev.code == "KeyD" || ev.code == "KeyA")
//         return directionX = 0
// })

// function mainLoop() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(x, canvas.height-barHeight, barWidth, barHeight)
//     x += directionX
//     if (x <= 0 || x >= canvas.width - barWidth) {
//         directionX = 0
//     }
//     requestAnimationFrame(mainLoop)
// }

// requestAnimationFrame(mainLoop)

// document.body.append(canvas)