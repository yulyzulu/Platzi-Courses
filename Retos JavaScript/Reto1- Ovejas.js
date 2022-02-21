function contarOvejas(ovejas) {
  let ovejasFiltradas = [];
  for (let i = 0; i < ovejas.length; i++) {
    if (ovejas[i].color === 'rojo'
        && (ovejas[i].name.includes('a') || ovejas[i].name.includes('A'))
        && (ovejas[i].name.includes('n') || ovejas[i].name.includes('N'))) {
      ovejasFiltradas.push(ovejas[i]);
    }
  }
  return ovejasFiltradas;
}


const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas);

