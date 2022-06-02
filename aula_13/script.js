// let i =2;
// for(let x=0;x<10;x++){
//     console.log(`O valor da interação é ${x} o x mais ele ${i++}`);
// }


// let Pessoas = {
//     nome: "Steven Roger",
//     idade: 90,
//     heroi: "Capitão América",
// }
// // console.log(Pessoas.nome)

// for (let propriedades in Pessoas) { // não utiliza a chamada de todos os elementos(rever aula)
//     console.log(Pessoas.nome);
// }

// arr = ["nome"=>"Marcelo"]        exemplo professor
// arrr[nome]




// Rever for of ----------------------------------------------

// let frutas = ["Melancia", "Manga", "Banana", "Uva"];

// for (let nomeFruta of frutas) {
//     console.log(nomeFruta);
// }

// for (let x = 0; x < frutas.length; x++) {
//     console.log(`O nome da fruta é ${frutas[x]}`);
// }


let Herois = [
    {
        identidadeSecreta: "Steven Roger",
        heroi: "Capitão América",
    },
    {
        identidadeSecreta: "Tony Stark",
        heroi: "Homem de Ferro",
    }
];
Herois.push({ identidadeSecreta: "Diana", heroi: "Mulher Maravilha" });
Herois.push({ identidadeSecreta: "Bruce Banner", heroi: "Hulk" });
Herois.push({ identidadeSecreta: "T'Challa", heroi: "Pantera Negra" }); // Press F to pay respects
// // let marvel = Herois[1].identidadeSecreta;
// console.log(marvel)

for (let marvel of Herois) {
    // console.log(marvel)
    for (let m in marvel) {
        console.log(`${m} -> ${marvel[m]}`)
    }
}