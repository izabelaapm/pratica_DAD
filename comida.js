// sorteando um numero
const numAleatorio = Math.floor(Math.random() * 5);

switch (numAleatorio) {
  case 0:
    document.querySelector(
      "#comida + div"
    ).innerHTML = `<p style = "text-align:center; font-size: 5rem;">🍟</p>`;
    break;
  case 1:
    document.querySelector(
      "#comida + div"
    ).innerHTML = `<p style = "text-align:center; font-size: 5rem;">🍔</p>`;
    break;
  case 2:
    document.querySelector(
      "#comida + div"
    ).innerHTML = `<p style = "text-align:center; font-size: 5rem;">🧀</p>`;
    break;
  case 3:
    document.querySelector(
      "#comida + div"
    ).innerHTML = `<p style = "text-align:center; font-size: 5rem;">🥚</p>`;
    break;
  case 4:
    document.querySelector(
      "#comida + div"
    ).innerHTML = `<p style = "text-align:center; font-size: 5rem;">🍞</p>`;
    break;
}
