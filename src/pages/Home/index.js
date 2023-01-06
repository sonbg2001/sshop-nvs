import Slide from './slide';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import configPaths from '~/routes/configPaths';
import { formatCash } from '~/components/Format';
import datafetch from '~/datafetch';
function Home() {
    const [listFeaturedProduct, setListFeaturedProduct] = useState([]);
    const [listNewProduct, setListNewProduct] = useState([]);
    useEffect(() => {
        //Fetch sản phẩm nổi bật
        let products = datafetch.getAllProduct();
        // console.log('Products', products);
        products.sort((a, b) => b.sold - a.sold);
        setListFeaturedProduct(products.slice(0, 8));
        //Fetch sản phẩm mới
        products.sort((a, b) => b.id - a.id);
        setListNewProduct(products.slice(0, 8));

        //Cleanup function
        return () => {
            console.log('cleanup');
        };

        // eslint-disable-next-line
    }, []);

    return (
        <section id="home" className="home">
            <div className="home-container">
                <Slide />
            </div>
            <div className="home-featured-product">
                <div className="home-featured-product-container">
                    <div className="home-featured-product-container-title">
                        <h2 className="heading">Sản phẩm nổi bật</h2>
                    </div>
                    <div id="product-body-list" className="home-featured-product-container-products">
                        {listFeaturedProduct.map((product, index) => {
                            let totalsale = product.price - (product.price * product.discount) / 100;
                            totalsale = (totalsale / 1000).toFixed() * 1000;
                            return (
                                <Link
                                    key={index}
                                    to={'/product-detail/' + product.id}
                                    id={product.id}
                                    className="home-featured-product-container-products-product product-body-list-item"
                                >
                                    <div className="home-featured-product-container-products-product-image">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="home-featured-product-container-products-product-title product-body-list-item-title">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="home-featured-product-container-products-product-price-discount product-body-list-item-discount">
                                        <p>Giảm {product.discount}%</p>
                                    </div>
                                    <div className="home-featured-product-container-products-product-price product-body-list-item-price">
                                        <h4>
                                            <span>{formatCash(product.price + '')}đ</span> {formatCash(totalsale + '')}đ
                                        </h4>
                                    </div>
                                    <div className="home-featured-product-container-products-product-button">
                                        <button className="btn btn-cart">Đặt mua</button>
                                        <button className="btn btn-cart">Xem chi tiết</button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <a href={configPaths.products}>Xem tất cả</a>
                </div>
            </div>
            <div className="home-featured-product">
                <div className="home-featured-product-container">
                    <div className="home-featured-product-container-title">
                        <h2 className="heading">Sản phẩm mới nhất</h2>
                    </div>
                    <div id="product-body-list" className="home-featured-product-container-products">
                        {listNewProduct.slice(0, 8).map((product, index) => {
                            let totalsale = product.price - (product.price * product.discount) / 100;
                            totalsale = (totalsale / 1000).toFixed() * 1000;
                            return (
                                <Link
                                    key={index}
                                    to={'/product-detail/' + product.id}
                                    id={product.id}
                                    className="home-featured-product-container-products-product product-body-list-item"
                                >
                                    <div className="home-featured-product-container-products-product-image">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="home-featured-product-container-products-product-title product-body-list-item-title">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="home-featured-product-container-products-product-price-discount product-body-list-item-discount">
                                        <p>Giảm {product.discount}%</p>
                                    </div>
                                    <div className="home-featured-product-container-products-product-price product-body-list-item-price">
                                        <h4>
                                            <span>{formatCash(product.price + '')}đ</span> {formatCash(totalsale + '')}đ
                                        </h4>
                                    </div>
                                    <div className="home-featured-product-container-products-product-button">
                                        <button className="btn btn-cart">Đặt mua</button>
                                        <button className="btn btn-cart">Xem chi tiết</button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <a href={configPaths.products}>Xem tất cả</a>
                </div>
            </div>
            <div className="home-lastest-product-image">
                <div className="home-lastest-product-image-title">
                    <h2 className="heading">Thương hiệu nổi bật</h2>
                </div>
                <div className="home-lastest-product-image-list">
                    <img src="images/dahon-sample-1.jpg.webp" alt="" />
                    <img src="images/dahon-sample-3.jpg.jpeg" alt="" />
                    <img src="images/dahon-sample-2.jpg.webp" alt="" />
                    <img src="images/dahon-sample-4.jpg.jpeg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;
