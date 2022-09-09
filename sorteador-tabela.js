// sorteando valores
valoresTabela = document.querySelectorAll("#t1 td");
const num1 = (Math.random() * 10000).toFixed(2);
const num2 = (Math.random() * 10000).toFixed(2);
const num3 = (Math.random() * 10000).toFixed(2);

valoresTabela[0].textContent = num1;
valoresTabela[1].textContent = num2;
valoresTabela[2].textContent = num3;
