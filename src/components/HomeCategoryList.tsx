import "./HomeCategoryList.css";
import HomeCategoryListItem from "./HomeCategoryListItem";

const categories = [
    {
        label: "Fiction",
        image:
            "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
        label: "Non-Fiction",
        image:
            "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
        label: "Science Fiction",
        image:
            "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
        label: "Biography",
        image:
            "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
];

export default function HomeCategoryList() {
    return (
        <section className="category-tiles">
            <div className="tile-grid">
                {categories.map((cat) => (
                    <HomeCategoryListItem key={cat.label} {...cat} />
                ))}
            </div>
        </section>
    );
}
