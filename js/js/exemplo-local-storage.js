// LocalStorage
// Armazenar item no LocalStorage
// localStorage.setItem("nome", "Curso JavaScript");
// Obter o valor armazenado no LocalStorage
// let nomeCurso = localStorage.getItem("nome");
// Remover o valor armazenado no LocalStorage
// localStorage.removeItem("nome");

// Limpar todo o LocalStorage
// localStorage.clear();

let produtos = [];
let idProximoProduto = 1;
let idParaEditar = null;

function salvar() {
    // let nome = document.querySelector("#nome").value;
    let campoNome = document.getElementById("nome");
    let campoQuantidade = document.getElementById("quantidade");
    let campoPrecoUnitario = document.getElementById("preco-unitario");
    let nomeProduto = campoNome.value;
    let quantidadeProduto = campoQuantidade.value;
    let precoUnitarioProduto = campoPrecoUnitario.value;

    if (idParaEditar == null) {
        let produto = {
            nome: nomeProduto,
            precoUnitario: precoUnitarioProduto,
            quantidade: quantidadeProduto,
            id: idProximoProduto++,
        }
        produtos.push(produto);

        adicionarItemTabela(produto);
    } else {
        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            if (produto.id == idParaEditar){
                produto.nome = nomeProduto;
                produto.quantidade = quantidadeProduto;
                produto.precoUnitario = precoUnitarioProduto;
                alterarItemTabela(produto, i);
                idParaEditar = null;
                break;
            }
        }
    }

    salvarProdutosLocalStorage();

    campoNome.value = "";
    campoQuantidade.value = "";
    campoPrecoUnitario.value = "";
    campoNome.focus();
}

function adicionarItemTabela(produto) {
    let linha = document.createElement("tr");

    let colunaId = document.createElement("td");
    colunaId.innerText = produto.id;
    linha.appendChild(colunaId);

    let colunaNome = document.createElement("td");
    colunaNome.innerText = produto.nome;
    linha.appendChild(colunaNome);

    let colunaQuantidade = document.createElement("td");
    colunaQuantidade.innerText = produto.quantidade;
    linha.appendChild(colunaQuantidade);

    let colunaPrecoUnitario = document.createElement("td");
    colunaPrecoUnitario.innerText = produto.precoUnitario;
    linha.appendChild(colunaPrecoUnitario);

    let colunaAcao = document.createElement("td");

    let botaoEditar = document.createElement("button");
    botaoEditar.innerText = "Editar";
    botaoEditar.setAttribute("data-id", produto.id);
    botaoEditar.onclick = editarPopularCampos;
    botaoEditar.classList.add("btn", "btn-primary", "me-2");

    let botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("data-id", produto.id);
    botaoApagar.classList.add("btn", "btn-danger");
    botaoApagar.onclick = apagar;

    colunaAcao.appendChild(botaoEditar);
    colunaAcao.appendChild(botaoApagar);
    linha.appendChild(colunaAcao);

    let tabela = document.getElementById("lista-produtos");
    let tbody = tabela.getElementsByTagName("tbody")[0];
    tbody.appendChild(linha);
}

function salvarProdutosLocalStorage() {
    let produtosJson = JSON.stringify(produtos);
    localStorage.setItem("listaProdutos", produtosJson);
}

function obterProdutosLocalStorage() {
    let produtosJson = localStorage.getItem("listaProdutos");
    if (produtosJson === null)
        return;

    produtos = JSON.parse(produtosJson);

    let ultimoIdGerado = 0;
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        adicionarItemTabela(produto);

        if (produto.id > ultimoIdGerado) {
            ultimoIdGerado = produto.id;
        }
    }

    idProximoProduto = ++ultimoIdGerado;
}

function apagar(evento) {
    let id = evento.target.getAttribute("data-id");
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        if (produto.id == id) {
            apagarLinhaTabela(i);
            produtos.splice(i, 1);
            salvarProdutosLocalStorage();
            break;
            // Apagar o produto efetivamente da lista de produtos
            // Atualizar o localStorage com a lista de produtos sem o produto que foi removido
        }
    }
}

function apagarLinhaTabela(indice) {
    let tabela = document.getElementById("lista-produtos");
    let tbody = tabela.getElementsByTagName("tbody")[0];
    let linha = tbody.childNodes[indice + 1];
    tbody.removeChild(linha);
}

function editarPopularCampos(evento) {
    let id = evento.target.getAttribute("data-id");
    idParaEditar = id;
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        if (produto.id == id) {
            let campoNome = document.getElementById("nome");
            campoNome.value = produto.nome;
            let campoQuantidade = document.getElementById("quantidade");
            campoQuantidade.value = produto.quantidade;
            let campoPrecoUnitario = document.getElementById("preco-unitario");
            campoPrecoUnitario.value = produto.precoUnitario;
            break;
        }
    }
}

function alterarItemTabela(produto, indice){
    let tabela = document.getElementById("lista-produtos");
    let tbody = tabela.getElementsByTagName("tbody")[0];
    let linha = tbody.childNodes[indice + 1];
    let colunaNome = linha.childNodes[1];
    colunaNome.innerText = produto.nome;

    let colunaQuantidade = linha.childNodes[2];
    colunaQuantidade.innerText = produto.quantidade;

    let colunaPrecoUnitario = linha.childNodes[3];
    colunaPrecoUnitario.innerText = produto.precoUnitario;
}

obterProdutosLocalStorage();

// Criar um CRUD para colaboradores
// Com os seguintes campos nome, valor hora e quantidade
