function verificarMaiorNum(num1, num2) {
    //if
    //operador
    if (num1 > num2) {
        console.log("O número " + num1 + " é maior que o número " + num2);
    } else {
        console.log("O número " + num1 + " é menor que o número " + num2);
    }
}

// verificarMaiorNum(200, 3)


// function teste() {
//     let nome = "Vitor";
//     return nome;
// }
// console.log(teste());


// let msg = (nome) => {
//     return nome
// }
// console.log(msg("José"));

// function teste() {
//     alert("Estou na function teste")
//     return nome
// }
// teste();

// (function (produto, preço) {
//     alert("O produto é " + produto + " e o preço é de R$ " + preço);
// })("Biscoito", 2.35)// 2.32

let v1 = prompt("Digite o valor 1:")
let v2 = prompt("Digite o valor 2:")

const soma = (valor1, valor2) => {
    let resultado = Number(valor1) / Number (valor2);
    console.log(resultado);
}
soma(v1,v2)