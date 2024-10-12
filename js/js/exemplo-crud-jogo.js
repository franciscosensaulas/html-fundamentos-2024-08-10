let jogos = [];

function cadastrar() {
    let campoNome = document.querySelector("#campo-nome");
    let nome = campoNome.value;
    // Adicionar o nome na lista de nomes
    jogos.push(nome);

    let itemLista = document.createElement("li");
    itemLista.innerText = nome;

    let lista = document.querySelector("ul");
    lista.appendChild(itemLista);

    campoNome.value = "";
    campoNome.focus();
}

function exportar(event) {
    let dados = [];

    jogos.forEach(jogo => {
        dados.push({Nome: jogo});
    });

    let worksheet = XLSX.utils.json_to_sheet(dados);

    let workbook = {
        Sheets: { 'Jogos': worksheet },
        SheetNames: ['Jogos']
    }

    XLSX.writeFile(workbook, 'jogos.xlsx');
}

function importar(event) {
    let arquivo = event.target.files[0];

    if (!arquivo) {
        alert("Por favor, selecione um arquivo");
        return;
    }

    // Criar uma variável que permitirá ler o arquivo
    let reader = new FileReader();
    // Função que será executada quando ocorre a leitura do arquivo
    reader.onload = function (e) {
        // e.target.result: contém o conteúdo do arquivo que foi lido
        // Uint8Array: é um array tipo em JS que é utilizado para representar matriz de 8 bits sem sinal.
        // É utilizado para manipular dados binários de forma eficiente 
        let dados = new Uint8Array(e.target.result);
        // Fazer a leitura dos dados como workbook
        let workbook = XLSX.read(dados, { type: 'array' });

        // Acessar a primeira planilha
        let primeiraPlanilha = workbook.Sheets[workbook.SheetNames[0]];

        let dadosJSON = XLSX.utils.sheet_to_json(primeiraPlanilha, { header: 1});
        exibirDadosImportados(dadosJSON);
    };

    // Função que seré executada quando ocorre erro na leitura do arquivo
    reader.onerror = function (e) {
        console.error(e);
        alert("Ocorreu um erro ao ler o arquivo");
    };

    // Iniciar processo de leitura do arquivo
    reader.readAsArrayBuffer(arquivo);
}

function exibirDadosImportados(dadosJSON){
    let lista = document.querySelector("ul");

    dadosJSON.forEach(function(linha, index){
        if (index != 0){
            var celula = linha[0];
            let itemLista = document.createElement("li");
            itemLista.innerText = celula;
            lista.appendChild(itemLista);
        }
    })
}