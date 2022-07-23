import { useGifts } from '../../hooks/useGifts';
import Card from '../Card/Card';

interface Props {
    category: string;
}

export const CardList = ({ category }: Props) => {

    const { gifs, isLoading } = useGifts(category);


    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && <h1>CARGANDO...</h1>
            }
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