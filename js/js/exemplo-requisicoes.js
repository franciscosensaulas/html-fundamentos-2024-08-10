let botaoCadastrar = document.getElementById("btn-cadastrar");
botaoCadastrar.addEventListener("click", cadastrar);

let botaoConsultar = document.getElementById("btn-consultar");
botaoConsultar.addEventListener("click", carregarColaboradores);

let idEditar = null;


function cadastrar() {
    let campoNome = document.getElementById("campo-nome");
    let nomeColaborador = campoNome.value;
    if (nomeColaborador.length < 3) {
        alert("Nome deve conter no mínimo 3 caracteres");
        return;
    }

    if(idEditar === null)
        criarColaborador(nomeColaborador);
    else
        alterarColaborador(nomeColaborador);

    campoNome.value = "";
}

function alterarColaborador(nomeColaborador){
    let colaborador = {
        nome: nomeColaborador
    }
    let dadosQueSeraEnviadoJSON = JSON.stringify(colaborador);
    let configuracaoRequisicao = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: dadosQueSeraEnviadoJSON
    }
    let url = `http://localhost:3000/colaboradores/${idEditar}`;
    fetch(url, configuracaoRequisicao)
        .then(resposta => {
            if (resposta.ok){
                alert("Colaborador alterado com sucesso")
                botaoCadastrar.innerText = "Cadastrar";
                idEditar = null;
                carregarColaboradores();
            }else{
                alert("Não foi possível alterar o colaborador");
            }
        })
        .catch(erro => {
            console.log(erro);
            alert("Ocorreu um erro ao tentar alterar os dados do colaborador");
        })
}

function criarColaborador(nomeColaborador){
    let colaborador = {
        nome: nomeColaborador
    }
    let dadoQueSeraEnviadoJSON = JSON.stringify(colaborador);
    let configuracaoRequisicao = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: dadoQueSeraEnviadoJSON
    }

    fetch('http://localhost:3000/colaboradores', configuracaoRequisicao)
        .then(requisicao => {
            if (requisicao.ok) {
                alert("Colaborador cadastrado com sucesso");
                carregarColaboradores();
            } else {
                alert("Não foi possível cadastrar o colaborador");
            }
        })
        .catch(erro => {
            alert("Ocorreu um erro ao tentar cadastrar");
        })
}

function carregarColaboradores() {
    let configuracaoRequisicao = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:3000/colaboradores", configuracaoRequisicao)
        .then(dados => dados.json())
        .then(colaboradores => {
            console.log(colaboradores);
            popularColaboradores(colaboradores);
        })
        .catch(error => {
            console.log(error);
            alert("Ocorreu um erro ao buscar os colaboradores")
        })
}

function popularColaboradores(colaboradores) {
    let tabela = document.getElementById("tabela-colaboradores");
    let tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";

    let campoPesquisa = document.getElementById("campo-pesquisa");
    let pesquisa = campoPesquisa.value.toLowerCase();

    for (let i = 0; i < colaboradores.length; i++) {
        let colaborador = colaboradores[i];

        if (colaborador.nome.toLowerCase().includes(pesquisa))
            criarLinhaTabela(colaborador);
    }
}

function criarLinhaTabela(colaborador) {
    let tabela = document.getElementById("tabela-colaboradores");
    let tbody = tabela.querySelector("tbody");

    let linha = document.createElement("tr");
    let colunaNome = document.createElement("td");
    colunaNome.innerText = colaborador.nome;

    let colunaId = document.createElement("td");
    colunaId.innerText = colaborador.id;

    let colunaAcao = document.createElement("td");

    let botaoEditar = document.createElement("button");
    botaoEditar.innerText = "Editar";
    botaoEditar.setAttribute("data-id", colaborador.id);
    botaoEditar.addEventListener("click", editar);

    let botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("data-id", colaborador.id);
    botaoApagar.addEventListener("click", apagar);

    colunaAcao.appendChild(botaoEditar);
    colunaAcao.appendChild(botaoApagar);

    linha.appendChild(colunaId);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaAcao);
    tbody.appendChild(linha);
}

function apagar(evento) {
    let botao = evento.target;
    let id = botao.getAttribute("data-id");
    let configuracaoRequisicao = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    let url = `http://localhost:3000/colaboradores/${id}`;
    fetch(url, configuracaoRequisicao)
        .then(requisicao => {
            if (requisicao.ok) {
                alert("Colaborador apagado com sucesso")
                carregarColaboradores();
            }
            else
                alert("Não foi possível apagar o colaborador")
        }
        )
        .catch(erro => {
            console.log(erro);
            alert("Não possível apagar o colaborador");
        })
}

function editar(evento) {
    let botaoEditar = evento.target;
    let id = botaoEditar.getAttribute("data-id");
    let configuracaoRequisicao = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url = `http://localhost:3000/colaboradores/${id}`;
    fetch(url, configuracaoRequisicao)
        .then(requisicao => {
            if (requisicao.ok)
                return requisicao.json();
            alert("Não foi possível carregar os dados")
        })
        .then(colaborador => {
            preencherCamposParaEditar(colaborador);
        })
        .catch(erro => {
            console.error(erro);
            alert("Não foi possível buscar os dados do colaborador");
        })
}

function preencherCamposParaEditar(colaborador){
    let campoNome = document.getElementById("campo-nome");
    console.log(campoNome);
    campoNome.value = colaborador.nome;

    idEditar = colaborador.id;

    botaoCadastrar.innerText = "Editar";
}


carregarColaboradores();

