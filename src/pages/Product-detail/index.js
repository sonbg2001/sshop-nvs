import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '~/utils/request';
function ProductDetail() {
    const [product, setProduct] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);
    let id = useParams();

    // function handleBuy() {
    //     alert('Đã mua hang');
    // }
    function handleAddToCart() {
        alert('Đã thêm vào giỏ hàng');
        let cart = [];
        cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = [{ product, productQuantity }];
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            cart.push({ product, productQuantity });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        console.log(cart);
    }

    useEffect(() => {
        request
            .get('products/' + id.id, {})
            .then(function (response) {
                setProduct(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);
    return (
        <section className="product-detail">
            <div className="product-detail-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href="/products">Sản phẩm</a> / <span>Chi tiết sản phẩm</span>
                        </h3>
                    </div>
                </div>
                <div id="product-detail">
                    <div className="product-detail-img">
                        <img src={'../' + product.image} alt={product.image} />
                    </div>
                    <div className="product-detail-info">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>Giá: {product.price}đ</p>
                        {/* {product.price.toFixed(3)} */}
                        <p>Giảm giá: {product.discount}%</p>
                        <div>
                            <label htmlFor="quantity">Số lượng:</label>
                            <input
                                type="number"
                                value={productQuantity}
                                min="1"
                                max={product.number}
                                onChange={(e) => {
                                    setProductQuantity(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <button className="btn btn-active">Mua ngay</button>
                            <button className="btn btn-cart" onClick={handleAddToCart}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
