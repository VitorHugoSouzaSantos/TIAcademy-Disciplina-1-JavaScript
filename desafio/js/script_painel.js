// import { clientes } from "./clientes.js";
// import { produtos } from "./produtos";
// console.log(clientes)
// // console.log(produtos)
// Não foi possivel fazer a importação dos dados, não descobri o erro.


window.onload = function () {
    let data = new Date();
    let dataFormatada = data.toLocaleString('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit' })
    console.log(dataFormatada);

    // Abrir e fechar clientes
    const btnAbrirFecharClientes = document.querySelector('#btnAbrirFecharClientes')
    const janelaClientes = document.querySelector('#ClientesFieldset')
    const btnFecharClientes = document.querySelector('#btnFecharClientes')

    btnFecharClientes.addEventListener('click', function () {
        janelaClientes.classList.add('displayNone')
    })

    btnAbrirFecharClientes.addEventListener('click', function () {
        janelaClientes.classList.remove('displayNone')
        janelaProdutos.classList.add('displayNone')
        janelaPedidos.classList.add('displayNone')
    })
    // -------------------

    // Começo chamar clientes

    let listaClientes = [
        {
            "codCliente": 1,
            "nomeCliente": "Donald Blake",
            "dataCadCli": "12/10/2010",
        },

        {
            "codCliente": 2,
            "nomeCliente": "Bruce Wayne",
            "dataCadCli": "01/08/2017",
        },
        {
            "codCliente": 3,
            "nomeCliente": "Diana",
            "dataCadCli": "02/05/2020",
        },
        {
            "codCliente": 4,
            "nomeCliente": "Helena",
            "dataCadCli": "01/05/2020",
        },
    ]
    const codCliente = document.querySelector('#codCliente')
    const nomeCliente = document.querySelector('#nomeCliente')
    const dataCadCli = document.querySelector('#dataCadCli')

    const backCliente = document.querySelector('#voltarCliente')
    const nextCliente = document.querySelector('#proximoCliente')

    const newCliente = document.querySelector('#novoCliente')
    const saveCliente = document.querySelector('#salvarCliente')

    let keyCliente = 0;

    /*  function dadosClientes(key)  {
 */
    codCliente.value = listaClientes[keyCliente]["codCliente"]
    nomeCliente.value = listaClientes[keyCliente]["nomeCliente"]
    dataCadCli.value = listaClientes[keyCliente]["dataCadCli"]
    /* } */

    nextCliente.addEventListener("click", function () {
        if (keyCliente > 0) {
            keyCliente--;
            dadosClientes(keyCliente);
        } else {
            alert("Último cliente registrado")
        }
    })

    backCliente.addEventListener("click", function () {
        if (keyCliente < listaClientes.length - 1) {
            keyCliente++;
            dadosClientes(keyCliente);
        } else {
            alert("Primeiro cliente registrado")
        }
    })

    newCliente.addEventListener("click", function () {
        codCliente.value = dadosClientes.length + 1;
        nomeCliente.value = "";
        dataCadCli.value = dataFormatada;
    })

    saveCliente.addEventListener("click", function () {

        if (!(codCliente.value >= 0 && codCliente.value <= dadosClientes.length)) {

            if (nomeCliente.value == "") {
                alert("Você não inseriu um nome para o cliente!");
            } else {
                dadosClientes.push({
                    "codCliente": codCliente.value,
                    "nomeCliente": nomeCliente.value,
                    "dataCadCli": dataCadCli.value,
                });
                alert("Dados cadastrados com sucesso");
                keyCliente = 0;
                dadosClientes(keyCliente);
            }

        } else {
            alert("Clique em novo para criar um registro");
        }
    })


    // Abrir e fechar Produtos
    const btnAbrirFecharProdutos = document.querySelector('#btnAbrirFecharProdutos')
    const janelaProdutos = document.querySelector('#ProdutosFieldset')
    const btnFecharProdutos = document.querySelector('#btnFecharProdutos')

    btnFecharProdutos.addEventListener('click', function () {
        janelaProdutos.classList.add('displayNone')
    })

    btnAbrirFecharProdutos.addEventListener('click', function () {
        janelaClientes.classList.add('displayNone')
        janelaProdutos.classList.remove('displayNone')
        janelaPedidos.classList.add('displayNone')
    })
    // -------------------

    let produtos = [
        {
            "codProduto": 1,
            "descProduto": "Caneta esferográfica",
            "precoProduto": 0.80,
            "qtdEstoqueProd": 10,
        },

        {
            "codProduto": 2,
            "descProduto": "Cola Print",
            "precoProduto": 3.65,
            "qtdEstoqueProd": 50,
        },
        {
            "codProduto": 3,
            "descProduto": "Borracha",
            "precoProduto": 2.50,
            "qtdEstoqueProd": 50,
        },

    ]

    codCliente.value = listaClientes[keyCliente]["codCliente"]
    nomeCliente.value = listaClientes[keyCliente]["nomeCliente"]
    dataCadCli.value = listaClientes[keyCliente]["dataCadCli"]

    let letProduto = 0

    codProduto.value = produtos[letProduto]["codProduto"]
    descProduto.value = produtos[letProduto]["descProduto"]
    precoProduto.value = produtos[letProduto]["precoProduto"]
    qtdEstoqueProd.value = produtos[letProduto]["qtdEstoqueProd"]

    // "codProduto"   : 1,
    // "descProduto"    : "Caneta esferográfica",
    // "precoProduto" : 0.80,  
    // "qtdEstoqueProd"

    // btnAbrirFecharClientes.addEventListener('click', (botao) => {
    //     switch (botao.target.id) {
    //         case 'voltarCliente':
    //         if(letProduto==0){

    //         }

    //             break;
    //         case 'proximoCliente':

    //             break;
    //         case 'novoCliente':

    //             break;
    //         case salvarCliente:

    //             break;

    //         default:
    //             break;
    //     }
    // })
















    // Abrir e fechar Pedidos
    const btnAbrirFecharPedidos = document.querySelector('#btnAbrirFecharPedidos')
    const janelaPedidos = document.querySelector('#PedidosFieldset')
    const btnFecharPedidos = document.querySelector('#btnFecharPedidos')

    btnFecharPedidos.addEventListener('click', function () {
        janelaPedidos.classList.add('displayNone')
    })

    btnAbrirFecharPedidos.addEventListener('click', function () {
        janelaClientes.classList.add('displayNone')
        janelaProdutos.classList.add('displayNone')
        janelaPedidos.classList.remove('displayNone')
    })
    // -------------------




}