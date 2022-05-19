import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({ input, output })
const question = (q: any) => new Promise((rs, rj) => rl.question(q, a => rs(a)))

// ========================================

class Pessoa {
    private nome: string = ""
    private idade: number = 16

    constructor(pNome: string, pIdade: number) {
        this.nome = pNome
        this.idade = pIdade
    }

    public fazerAniversario() {
        this.idade += 1
    }

    public dizerNome() {
        return this.nome
    }

    public dizerAidade() {
        return this.idade
    }
}

// === EXECUÇÃO ===========================

void async function () {
    const p1 = new Pessoa("Airam", 16)
    const p2 = new Pessoa("Daniel", 26)

    // p1.nome = "Airam"
    // airam.idade = 90

    let i = 10
    while (i--) p2.fazerAniversario()

    console.log(p1.dizerNome(), p1.dizerAidade())
    console.log(p2.dizerNome(), p2.dizerAidade())

    process.exit()
}()