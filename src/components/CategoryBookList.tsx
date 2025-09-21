import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem.tsx";

const books = [
    {
        title: "Dune",
        author: "Frank Herbert",
        price: "$18.99",
        image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        price: "$15.99",
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        hasReadNow: true,
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        price: "$14.99",
        image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
    },
    {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        price: "$13.99",
        image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        hasReadNow: true,
    },
    {
        title: "Ender’s Game",
        author: "Orson Scott Card",
        price: "$16.99",
        image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        price: "$15.99",
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
    },
];

export default function CategoryBookList() {
    return (
        <section className="category-book-list">
            <ul id="book-boxes">
                {books.map((b) => (
                    <CategoryBookListItem key={b.title} {...b} />
                ))}
            </ul>
        </section>
    );
}
