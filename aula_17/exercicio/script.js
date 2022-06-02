window.onload = function () {
    const valor1 = document.querySelector('#cx1');
    const valor2 = document.querySelector('#cx2');
    const total = document.querySelector('#cx3');

    valor2.addEventListener('blur', function () {
        total.value = Number(valor1.value) + Number(valor2.value);
    })
}