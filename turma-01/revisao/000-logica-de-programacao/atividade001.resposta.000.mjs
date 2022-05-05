import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

let soma = 0
let count = 0
let media = 0

while (true) {
    let strNota = await question('Digite o valor da '+ (count + 1) + '° nota ou N/n para cacular a média entre os valores inseridos:')
    if (strNota.toUpperCase() == 'N') break
    let nota = parseFloat(strNota)
    soma = soma + nota
    count++
}

media = soma / count
console.log(`[ RESULTADO ] A média de todos os valores informados é`, media)
process.exit()