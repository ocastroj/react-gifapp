import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe('Prueba <GifGridItem/>', () => { 

    const title = 'One Piece';
    const url= 'https://api.com/q';

    test('Debe de ser igual el snapshot', () => { 
        
        const { container } = render( <GifGridItem title={ title } url={ url }/> );

        expect(container).toMatchSnapshot();
     });

     test('Debe de mostrar la imagen con el URL y ALT indicado', () => { 
        render( <GifGridItem title={ title } url={ url }/> );

        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
      });

      test('Debe de mostrar el título en el compnente', () => { 
        render( <GifGridItem title={ title } url={ url }/> );
        expect( screen.getByText( title )).toBeTruthy();
       });
    
 });