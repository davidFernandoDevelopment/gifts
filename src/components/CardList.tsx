import { useGifts } from '../hooks/useGifts';
import Card from './Card';

interface Props {
    category: string;
}

const CardList = ({ category }: Props) => {

    const { gifs, isLoading } = useGifts(category);


    if (isLoading) return <h1>CARGANDO...</h1>;

    return (
        <>
            <h2>{category}</h2>
            <ul className='card-grid'>
                {
                    gifs.map((gif) => (
                        <Card key={gif.id} {...gif} />
                    ))
                }
            </ul>
        </>
    );
};

export default CardList;