import { render, screen } from '@testing-library/react';
import { debug } from 'console';

import Card from './Card';


describe('Pruebas para Card', () => {
    const titleMock = 'Saitama';
    const urlMock = 'https://one-puch.com/saitama.png';


    test('Debe hacer match con el snapshot', () => {
        const {
            container
        } = render(<Card url={urlMock} title={titleMock} />);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la img con url indicado', () => {
        render(<Card url={urlMock} title={titleMock} />);

        const {
            src, alt
        } = screen.getByRole<HTMLImageElement>('img');

        expect(src).toBe(urlMock);
        expect(alt).toBe(titleMock);
    });

    test('Debe de mostrar el titulo del componente', () => {
        render(<Card title={titleMock} url={urlMock} />);

        expect(screen.getByText(titleMock)).toBeTruthy();
    });
});

