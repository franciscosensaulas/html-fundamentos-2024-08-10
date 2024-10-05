1 - Criar o arquivo exercicio-escola.html com os seguintes campos:
- aluno
- nota 1
- nota 2
- nota 3
- percentual de frenquencia
Criar os seguintes botões:
- Calcular média: deve calcular a média das notas
- Obter Status de Aprovação: deve calcular a média e de acordo com os critérios abaixo informar o status:
  - Média inferior a 7 => reprovado por nota
  - Média superior a 6.99 e percentual de frequencia inferior a 75% => reprovado por frequencia
  - Media superior a 6.99 e percentual de frequencia superior a 74% => aprovado
let nota1 = parseFloat(campoNota1.value);

2 - Criar o arquivo exercicio-folha-pagamento.html com os seguintes campos:
- nome
- cpf
- quantidade horas trabalhadas
- valor hora
- Desconto Unimed
- Desconto Gympass
- Auxilio Eduacação
- Auxilio Home Office
- Auxilio Vale Transporte
- Auxilio Vale Alimentação
- Auxilio Creche
- Auxilio Idiomas
Criar os seguintes botões:
- Calcular Salário Bruto: Seria o valor hora multiplicado por quantidade de horas
- Calcular Salário Líquido: 
https://dontpad.com/franciscosensaulas/js


function somar(){
  let campoNumero1 = document.querySelector("input#numero1");
  let campoNumero2 = document.querySelector("input#numero2");
  let numero1 = campoNumero1.value;
  let numero2 = campoNumero2.value;
  let soma = numero1 + numero2;
  return soma;
}


function outraFuncao(){
  let somaNumeros = somar();
}