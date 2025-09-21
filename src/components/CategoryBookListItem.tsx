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
            <div className="book-title">{title}</div>
            <div className="book-author">{author}</div>
            <div className="book-price">{price}</div>
            <div className="book-actions">
                <a className="btn btn-primary" href="#">
                    Add to Cart
                </a>
                {hasReadNow && (
                    <a className="btn read-now" href="#">
                        Read Now
                    </a>
                )}
            </div>
        </li>
    );
}
