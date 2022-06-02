// while

// let loop = 0;
// let cores = ["verde", "vermelho"]
// while (loop < cores.length) {
//     console.log(cores[loop]);
//     loop++;
// }


//

let teste = 0;
do {
    teste = Number(prompt(`Digite um dos numeros abaixo para selecionar a opção \n 0 - Saindo do sistema\n 1 - Cadastrando \n 2 - Consultando`))
    switch (teste) {
        case 0:
            alert("Saindo do sistema")
            break;
        case 1:
            alert("Cadastrando");
            break;
        case 2:
            alert("Consultando");
            break;
        default:
            alert("Opção inválida");
            break;
    }
} while (teste != 0)