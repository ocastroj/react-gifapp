import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas <GridGif />', () => { 

    const category = 'One Punchman';

    test('Debe mostrar loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render (<GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
     });

     test('Debe mostrar items cuando se cargan imagenes usando useFetchGifs', () => { 

        const gifs = [
            {
                id: '1234',
                title: 'Goku',
                url: 'https://amazon.com/i/1.jpg'
            },
            {
                id: '1235',
                title: 'Vegeta',
                url: 'https://amazon.com/i/2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });   

        render (<GifGrid category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2);
        //screen.debug();
        //console.log(screen.findAllByRole('img').length);
      });
 });