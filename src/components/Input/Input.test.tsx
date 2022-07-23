import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';

describe('Pruebas en <Input />', () => {
    test('Debe de cambiar el valor del input', () => {
        render(<Input onValue={() => { }} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');

        fireEvent.input(input, { target: { value: 'Goku' } });
        expect(input.value).toBe('Goku');
    });

    test('Debe de llamar onValue() si input tiene un valor', () => {
        const inputValueMock = 'Saitama';
        const onValueMock = jest.fn();

        render(<Input onValue={onValueMock} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input, { target: { value: inputValueMock } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onValueMock).toHaveBeenCalledTimes(1);
        expect(onValueMock).toHaveBeenCalledWith(inputValueMock);
    });

    test('No debe llamar onValue() si el valor del input esta vacio', () => {
        const onValueMock = jest.fn();

        render(<Input onValue={onValueMock} />);

        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.submit(form);

        expect(onValueMock).not.toHaveBeenCalled();
    });
});