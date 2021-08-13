import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matemáticos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Resta', () => {
        expect(restar(5,3)).toBe(2);
    });
    test('División', () => {
        expect(dividir(6,2)).toBe(3);
    });
});

