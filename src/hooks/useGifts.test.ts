import { renderHook, waitFor } from '@testing-library/react';
import { useGifts } from './useGifts';

describe('Pruebas en hook useGifts', () => {
    test('Debe regresar el estado inicial', () => {

        const {
            result
        } = renderHook(() => useGifts('dragon ball'));

        const {
            gifs,
            isLoading
        } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de retornar un arrgelo de gif y isLoading false', async () => {
        const {
            result
        } = renderHook(() => useGifts('dragon ball'));

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        const {
            gifs,
            isLoading
        } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});