let nomes = ["Pedro", "José", "Paulo", "Maria", "Samanta"];

const exercNomes= (nome, novo, indice)=>{
    
    console.log(`Quantidade de elementos do array: `, nome.length);
    
    console.log(`Você escoleu o indice ${indice} que é o elemento ${nome[indice]}`);
    
    console.log(`O nome ${novo} foi inserido.`)
    nome.push(novo);
    
    console.log(`A quantidade de elementos atual do array é de: `, nome.length)
    

}
exercNomes(nomes, "Mariana", 4)
exercNomes(nomes, "João", 2)


