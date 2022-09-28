import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en archivo getGifs.js', () => { 
    test('Debe retonar los Gifs de la llamada en un arreglo', async() => { 
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String)
        });
     });
 });