
window.onload = function () {

    const tab = document.querySelector('#tabuada')
    const btn = document.querySelector('#calc')
    const resp = document.querySelector('#resposta')

    btn.addEventListener('click', function () {
        let numero = Number(tab.value);
        let tabuada = 0;
        if (isNaN(numero)) {
            resp.innerHTML = 'Digite um valor numérico valido.';
        } else {
            if (numero < 1 || numero > 10) {
                resp.innerHTML = 'Digite um valor entre 1 e 10.';
            } else {
                resp.innerHTML = `<br>Tabuada do ${numero}<br>`;
                while (tabuada <= 10) {
                    resp.innerHTML += `${numero} x ${tabuada} = (${numero * tabuada}) <br>`;
                    tabuada++
                }
            }
        }
    })
}

// Tive dificuldade nesse exercício, principalmente na
// linha 11 o "isNaN"
// linha 19 só era impresso um linha da tabuada, (+=)
