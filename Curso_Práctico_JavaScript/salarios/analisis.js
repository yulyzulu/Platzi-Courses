// Helpers or Utils

// Function to verify if num is even
function isEven(num) {
  return  (num % 2 === 0);
}

//Function to calculate the mean
function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//List with salaries in Colombia
const salariosCol = colombia.map((persona) => {
  return persona.salary;
});

// Salaries Sorted
const salariosColSorted = salariosCol.sort((a, b)=> {
  return a - b;
});

// Function to calculate the mediana
function medianaSalarios(lista) {
  const mid = parseInt(lista.length / 2);
  let mediana;
  if (isEven(lista.length)) {
    const persona1 = lista[mid - 1];
    const persona2 = lista[mid];
    mediana = calcularMedia([persona1, persona2]);
    return mediana;
  } else {
    mediana = lista[mid];
    return mediana;
  }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
//Formula % porcentaje 
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaColTop10 = medianaSalarios(salarioColTop10);

console.log({
  medianaGeneralCol,
  medianaColTop10
});