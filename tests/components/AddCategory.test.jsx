import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba <AddCateogory .>', () => { 
    test('Debe de cambiar el valor de caja de texto', () => { 

        render( <AddCategory onNewCategory={() => {}}/>);
        //screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value: 'Goku' }});

        expect( input.value ).toBe('Goku');

     });

     test('Debe de llamar onNewCategory si input tiene valor', () => { 
        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue }});
        fireEvent.submit(form);

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      });

      test('No debe de llamar onNewCategory si input esta vacío', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

       });
 });