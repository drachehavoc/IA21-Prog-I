import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q, a => rs(a)))

const color = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};

let soma = 0
let count = 0
let media

while (true) {
    let strNota = await question('Insira o valor ' + (count + 1) + ' ou (N) para realizar as médias: ')
    if (strNota.toUpperCase() == 'N') break 
    let nota = parseFloat(strNota)
    
    if(isNaN(nota)) {
        console.log(color.fg.red, "asdasdaksdhsakjdsa", color.reset)
        continue
    }

    soma = soma + nota 
    count++
}

media = soma / count
console.log('A média dos valores é: ', media)
process.exit()