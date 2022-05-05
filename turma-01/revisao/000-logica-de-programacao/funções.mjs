function dizerONome() {
    var nome = "Daniel"
    var sobrenome = "Andrade Varela"
    return nome + " de " + sobrenome
}

// var nome = dizerONome()
// console.log(nome)

function porcentagem(total, porcento) {
    const por = 100
    return (total * porcento) / por
}

function soma(a, b) {
    return (a + b) * 100
}

console.log(soma(2, 2) + porcentagem(1000, 50) + dizerONome())
