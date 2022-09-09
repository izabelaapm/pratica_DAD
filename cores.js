// gerando uma cor hex aleatoria
const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
console.log(randomR, randomG, randomB);

// colocando os elementos nas listas
document.getElementById(
  "lista-cores"
).innerHTML = `<li style = 'background-image: linear-gradient(#fff,rgb(${randomR},${randomG},${randomB})); width:fit-content;font-size: 2rem; margin:0 auto; padding: 1rem 2rem; border: solid black 2px; border-radius:10px;'>rgb(${randomR},${randomG},${randomB})</li>`;
