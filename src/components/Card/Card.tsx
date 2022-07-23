interface Props {
    id?: number | string;
    url: string;
    title: string;
}

export const Card = ({ title, url }: Props) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Card;