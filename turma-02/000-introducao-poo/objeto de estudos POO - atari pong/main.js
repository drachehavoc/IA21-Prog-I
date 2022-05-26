const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

let y = 100
let directionY = 0
let barSize = 100


document.addEventListener("keydown", ev => {
  if (ev.repeat)
    return

  if (ev.code == "KeyS")
    return directionY = 10

  if (ev.code == "KeyW")
    return directionY = -10
})

document.addEventListener("keyup", ev => { 
  if (ev.code == "KeyS" || ev.code == "KeyW")
    return directionY = 0
})

function mainLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillRect(10, y, 20, barSize)
  y += directionY
  if(y <= 0 || y >= canvas.height - barSize) {
    directionY = 0 
  }
  requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)

document.body.append(canvas)