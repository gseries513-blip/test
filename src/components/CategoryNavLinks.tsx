export default function CategoryNavLinks() {
    const links = ["Science Fiction", "Fiction", "Non-Fiction", "Mystery", "Romance"];

    return (
        <ul className="category-buttons">
            {links.map((label, i) => (
                <li key={label}>
                    {i === 0 ? (
                        <span className="pill selected">{label}</span>
                    ) : (
                        <a className="pill" href={`/category/${label.toLowerCase()}`}>
                            {label}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
}
