import { Link } from 'react-router-dom';
import configPaths from '~/routes/configPaths';
function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-container header-main">
                <div className="container header-main-content">
                    <div className="header-main-left">
                        <div className="header-logo">
                            <a href="/">
                                <h3>S-Shop</h3>
                            </a>
                        </div>
                    </div>
                    <div className="header-main-mid">
                        <div className="header-search">
                            <form action="" method="get">
                                <input type="text" name="search" placeholder="Search..." />
                                <button className="btn-submit" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="header-main-right">
                        <div className="header-user">
                            <div className="header-user-image">
                                <img
                                    src="https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-16.jpg"
                                    height="40"
                                    alt=""
                                />
                            </div>
                            <div className="header-user-funtion">
                                <div className="header-user-funtion-item">
                                    <a href="/account">
                                        <i className="fa-solid fa-user"></i>
                                        <span>My Account</span>
                                    </a>
                                </div>
                                <div className="header-user-funtion-item">
                                    <a href="/">
                                        <i className="fa-solid fa-gear"></i>
                                        <span>Setting</span>
                                    </a>
                                </div>
                                <div className="header-user-funtion-item">
                                    <a href={configPaths.login}>
                                        <i className="fa-solid fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header-menu">
                            <button id="btn-menu" className="btn btn-login">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-container header-bottom">
                <div className="container header-bottom-content">
                    <div className="header-bottom-nav">
                        <ul className="header-bottom-nav-list">
                            <li className="header-bottom-nav-list-item">
                                <Link to="/admin">Dashboard</Link>
                            </li>
                            <li className="header-bottom-nav-list-item">
                                <Link to="/admin/products">Sản phẩm</Link>
                            </li>
                            <li className="header-bottom-nav-list-item">
                                <Link to="/admin/order">Đơn hàng</Link>
                            </li>
                            <li className="header-bottom-nav-list-item">
                                <Link to="/admin/customer">Khách hàng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
