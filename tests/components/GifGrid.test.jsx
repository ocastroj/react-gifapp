import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas <GridGif />', () => { 

    const category = 'One Punchman';

    test('Debe mostrar loading inicialmente', () => { 
        render (<GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
     });
 });