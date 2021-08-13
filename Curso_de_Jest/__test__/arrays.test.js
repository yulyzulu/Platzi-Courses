import { arrayFruit, arrayColors, arrayFruits } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
  test('Contiene una banana', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('No contiene platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
  test('Comprobar el tamaño de un arreglo', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test('Comprobaremos que existe algún color', () => {
    expect(arrayColors()).toContain('azul');
  });
});