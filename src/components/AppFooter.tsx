import "./AppFooter.css";

export default function AppFooter() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section">
                            <div className="brand-row">
                                <img
                                    src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                                    alt="Page logo"
                                />
                                <strong>Page</strong>
                            </div>
                            <p className="muted">Your local bookstore destination.</p>
                        </div>

                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <div className="flow">
                                <a href="#">Contact Us</a>
                                <a href="#">Directions</a>
                            </div>
                        </div>

                        <div className="footer-section">
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

                        <div className="footer-section">
                            <h3>Contact</h3>
                            <p className="muted">hello@page.com</p>
                            <p className="muted">123 Book Street</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="legal">
                <div className="container">
                    &copy; 2025 Page. All rights reserved.
                </div>
            </div>
        </footer>
    );
}