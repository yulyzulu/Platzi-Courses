function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const list1 = [
  700,
  200,
  300,
  3000000,
];

const midList = parseInt(list1.length / 2);
const sortList = list1.sort(function(a, b) {
  return a - b;
});
console.log(sortList);

function isEven(num) {
  return num % 2 === 0;
}

let mediana;

if (isEven(list1.length)) {
  const num1 = list1[midList - 1];
  const num2 = list1[midList];
  console.log(num1)
  console.log(num2)

  const media = calcularMedia([num1, num2]);
  console.log(media)

} else {
  mediana = list1[midList];
  console.log('Es impar');
  console.log(mediana);
}


function calcularMediana(lista) {

}