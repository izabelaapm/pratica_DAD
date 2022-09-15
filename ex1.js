

const num = document.querySelectorAll('td');
console.log(num);

num[0].innerText = Math.random();

for (let i = 0; i < num.length; i++) {
    console.log(num[i].textContent = Math.random() * 10);
}

if (num1 > num2 && num1 > num3) {
    maior = num1
} else if (num1 < num2 && num1 > num3) {
    meio = num1
} else if (num1 > num2 && num1 < num3) {
    meio = num1
} else {
    menor = num1
}


if (num2 > num1 && num2 > num3) {
    maior = num2
 } else if (num2 < num1 && num2 > num3) {
        meio = num2
}  else if (num2 > num1 && num2 < num3) {
        meio = num2
} else {
    menor = num2
}

if (num3 > num1 && num3 > num2) {
    maior = num3
 } else if (num3 < num1 && num3 > num2) {
        meio = num3
    }  else if (num3 > num1 && num3 < num2) {
        meio = num3
} else {
    menor = num3
}








