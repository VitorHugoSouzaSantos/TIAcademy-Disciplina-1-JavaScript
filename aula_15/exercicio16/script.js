
window.onload = function () {
    function tabuada(numero) {
        let tabuada = 0;
        if (typeof numero !== 'number') {
            alert('Digite um valor numérico valido')
        } else {
            if (numero < 1 || numero > 10) {
                alert('Digite um valor entre 1 e 10')
            } else {
                console.log(`Tabuada do ${numero}`)
                while (tabuada <= 10) {
                    console.log(`${numero} x ${tabuada} = (${numero * tabuada})`);
                   tabuada++
                }
            }
        }

    } tabuada(2);
}
