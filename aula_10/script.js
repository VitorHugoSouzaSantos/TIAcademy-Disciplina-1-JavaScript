// match( ) O método match procura uma palavra em uma string.
// g/i/m

        // let nome = "Vitor Hugo";

        // console.log(nome.match(`V`));


// search( ) O método de procura pela ocorrência e retornando a posição na cadeia da string

        // let nome = "Vitor Hugo";

        // console.log(nome.search(/v/i));
        // console.log(nome[0]);


// replace( ) Este método substitui uma string por outra, smplis assim, ele pesquisa

        // let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit nulla architecto autem repellendus ipsam
        // dolorem fugit sint alias distinctio, fuga quisquam atque dolorum. Minus illo quaerat accusantium odio perferendis.`;
        // let strOutra = str.replace(/sit/gi,`não`);

        // console.log(strOutra);


// localeCompare( ) O método compara e efetua a comparação entre duas strings

        // let gato = "gato";
        // let outroGato = "gato";

        // console.log(gato.localeCompare(/Gato/gi));


// toString( ) O uso irá converter um valor qualquer em  uma string.

        // let num = Number(`10`);
        // console.log(num.toString());


// toLowerCase( ) Faz a conversão de uma string inteira para caracteres minúsculos (caixa baixa)

        // let str = `Lorem ipsum dolor SIT amet consectetur adipisicing elit. Cum reprehenderit nulla architecto autem repellendus ipsam
        // dolorem fugit sint alias distinctio, fuga quisquam atque dolorum. Minus illo quaerat accusantium odio perferendis.`;

        // console.log(str.toLowerCase());

        // let gato = "gato";
        // let outroGato = "GATO";

        // let cat1 = gato.toLowerCase();
        // let cat2 = outroGato.toLowerCase();

        // console.log(cat1.localeCompare(cat2));


// toUpperCase( ) Faz a conversão de uma string inteira para caracteres maiúsculos (caixa alta)

        // let str = `Lorem ipsum dolor SIT amet consectetur adipisicing elit. Cum reprehenderit nulla architecto autem repellendus ipsam
        // dolorem fugit sint alias distinctio, fuga quisquam atque dolorum. Minus illo quaerat accusantium odio perferendis.`;

        // console.log(str.toUpperCase());


// trim( ) Faz a remoção de espaços antes e dopois da string especificada

        // let str1 = "       Lorem ipsum dolor SIT amet consectetur adipisicing elit. Cum reprehenderit nulla architecto autem ";

        // console.log(str1.trim());

        // let str2 = `      Lorem ipsum dolor SIT amet consectetur adipisicing elit. Cum reprehenderit nulla architecto autem repellendus 
        // ipsam dolorem fugit sint alias distinctio, fuga quisquam atque dolorum. Minus illo quaerat accusantium odio perferendis.`;

        // console.log(str2);


// NaN
// Quando um string for passada par Number( ), parseInt ou parseFloat
// não consegue efetuar a converção será retornando NaN (Not as Number)
// isNaN( ) verifica se é numerico ou não 

        // let num = Number(`ola`)
        // let num = `1`;

        // console.log(isNaN(`8i`));

        // if(!isNaN(num)){
        //     console.log(`Isto é um número`)
        // }else{
        //     console.log(`Isto não é um número`)
        // }


// toFixed( ) A função analisa um valor flutuante e retorna uma STRING conforme o parâmetro de casas

        // let valor = 2.456;

        // console.log(valor.toFixed(1));


// toLocaleString( ) O método ira retornar uma string com uma representação da moeda como no parâmetro currency
// toLocaleString(`pt-BR`,{style: `currency`, currency: `BRL`})

        let valor = 2.456;

        console.log(valor.toFixed(1));

        console.log(valor.toLocaleString(`pt-BR`,{style: `currency`, currency: `BRL`}))