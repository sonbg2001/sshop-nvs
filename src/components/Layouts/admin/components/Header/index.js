// import classNames from 'classnames/bind';
// import styles from './Header.module.scss';
// import images from '~/assets/images';
// import { Link } from 'react-router-dom';
// const cs = classNames.bind(styles);
function Header() {
    return (
        <div class="header-wrapper">
            <div class="header-container header-main">
                <div class="container header-main-content">
                    <div class="header-main-left">
                        <div class="header-logo">
                            <a href="/">
                                <h3>S-Shop</h3>
                            </a>
                        </div>
                    </div>
                    <div class="header-main-mid">
                        <div class="header-search">
                            <form action="" method="get">
                                <input type="text" name="search" placeholder="Search..." />
                                <button class="btn-submit" type="submit">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="header-main-right">
                        <div class="header-user">
                            <div class="header-user-image">
                                <img src="assets/images/user.jpg" height="40" alt="" />
                            </div>
                            <div class="header-user-funtion">
                                <div class="header-user-funtion-item">
                                    <a href="#account.html">
                                        <i class="fa-solid fa-user"></i>
                                        <span>My Account</span>
                                    </a>
                                </div>
                                <div class="header-user-funtion-item">
                                    <a href="/">
                                        <i class="fa-solid fa-gear"></i>
                                        <span>Setting</span>
                                    </a>
                                </div>
                                <div class="header-user-funtion-item">
                                    <a href="login.html">
                                        <i class="fa-solid fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header-menu">
                            <button id="btn-menu" class="btn btn-login">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-container header-bottom">
                <div class="container header-bottom-content">
                    <div class="header-bottom-nav">
                        <ul class="header-bottom-nav-list">
                            <li class="header-bottom-nav-list-item">
                                <a href="admin.html">Dashboard</a>
                            </li>
                            <li class="header-bottom-nav-list-item">
                                <a href="admin-product.html">Product</a>
                            </li>
                            <li class="header-bottom-nav-list-item">
                                <a href="admin-order.html">Order</a>
                            </li>
                            <li class="header-bottom-nav-list-item">
                                <a href="admin-customer.html">Customer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
