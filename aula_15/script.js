// let m = false;

// console.log(typeof(m))

// if(typeof m === 'number'){
//     console.log(`O daddo informado é um number: ${m}`)
// }else{
//     console.log(`O daddo informado não é um number: ${m} : ${typeof m}`)
// }


// --------------------------


window.onload = function () {
    // alert("Olá!");

    const botao = document.getElementById('btn');
    const textBox = document.querySelector('#textBox');
    const caixa = document.querySelector('#caixa')

    botao.addEventListener('click', function () {
        // alert(textBox.value);
        caixa.innerHTML += ' '+ textBox.value + ' ';
    })
}