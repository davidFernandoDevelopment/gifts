interface Props {
    id: number;
    url: string;
    title: string;
}

const Card = ({ title, url }: Props) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Card;