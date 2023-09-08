import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'


describe('pruebas al componente <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {


        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        // se dispara un evento en la variable imput (que es la caja de texto extraida del screen ), el evento es el "input" 
        // con el valor "Saitama" en la caja de texto.

        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama')
        //  screen.debug()
    });
    test('debe de llamar onNewCategory si el imput tiene al menos un caracter', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //  screen.debug()
        expect(input.value).toEqual('');

        expect ( onNewCategory ).toHaveBeenCalledTimes(1);
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
    });
    test('no debe de llamar onNewCategory si el imput esta vacio', () => { 


        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        //  screen.debug()
        // expect ( onNewCategory ).toHaveBeenCalledTimes(0);
        expect ( onNewCategory ).not.toHaveBeenCalled();



    })

});