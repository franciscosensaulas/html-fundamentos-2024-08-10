function criarTitulo() {
    // Criar uma tag título
    let tagH1 = document.createElement("h1");
    // Definir o texto que a tag h1 exibirá
    tagH1.innerText = "Olá mundo";
    // Obter o body do html
    let pagina = document.querySelector("body")
    // Adicionar a tag h1 na página
    pagina.appendChild(tagH1);

    let botaoCriarTitulo = document.querySelector("#botao-criar-titulo");
    let botaoAlterarTitulo = document.querySelector("#botao-alterar-titulo");
    let botaoApagarTitulo = document.querySelector("#botao-apagar-titulo");

    // Ocultar o botão de criar título, adicionando a classe ocultar-elemento
    botaoCriarTitulo.classList.add("ocultar-elemento");
    // Apresentar o botão de alterar, removendo a classe ocultar-elemento 
    botaoAlterarTitulo.classList.remove("ocultar-elemento");
    // Apresentar o botão de apagar, removendo a classe ocultar-elemento 
    botaoApagarTitulo.classList.remove("ocultar-elemento");

}

function alterarTitulo() {
    let tagH1 = document.querySelector("h1");
    tagH1.innerText = "Lista de filmes"
}

function apagarTitulo() {
    // Obter a tag h1
    let tituloH1 = document.querySelector("h1");
    // Obter a tag body(conteúdo da página)
    let pagina = document.querySelector("body");
    // Apagar a tag h1 da página
    pagina.removeChild(tituloH1);

    let botaoAlterarTitulo = document.querySelector("#botao-alterar-titulo");
    let botaoApagarTitulo = document.querySelector("#botao-apagar-titulo");
    // Ocultar botões
    botaoAlterarTitulo.classList.add("ocultar-elemento");
    botaoApagarTitulo.classList.add("ocultar-elemento");

    let botaoCriarTitulo = document.querySelector("#botao-criar-titulo");
    // Apresentar botão
    botaoCriarTitulo.classList.remove("ocultar-elemento");
}

function loopInfinito() {
    let funcoes = [criarTitulo, alterarTitulo, apagarTitulo];
    let indice = 0;

    setInterval(function () {
        let funcao = funcoes[indice];
        funcao();
        indice += 1;

        if (indice > 2) {
            indice = 0;
        }
    }, 1000);
}

// loopInfinito();
