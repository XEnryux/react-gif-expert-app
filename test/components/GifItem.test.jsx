import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('pruebas al componente <GifItem/>', () => {


    const title = "titulo"
    const url = "https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=1eac2f8c6m8gelxnx8cayxs7fcowvi673k75ikd5fpeeglom&rid=giphy.gif&ct=g"


    test('debe de hacer match con el snapshot', () => {



        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });
     test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByAltText(title)).toBeTruthy()
      });
})