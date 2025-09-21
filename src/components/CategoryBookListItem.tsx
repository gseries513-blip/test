import "./CategoryBookListItem.css";

type Props = {
    title: string;
    author: string;
    price: string;
    image: string;
    hasReadNow?: boolean;
};

export default function CategoryBookListItem({
    title,
    author,
    price,
    image,
    hasReadNow,
}: Props) {
    return (
        <li className="book-box">
            <div className="book-image">
                <img src={image} alt={title} />
            </div>
            <div className="book-content">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
                <p className="book-price">{price}</p>
                <div className="book-actions">
                    <button className="btn btn-primary">
                        Add to Cart
                    </button>
                    {hasReadNow && (
                        <button className="btn read-now">
                            Read Now
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
}