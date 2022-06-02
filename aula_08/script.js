let str = `Qualquer conteudo!`;
let str2 = `Uma outra string ${str}`;

// let str = "Qualquer conteudo!";
// let str2 = "Uma outra string "+str;

// console.log(str2);


// // Arrays uma coleção de dados ////////////////////////////

// const frutas = ["Uva", "Banana", "Laranja", "Melancia"]; // 4 | 0-1-2-3

// let euGosto = `Eu gosto de ${frutas[2]}`

// console.log(euGosto);

// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);


const Pessoa = [
    "José",         // 0
    23,             // 1
    "Solteiro",     // 2
    "Bola",         // 3
    1.70,            // 4
    cores = ["azul", "preto", "vermelho", "salmão", "ocre"] // 5
];

let key = 5;
key++;

console.log(`Vitor`[0],`Vitor`[1]);
console.log(Pessoa[5][key]); // array bidimensional

// (function (p) {
//     const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou
//     ${Pessoa[2]} eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}`;
//     document.write(jose)
// })(Pessoa);

// console.log(jose);


