/****************************************/
// ordenando os valores da tabela
/****************************************/
// capturando os valores
let valoresTabela = document.querySelectorAll("#t1 td");
console.log(valoresTabela);

// guardando os valores (sem vetor)
let v1, v2, v3;

v1 = Number(valoresTabela[0].textContent);
v2 = Number(valoresTabela[1].textContent);
v3 = Number(valoresTabela[2].textContent);
console.log(`Este é o valor de v1: ${v1}`);
console.log(`Este é o valor de v2: ${v2}`);
console.log(`Este é o valor de v3: ${v3}`);

if (v1 > v2 && v1 > v3) {
  valoresTabela[0].textContent = v1;
  if (v2 > v3) {
    valoresTabela[1].textContent = v2;
    valoresTabela[2].textContent = v3;
  } else {
    valoresTabela[1].textContent = v3;
    valoresTabela[2].textContent = v2;
  }
} else if (v2 > v1 && v2 > v3) {
  valoresTabela[0].textContent = v2;
  if (v1 > v3) {
    valoresTabela[1].textContent = v1;
    valoresTabela[2].textContent = v3;
  } else {
    valoresTabela[1].textContent = v3;
    valoresTabela[2].textContent = v1;
  }
} else {
  valoresTabela[0].textContent = v3;
  if (v2 > v1) {
    valoresTabela[1].textContent = v2;
    valoresTabela[2].textContent = v1;
  } else {
    valoresTabela[1].textContent = v1;
    valoresTabela[2].textContent = v2;
  }
}

/****************************************/
