// Se testea en el en el mismo código

describe('Comparadores comunes', () => {
    const user = {
        name: 'Oscar',
        lastname: 'Barajas'
    };
    const user2 = {
        name: 'Oscar2',
        lastname: 'Barajas2'
    };
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    })

})