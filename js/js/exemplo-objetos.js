// Vetores
// let nomes = ["Curso JavaScript", "Curso Angular", "Curso Lógica I"]
// let cargaHoraria = [20, 20, 28]

// Objeto do curso, que contém o nome e carga horária
let cursoJavaScript = {
    nome: "Curso JavaScript",
    cargaHoraria: 20,
}
let cursoAngular = {
    nome: "Curso Angular",
    cargaHoraria: 20
}
let cursoLogicaI = {
    nome: "Curso Logica I",
    cargaHoraria: 28
}
// Adicionar a data do curso
cursoJavaScript.data = new Date(2024, 10, 5);
cursoAngular.data = new Date(2024, 10, 27);
// Alterando o valor do nome do objeto do curso de lógica
cursoLogicaI.nome = "Curso Lógica I";
// Definindo a data do curso de Angular como não existente
cursoAngular.data = null;
// Removendo a propriedade data do cursoAngular
delete cursoAngular.data;
// Criando uma lista de cursos vazia
let cursos = [];
// Adicionando os cursos na lista de cursos
cursos.push(cursoJavaScript);
cursos.push(cursoAngular);
cursos.push(cursoLogicaI);

console.log(cursoJavaScript);
console.log(cursoAngular);
console.log(cursoLogicaI);
console.log(cursos)