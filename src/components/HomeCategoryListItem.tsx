import "./HomeCategoryListItem.css";

type Props = { label: string; image: string };

export default function HomeCategoryListItem({ label, image }: Props) {
    return (
        <a className="tile" href={`/category/${label.toLowerCase()}`}>
            <img src={image} alt={label} />
            <div className="label">{label}</div>
        </a>
    );
}
