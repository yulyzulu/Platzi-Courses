const lista1 = [
  1, 3, 2, 2, 1, 3, 4, 2, 1, 2, 2
];
function moda(lista) {
  const countLista= {};
  lista.map((item) => {
    if (countLista[item]) {
      countLista[item] += 1;
    } else {
      countLista[item] = 1
    }
  });

  const newListArray = Object.entries(countLista).sort((a, b) => {
    return b[1] - a[1];
  })
  
  const moda = newListArray[0];
  console.log(moda[0]);
}

moda(lista1);