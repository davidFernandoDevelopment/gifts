import { useEffect, useState } from 'react';
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
            const url = `https://api.giphy.com/v1/gifs/search?api_key=xmx0mzlhqixfgPIvlDldYt7zk5gFSioy&limit=20&q=${category}`;
            const res = await fetch(url);
            const response = await res.json();
            const data: Gift[] = response.data.map((gif: any) => ({
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }));

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