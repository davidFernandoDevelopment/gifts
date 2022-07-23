import { render, screen } from '@testing-library/react';

import CardList from './CardList';
import { useGifts } from '../../hooks/useGifts';
import { Gift } from '../../interfaces/Gifts';


// 1) Mock completo de ese path
jest.mock('../../hooks/useGifts');


describe('Pruebas en <CardList/>', () => {
    const category = 'dragon ball';

    test('Debe mostrar Loading inicialmente', () => {
        // 2) Le debo decirle al test como va funcionar ese hook.
        (useGifts as jest.Mock).mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<CardList category={category} />);

        expect(screen.getByText('CARGANDO...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se carga las imagenes ', () => {
        const gifs: Gift[] = [
            { id: '1', title: 'saitama', url: 'example/saitama.jpg' },
            { id: '2', title: 'goku', url: 'example/goku.jpg' },
        ];

        (useGifts as jest.Mock).mockReturnValue({
            gifs,
            isLoading: false
        });

        render(<CardList category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});