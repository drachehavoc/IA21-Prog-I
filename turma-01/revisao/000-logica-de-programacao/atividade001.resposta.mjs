import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

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
}

let soma = 0
let count = 0
let media

while (true) {
    let strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)
    if (strNota.toUpperCase() == 'N') break
    let nota = parseFloat(strNota)

    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log(`${color.fg.red}[ ERRO ] Por favor digite um número real entre 0 e 10 ou a letra N/n.${color.reset}`)
        continue
    }

    soma = soma + nota
    count++
}

if (count <= 0) {
    console.log(`${color.fg.red}[ ERRO ] Nenhum valor foi digitado para que fosse possível calcular média.${color.reset}`)
    process.exit()
}

media = soma / count
console.log(`${color.fg.green}[ RESULTADO ] A média de todos os valores informados é ${color.fg.yellow}${media}${color.reset}`)
process.exit()