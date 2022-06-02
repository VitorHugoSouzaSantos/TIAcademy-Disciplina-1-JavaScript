// import { users } from "";

window.onload = function () {
    const senha = document.querySelector('#senha');
    const btnEntrar = document.querySelector('#btnEntrar')
    const usuario = document.querySelector("#usuario")
    const url = "./usuarioClienteProduto/usuario.json";


    async function fetchDados() {
        const dadosFetch = await fetch(url);
        const getFetch = await dadosFetch.json();
        if (verificar(getFetch.users)) {
            location.href = "./painel.html"
        } else {
            alert('Usuário ou senha incorreto(s).')
        }
    }
    function verificar(getFetch) {
        for (let dadosUsuarios of getFetch) {
            if (dadosUsuarios.user === usuario.value && dadosUsuarios.pws === senha.value) {
                return true
            }
        }
    }
    btnEntrar.addEventListener('click', function () {
        fetchDados();
        console.log(btnEntrar)
        document.getElementById('usuario').value
        document.getElementById('senha').value
    })


}