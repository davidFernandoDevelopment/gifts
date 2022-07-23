import { useEffect, useState } from 'react';
import { getFetchGifs } from '../helpers/getFetchGifs';
import { Gift } from '../interfaces/Gifts';


interface GiftsResponse {
    gifs: Gift[];
    isLoading: boolean;
}


export const useGifts = (category: string): GiftsResponse => {
    const [gifs, setGifs] = useState<Gift[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getGifs = async () => {
            const data = await getFetchGifs(category);
            setGifs(data);
            setIsLoading(false);
        };

        getGifs();
    }, [category]);




    return {
        gifs,
        isLoading
    };
};