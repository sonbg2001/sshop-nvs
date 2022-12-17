import configPaths from '~/routes/configPaths';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-content-top-quick-link">
                            <div className="footer-content-top-quick-link-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div className="footer-content-top-quick-link-content">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href={configPaths.brand}>About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-top-newsletter">
                            <div className="footer-content-top-newsletter-title">
                                <h3>Newsletter</h3>
                            </div>
                            <div className="footer-content-top-newsletter-content">
                                <p>Subscribe to our newsletter to get the latest news and updates.</p>
                                <form action="">
                                    <input type="text" placeholder="Enter your email address" />
                                    <button className="btn btn-cart" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content-bottom">
                        <div className="footer-content-bottom-copyright">
                            <p>
                                &copy; 2022 All Rights Reserved. Designed by <a href="/">S-Shop</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
