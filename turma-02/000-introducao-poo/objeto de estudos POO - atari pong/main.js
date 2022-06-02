const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 300
canvas.height = 300

let y = 100
let directionY = 0
let barHeight = 50
let barWidth = 10
let speed = 5

document.addEventListener("keydown", ev => {
  if (ev.repeat)
    return

  if (ev.code == "KeyS")
    return directionY = speed

  if (ev.code == "KeyW")
    return directionY = -speed
})

document.addEventListener("keyup", ev => { 
  if (ev.code == "KeyS" || ev.code == "KeyW")
    return directionY = 0
})

function mainLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillRect(10, y, barWidth, barHeight)
  y += directionY
  if(y <= 0 || y >= canvas.height - barHeight) {
    directionY = 0 
  }
  requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)

document.body.append(canvas)