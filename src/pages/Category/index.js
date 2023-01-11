import { Link } from 'react-router-dom';

function Category() {
    return (
        <section className="category">
            <div className="category-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <Link to="/">Trang chủ</Link> / <span>Loại sản phẩm</span>
                        </h3>
                    </div>
                </div>
                <div className="category-content">
                    <div className="category-content-title">
                        <h3 className="heading-page heading">
                            <span>Loại sản phẩm</span>
                        </h3>
                    </div>
                    <div className="category-content-list">
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category1.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category2.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category3.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category4.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category5.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category6.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category7.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category8.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category9.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category10.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category11.webp" alt="" />
                            </a>
                        </div>
                        <div className="category-content-list-item">
                            <a href="product.html">
                                <img src="assets/images/category12.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;
