import { Gift } from '../interfaces/Gifts';

export const getFetchGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xmx0mzlhqixfgPIvlDldYt7zk5gFSioy&limit=20&q=${category}`;
    const res = await fetch(url);
    const response = await res.json();
    const data: Gift[] = response.data.map((gif: any) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return data;
};