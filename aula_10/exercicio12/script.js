let nome = "Marcelo";

(function(){
document.write(`Esta palavra ${nome} tem ${nome.length} carácteres <br>` );
document.write(`A palavra ${nome.toLocaleLowerCase()} ficou ${nome.toLocaleUpperCase()}<br>` );
document.write(`A letra ${nome.toLocaleUpperCase()[2]} é o 3º carácter da palavra ${nome} <br>`);
document.write(`${nome.toLocaleUpperCase()} ficou ${nome.toLocaleUpperCase().replace(/R/gi,`X`)}`);
})
(nome);
// Esta palavra tem 7 carácteres

// A palavra marcelo ficou MARCELO

// A letra R é o 3º carácter da palavra MARCELO

// MARCELO ficou MAXCELO