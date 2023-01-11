import { Link } from 'react-router-dom';
import configPaths from '~/routes/configPaths';
function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-content-top-quick-link">
                            <div className="footer-content-top-quick-link-title">
                                <h3>Đường dẫn</h3>
                            </div>
                            <div className="footer-content-top-quick-link-content">
                                <ul>
                                    <li>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li>
                                        <a href={configPaths.brand}>Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Liên hệ</a>
                                    </li>
                                    <li>
                                        <a href="/">Chính sách</a>
                                    </li>
                                    <li>
                                        <a href="/">Điều khoản</a>
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
