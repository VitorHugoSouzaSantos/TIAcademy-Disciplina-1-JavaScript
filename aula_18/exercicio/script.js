window.onload = function () {
    let veiculos = ['ônibus', 'motocicleta', 'patinete']

    const buscar = document.querySelector('#lista')
    const listaVeiculos = document.querySelector('#veiculos')

    buscar.addEventListener('click', function () {
        for (car of veiculos) {
            let li = document.createElement('li');
            listaVeiculos.appendChild(li).textContent = car;
        }
    })
}