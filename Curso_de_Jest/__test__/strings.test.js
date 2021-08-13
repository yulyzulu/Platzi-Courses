describe('Comprobar cadenas de texto', () => {
  const text = 'un bonito texto';
  test('Debe contener el siguiente texto "bonito"', () => {
    expect(text).toMatch(/bonito/);
  });
  test('No contiene el siguiente texto "es"', () => {
    expect(text).not.toMatch(/es/);
  });

  test('Comprobar la longitud de un texto', () => {
    expect(text).toHaveLength(15);
  });
});