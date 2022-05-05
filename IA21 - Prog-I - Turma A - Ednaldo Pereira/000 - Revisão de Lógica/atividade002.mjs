import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q, a => rs(a)))

let soma = 0
let count = 0
let media

while (true) {
    let strNum = await question('Insira o valor ' + (count + 1) + ' ou (N) para realizar as médias: ')
    if (strNum.toUpperCase() == 'N') break 
    let num = parseFloat(strNum)
    if(isNaN(num)) {
        console.log("asdasdaksdhsakjdsa")
    }
    soma = soma + num 
    count++
}

media = soma / count
console.log('A média dos valores é: ', media)
process.exit()