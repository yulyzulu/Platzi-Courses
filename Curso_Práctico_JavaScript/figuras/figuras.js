// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Código del triángulo

console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo

console.group("Círculos");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// Pi
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
console.groupEnd();


function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  console.log(value)

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("TrianguloLado1");
  const lado2 = document.getElementById("TrianguloLado2");
  const base = document.getElementById("BaseTriangulo");

  const perimetro = perimetroTriangulo(lado1.value, lado2.value, base.value);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("BaseTriangulo");
  const altura = document.getElementById("AlturaTriangulo");

  const area = areaTriangulo(base.value, altura.value);
  alert(area);
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById("RadioCirculo");
  const valor = radio.value;
  const perimetro = perimetroCirculo(valor);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById("RadioCirculo");
  const valor = radio.value;

  const area = areaCirculo(valor);
  alert(area);
}