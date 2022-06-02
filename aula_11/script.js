// function Pessoa(nome) {
//     this.nome = nome;
//     // this.msg = function () {
//     //     alert("Olá")
//     // }
// }

// Pessoa.prototype.msg = function () {
//     alert(`Olá ${this.nome}`)
// }

// let NovaPessoa = new Pessoa("José");
// let OutraPessoa = new Pessoa("Maria");

// // console.log(NovaPessoa.nome);

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.msg());

// console.log(NovaPessoa);
// console.log(OutraPessoa);


//////////////////////////////////

// let Pessoa2 ={
//     'nome':'',
//     'idade':''
// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg=function(){
//     alert(`Olá ${Pessoa2.nome}`)
// }
// let P = Pessoa2;
// P.nome="Vitor"
// P.msg();
// console.log(P)


//////////////////////////////////

let Pessoa3 = [
    {
        "nome": "Marcelo",
        "idade": 36,
        "sexo": "M"
    },
    {
        "nome": "Suelem",
        "idade": 36,
        "Sexo": "F"
    },
    {
        "nome": "Marcos",
        "idade": 30,
        "sexo": "M"
    },
    {
        "nome": "Danubia",
        "idade": 33,
        "sexo": "F"
    },
    
]
let NPessoa=Pessoa3
console.log(`Existem ${NPessoa.length} cadastradas`)
console.log(NPessoa[0].nome)