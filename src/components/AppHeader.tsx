import { Link } from "react-router-dom";
import "./AppHeader.css";
import HeaderDropdown from "./HeaderDropdown";
import HeaderSearchBar from "./HeaderSearchBar";

export default function AppHeader() {
    return (
        <header className="site-header">
            <div className="wrap container">
                <div className="brand">
                    {/* Logo now uses React Router Link */}
                    <Link to="/" aria-label="Page Books — Home">
                        <img
                            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                            alt="Page logo"
                        />
                        <span className="text-logo">Page</span>
                    </Link>
                </div>

                <nav className="main">
                    <HeaderDropdown />
                </nav>

                <div className="header-right">
                    <HeaderSearchBar />

                    <Link className="icon-link" to="/login" aria-label="Login">
                        <img src="https://www.svgrepo.com/show/533243/user.svg" alt="user" />
                    </Link>

                    <Link className="icon-link" to="/cart" aria-label="Cart">
                        <img
                            src="https://www.svgrepo.com/show/532540/shopping-cart.svg"
                            alt="cart"
                        />
                        <span className="badge">0</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
