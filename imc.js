 
//Calculadora de IMC

function imc() {
  peso = prompt("Digite seu peso");
  altura = prompt("Digite sua altura");
  const imc = peso / altura ** 2;
  return imc;
}
console.log(imc());
