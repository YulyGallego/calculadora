const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const signo = document.getElementById("signo")
// const btnsumar = document.getElementById("sumar");
// const btnrestar = document.getElementById("restar");
// const btnmultiplicar = document.getElementById("multiplicar");
// const btndividir = document.getElementById("dividir");
// const btnmodulo = document.getElementById("modulo");
const resultado = document.getElementById("resultado");

// btnsumar.addEventListener("click",suma);
// btnrestar.addEventListener("click", resta);
// btnmultiplicar.addEventListener("click", multiplicacion);
// btndividir.addEventListener("click", division);
// btnmodulo.addEventListener("click", modulo);

signo.addEventListener("keyup", operaciones);


function operaciones(){
if (signo.value === "+"){
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);
  let total1 = (numero1 + numero2);
  resultado.textContent = total1;
}else if (signo.value === "-"){
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);
  let total2 = (numero1 - numero2);
  resultado.textContent = total2;
} else if (signo.value === "*") {
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);
  let total3 = (numero1 * numero2);
  resultado.textContent = total3;
} else if (signo.value === "/") {
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);
  let total4 = (numero1 / numero2);
  resultado.textContent = total4;
} else if (signo.value === "%") {
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);
  let total5 = (numero1 % numero2);
  resultado.textContent = total5;
} else if (resultado.textContent == "Infinity"){
  resultado.textContent = "no es posible multiplicar por 0"
} else if (signo.value !== "+" || signo.value !== "-" || signo.value !== "*" || signo.value !== "/" || signo.value !== "%"){
  resultado.textContent = "no es posible realizar la operacion con un caracter diferente a los propuestos"
}

}



// function operaciones() {
//   let numero1 = Number(num1.value);
//   let numero2 = Number(num2.value);
//   let total1 = (numero1 + numero2);
//   let total2 = (numero1 - numero2);
//   let total3 = (numero1 * numero2);
//   let total4 = (numero1 / numero2);
//   let total5 = (numero1 % numero2);

//   let signos = signo.value;
//   if (signos === "+") {
//     resultado.textContent = total1;
//   } else if (signos === "-") {
//     resultado.textContent = total2;
//   } else if (signos === "*") {
//     resultado.textContent = total3;
//   } else if (signos === "/") {
//     resultado.textContent = total4;
//   } else if (signos === "%") {
//     resultado.textContent = total5;
//   }
// }

// function suma(){
// let numero1 = Number(num1.value);
// let numero2 = Number(num2.value);
// let total = (numero1 + numero2);
// resultado.textContent = total;
// }

// function resta() {
//   let numero1 = num1.value;
//   let numero2 = num2.value;
//   let total = (numero1 - numero2);
//   resultado.textContent = total;
// }

// function multiplicacion() {
//   let numero1 = num1.value;
//   let numero2 = num2.value;
//   let total = (numero1 * numero2);
//   resultado.textContent = total;
// }

// function division() {
//   let numero1 = num1.value;
//   let numero2 = num2.value;
//   let total = (numero1 / numero2);
//   resultado.textContent = total;

//   if (num2 === 0){
//     resultado.textContent = alert("no se puede dividir por 0")
//   }else{
//     resultado.textContent = total;
//   }
// }

// function modulo() {
//   let numero1 = num1.value;
//   let numero2 = num2.value;
//   let total = (numero1 % numero2);
//   resultado.textContent = total;
// }



