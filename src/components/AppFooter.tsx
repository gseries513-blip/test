import "./AppFooter.css";

export default function AppFooter() {
    return (
        <footer className="site-footer">
            <div className="wrap container">
                <div>
                    <div className="brand-row">
                        <img
                            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                            alt="Page logo"
                        />
                        <strong>Page</strong>
                    </div>
                    <p className="muted">Your local bookstore destination.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul className="flow">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Directions</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div className="social">
                        <a href="#" aria-label="Facebook">
                            <img
                                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                                alt="Facebook"
                            />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img
                                src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                                alt="Twitter"
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p className="muted">hello@page.com</p>
                    <p className="muted">123 Book Street</p>
                </div>
            </div>
            <div className="legal container">&copy; 2025 Page. All rights reserved.</div>
        </footer>
    );
}
