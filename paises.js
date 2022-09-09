// capturando os países
let paises = document.querySelectorAll("#t2 td");

// variavel para guardar o indice do paise de maior nome
let maiorNome = 0;
let menorNome = 0;

// percorrendo o vetor de paises
for (let i = 0; i < paises.length; i++) {
  // encontrando o pais com maior nome
  if (paises[i].textContent.length > paises[maiorNome].textContent.length) {
    maiorNome = i;
  }

  // encontrando o pais com menor nome
  if (paises[i].textContent.length < paises[menorNome].textContent.length) {
    menorNome = i;
  }
}

// adicionando o pais ganhador na div azul
document.getElementById("paisMaior").textContent =
  paises[maiorNome].textContent;

// riscando o nome do pais perdedor
paises[
  menorNome
].innerHTML = `<del style = 'color: red'>${paises[menorNome].textContent}</del>`;
