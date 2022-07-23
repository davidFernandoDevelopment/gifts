import { getFetchGifs } from './getFetchGifs';

describe('Pruebas en getFetchGifs', () => {

    test('Deberia retornar un arreglo de gifs', async () => {
        const gifs = await getFetchGifs('one');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});