import { Link } from "react-router-dom";
import "./HeaderDropdown.css";

export default function HeaderDropdown() {
    return (
        <div className="header-dropdown">
            <button className="toggle" aria-haspopup="true" aria-expanded="false">
                <span>Categories</span> <span className="caret">▾</span>
            </button>
            <ul role="menu">
                <li><Link to="/category/new">New Releases</Link></li>
                <li><Link to="/category/best">Best Sellers</Link></li>
                <li><Link to="/category/fiction">Fiction</Link></li>
                <li><Link to="/category/non-fiction">Non-Fiction</Link></li>
                <li><Link to="/category/mystery">Mystery</Link></li>
                <li><Link to="/category/romance">Romance</Link></li>
                <li><Link to="/category/science-fiction">Science Fiction</Link></li>
                <li><Link to="/category/biography">Biography</Link></li>
            </ul>
        </div>
    );
}
