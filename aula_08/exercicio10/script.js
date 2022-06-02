nome = prompt(`Nome: `);
altura = prompt(`Altura: `);
peso = prompt(`Peso: `);

function calcImc(nome, altura, peso) {
    alt = Number(altura);
    kg = Number(peso);

    let imc = kg / (alt * 2);

    document.write(`Nome: ${nome} <br>`)
    document.write(`Altura: ${altura} <br>`)
    document.write(`Peso: ${peso} <br>`)
    document.write(`IMC: ${imc} <br>`)
}

calcImc(nome, altura, peso)