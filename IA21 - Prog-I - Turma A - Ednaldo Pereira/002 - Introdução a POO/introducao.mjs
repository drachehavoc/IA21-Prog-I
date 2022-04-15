import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

class Animal {
    comer() {
        console.log("comendo")
    }
}

class Pessoa extends Animal{
    constructor (nome, idade) {
        super()
        this.nome = nome
        this.idade = idade
    }

    gritarNome() {
        console.log(this.nome.toUpperCase())
    }
}

class Aluno extends Pessoa {
    gemerNome() {
        console.log("Aiiiii para paiiiuiioimmm")
        this.gritarNome()
    }
}

const pes1 = new Aluno("Dunha", 90)
const pes2 = pes1 //new Aluno("Dunha", 90)
console.log(pes1 == pes2 ? "VERDADEIRO" : "FALSO")