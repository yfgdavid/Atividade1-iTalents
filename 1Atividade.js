//calculadora usando node.js

const { question } = require("readline-sync");

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    introducao() {
        console.log(`Ola, me chamo ${this.nome}, tenho ${this.idade} e vou usar a calculadora.`);

    }
}
const pessoa1 = new Pessoa(`David`, `18`)
pessoa1.introducao()




console.log(`--------------------------Calculadora------------------------------`);

let pergunta = `sim`

while (pergunta == `sim`) {
    let operacao = question(`qual operacao voce deseja fazer? (- | + | * | /) `)
    let n1 = parseFloat(question(`informe um numero: `))
    let n2 = parseFloat(question(`informe outro numero: `))


    console.clear()

    let soma = (n1, n2) => n1 + n2
    let subtracao = (n1, n2) => n1 - n2
    let multiplicacao = (n1, n2) => n1 * n2
    let divisao = (n1, n2) => n1 / n2

    switch (operacao) {
        case "+":
            console.log(`o resultado é: ${soma(n1, n2)}`)
            break
        case "-":
            console.log(`o resultado é: ${subtracao(n1, n2)}`)
            break
        case "*":
            console.log(`o resultado é: ${multiplicacao(n1, n2)}`)
            break
        case "/":

            const podeDividir = n2 == 0 ? `NAO É POSSIVEL DIVIDIR POR 0.` : `O resultado é: ${divisao(n1, n2).toFixed(2)}`
            console.log(podeDividir);

            break
        default:
            console.log(`Operação invalida!!`)
    }


    pergunta = question(`Deseja continuar? sim/nao? `)

    console.clear()
    console.log(`--------------------------Calculadora-----------------------------`);
}

console.log("Fim dos calculos!")