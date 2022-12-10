import { useState } from 'react';

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }
    function handleDeleteAllCart() {
        setCart([]);
        localStorage.removeItem('cart');
    }

    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

    return (
        <section className="cart">
            <div className="cart-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href="/">Shop</a> / <span>Cart</span>
                        </h3>
                    </div>
                </div>
                <div className="cart-table-head">
                    <h3>Danh sách sản phẩm</h3>
                    <button className="btn btn-cart" onClick={handleDeleteAllCart}>
                        Xoá tất cả
                    </button>
                </div>
                <div className="cart-table">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Ảnh</th>
                                <th>Đơn giá</th>
                                <th>Giảm</th>
                                <th>Số lượng</th>
                                <th>Tổng </th>

                                <th>Xoá</th>
                            </tr>
                        </thead>
                        <tbody id="cart">
                            {cart.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.product.name}</td>
                                        <td>
                                            <img src={item.product.image} height="40" alt="" />
                                        </td>
                                        <td>{formatCash(item.product.price * 1000 + '')}đ</td>
                                        <td>{item.product.discount}%</td>
                                        <td>{Number(item.productQuantity)}</td>
                                        {/* <td>${totalItem.toFixed(3)}đ</td> */}
                                        <td>
                                            {formatCash(
                                                1000 * item.product.price * Number(item.productQuantity) + '',
                                            ) || 0}
                                            đ
                                        </td>

                                        <td>
                                            <button>Xoá</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="cart-total-price">
                    <div id="cart-origin-total">Tổng tiền: </div>
                    <div id="cart-total-checkout">Pippip</div>
                </div>
                <div className="cart-button">
                    <a href="/" className="btn btn-cart">
                        Thanh toán
                    </a>
                    <a href="/products" className="btn btn-cart">
                        Tiếp tục mua sắm
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Cart;
