function calcularDataNascimento() {
    // Buscar o input que contém o id 'campo-nome'
    let campoNome = document.querySelector("input#campo-nome");
    let campoIdade = document.querySelector("input#campo-idade");
    // Pegar o que o usuário digitou no campo de nome
    let nome = campoNome.value;
    // Pegar o que o usuário digitou no campo de idade
    let idade = campoIdade.value;

    // Obter o ano do momento atual
    let anoAtual = new Date().getFullYear();
    // Calcular a data de nascimento
    let anoNascimento = anoAtual - idade;

    alert(nome + " nasceu em " + anoNascimento);
}

function calcularImc() {
    let campoNome = document.querySelector("input#campo-nome");
    let campoAltura = document.querySelector("input#campo-altura");
    let campoPeso = document.querySelector("input#campo-peso");

    let nome = campoNome.value;
    let altura = campoAltura.value;
    let peso = campoPeso.value;

    let imc = peso / (altura * altura);

    alert(nome + " contém o IMC de " + imc);
}

function apresentarGeracao() {
    let campoIdade = document.querySelector("input#campo-idade");
    let idade = campoIdade.value;
    let anoNascimento = 2024 - idade;

    if (anoNascimento >= 1928 && anoNascimento <= 1945) {
        alert("Geração Silenciosa");
    } else if (anoNascimento >= 1946 && anoNascimento <= 1964) {
        alert("Baby Boomers");
    } else if (anoNascimento >= 1965 && anoNascimento <= 1980) {
        alert("Geração X");
    } else if (anoNascimento >= 1981 && anoNascimento <= 1996) {
        alert("Geração Y (Millenials)")
    } else if (anoNascimento >= 1997 && anoNascimento <= 2012) {
        alert("Geração Z");
    } else {
        alert("Geração alpha");
    }
}