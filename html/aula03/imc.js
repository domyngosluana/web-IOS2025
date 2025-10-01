let peso = 70; // em kg
let altura = 1.75; // em metros

let imc = peso / (altura * altura);

let classificacao
let IMC

if (imc < 18.5) {
    classificacao = 'abaixo do peso';
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = 'com peso normal';
} else if (imc >= 25 && imc < 29.9) {
    classificacao = 'com sobrepeso';
} else {
    classificacao = 'com obesidade';
}


console.log(`Seu IMC é ${imc.toFixed(2)}. Você está ${classificacao}.`);
prompt("Insira sua altura")

prompt("Insira seu peso")

prompt("Classificacao do seu IMC" + " abaixo do peso \n" + "com peso normal \n" + "com sobrepeso" + "com obesidade")


