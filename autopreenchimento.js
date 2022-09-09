// selecionando o conteudo da lista de nomes
const listaNomes = document.querySelectorAll("#lista-nomes li");
console.log(listaNomes);

// sorteando numero entre 0 e 19
const indiceLista = Math.floor(Math.random() * 20);

// acessando o nome
const nomeEscolhido = listaNomes[indiceLista].textContent.toLowerCase();

// criando a string de email
const email = `${nomeEscolhido}@gmail.com`;

// inserindo o email no campo
document.querySelector("#form-preenchimento input").value = email;

// criando a senha
let senha = "";
let i = 19;
while (i >= 0) {
  senha = senha + listaNomes[i].textContent.toLowerCase()[0];
  i--;
}

// adicionando a senha no campo de senha
document.querySelector('#form-preenchimento [type="text"]').value = senha;
