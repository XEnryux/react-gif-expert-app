import { render, screen } from "@testing-library/react"
import {  GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');



describe('pruebas en el componente <GifGrid/>', () => { 

const category = 'one punch man'

test('debe de mostrar el loading incialmente', () => { 

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true

    });

    render(<GifGrid category = {category} />)
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText( category ));
})

test('debe de mostrar items cargados de la "API"', () => { 

    const gifs = [{
        id: 'abc',
        title:'saitama',
        url:'https://saitama.jpg'

    },
    {
        id: '123',
        title:'Goku',
        url:'https://Goku.jpg'

    }


    ]

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false

    });

    render(<GifGrid category = {category} />)
    expect(screen.getAllByRole('img').length).toBe(2);
    screen.debug();




 })

})