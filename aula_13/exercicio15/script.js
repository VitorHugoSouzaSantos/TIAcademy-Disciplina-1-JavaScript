// Crie um programa, por meio de uma função, que receba um objeto como parâmetro. Esta função deverá ter como saída o nome
// das propriedades e seus respectivos valores. O objeto irá conter uma relação de frutas e seus preços.

let relacaoFrutas = [
    {
        fruta: "Uva",
        preco: 1.25
    },
    {
        fruta: "Pera",
        preco: 3.25
    },
    {
        fruta: "Jaca",
        preco: 2.25
    },
    {
        fruta: "Nevascaranga",
        preco: 4.25
    },
]
function frutasR(fruta) {
    for (let fruta of relacaoFrutas) {
        for (let f in fruta) {
            console.log(`${f}: ${fruta[f]}`)
        }
    }
}
frutasR(relacaoFrutas)