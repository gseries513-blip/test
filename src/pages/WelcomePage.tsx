import "./WelcomePage.css";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Fiction",
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    label: "Non-Fiction", 
    image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    label: "Science Fiction",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    label: "Biography",
    image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
];

const featuredBooks = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: "$16.99",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    hasReadNow: false,
  },
  {
    title: "Educated",
    author: "Tara Westover", 
    price: "$15.99",
    image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    hasReadNow: true,
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$14.99", 
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    hasReadNow: false,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$12.99",
    image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    hasReadNow: true,
  },
];

export default function WelcomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-xl">Discover Your Next Great Read</h1>
            <p>
              Welcome to <strong>Page</strong>, your local literary sanctuary. From timeless
              classics to contemporary bestsellers, find the perfect book for
              every reader.
            </p>
            <Link to="/category/fiction" className="hero-cta">
              Shop for Books
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="heading-lg section-title">Browse by Category</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category.label}
                to={`/category/${category.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="category-tile"
              >
                <img src={category.image} alt={category.label} />
                <div className="category-overlay">
                  <span className="category-label">{category.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="heading-lg section-title">Featured Books</h2>
          <div className="featured-grid">
            {featuredBooks.map((book) => (
              <div key={book.title} className="featured-book">
                <img src={book.image} alt={book.title} />
                <div className="featured-book-content">
                  <h3>{book.title}</h3>
                  <p className="author">{book.author}</p>
                  <p className="price">{book.price}</p>
                  <div className="book-actions">
                    <button className="btn btn-primary">Add to Cart</button>
                    {book.hasReadNow && (
                      <button className="btn btn-secondary">Read Now</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}