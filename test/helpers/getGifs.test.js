import { getGifs } from "../../src/helpers/getGifs"


describe('pruebas en el helper getGifs', () => { 
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeLessThanOrEqual( 5 )
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
       
     })
 })