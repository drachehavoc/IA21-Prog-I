import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({ input, output })
const question = (q: any) => new Promise((rs, rj) => rl.question(q, a => rs(a)))

// ========================================

class Pessoa {
    private idade: number = 16
    private nome: string = ""

    constructor(pNome: string, pIdade: number) {
        this.nome = pNome
        this.idade = pIdade
    }

    fazerAniversario() {
        this.idade++
    }

    dizerAIdade() {
        return this.idade
    }

    dizerONome() {
        return this.nome
    }
}

// === EXECUÇÃO ===========================

void async function () {
    var p1 = new Pessoa("Daniel", 26)
    var p2 = new Pessoa("Pedro", 26)

    // p1.nome = "Daniel"
    // p2.nome = "Pedro"
    // pedro.idade = 90

    let i = 10
    while (i--) p1.fazerAniversario()

    console.log(p1.dizerONome(), p1.dizerAIdade())
    console.log(p2.dizerONome(), p2.dizerAIdade())

    process.exit()
}()