import { Bar } from "./Bar.ts"

const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 400
canvas.height = 300

const bar = new Bar(canvas, 50, 10, 5, "green")
const bar2 = new Bar(canvas, 50, 10, 5, "pink", canvas.width - 10)

document.addEventListener("keydown", ev => {
  if (ev.repeat)
    return

  if (ev.code == "KeyS")
    return bar.movingDown()

  if (ev.code == "KeyW")
    return bar.movingUp()


  if (ev.code == "ArrowDown")
    return bar2.movingDown()

  if (ev.code == "ArrowUp")
    return bar2.movingUp()
})

document.addEventListener("keyup", ev => {
  if (ev.code == "KeyS" || ev.code == "KeyW")
    return bar.stopMove()

  if (ev.code == "ArrowDown" || ev.code == "ArrowUp")
    return bar2.stopMove()
})

function mainLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  bar.render()
  bar2.render()
  requestAnimationFrame(mainLoop) // recursive exec of mainLoop
}

requestAnimationFrame(mainLoop) // first exec of mainLoop

document.body.append(canvas)


// let y = 100
// let directionY = 0
// let barHeight = 50
// let barWidth = 10
// let speed = 5

// document.addEventListener("keydown", ev => {
//   if (ev.repeat)
//     return

//   if (ev.code == "KeyS")
//     return directionY = speed

//   if (ev.code == "KeyW")
//     return directionY = -speed
// })

// document.addEventListener("keyup", ev => {
//   if (ev.code == "KeyS" || ev.code == "KeyW")
//     return directionY = 0
// })

// function mainLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height)
//   context.fillRect(10, y, barWidth, barHeight)
//   y += directionY
//   if(y <= 0 || y >= canvas.height - barHeight) {
//     directionY = 0
//   }
//   requestAnimationFrame(mainLoop)
// }

// requestAnimationFrame(mainLoop)

// document.body.append(canvas)