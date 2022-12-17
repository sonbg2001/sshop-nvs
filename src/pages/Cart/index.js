import { useEffect, useState } from 'react';
import configPaths from '~/routes/configPaths';
function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [test, setTest] = useState('');
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
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
        // eslint-disable-next-line
    }, [test]);
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
                                <th>Chọn</th>
                                <th>Tên sản phẩm</th>
                                <th>Ảnh</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Tổng </th>

                                <th>Xoá</th>
                            </tr>
                        </thead>
                        <tbody id="cart">
                            {cart &&
                                cart.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <input type="checkbox" id="" value={index} />
                                            </td>
                                            <td>{item.product.name}</td>

                                            <td>
                                                <img src={item.product.image} height="40" alt="" />
                                            </td>
                                            <td>{formatCash(item.product.price * 1000 + '')}đ</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    onChange={(e) => {
                                                        cart[index].productQuantity =
                                                            e.target.value > 0 ? e.target.value : 1;
                                                        console.log(cart);
                                                        localStorage.setItem('cart', JSON.stringify(cart));
                                                        setTest(cart);
                                                        // item.productQuantity = e.target.value;
                                                        console.log('item.productQuantity:', item.productQuantity);
                                                    }}
                                                    value={Number(item.productQuantity)}
                                                />
                                            </td>
                                            {/* <td>${totalItem.toFixed(3)}đ</td> */}
                                            <td>
                                                {formatCash(
                                                    1000 * item.product.price * Number(item.productQuantity) + '',
                                                ) || 0}
                                                đ
                                            </td>

                                            <td
                                                onClick={() => {
                                                    alert('Đã xoá');
                                                }}
                                            >
                                                Xoá
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
                    <a href={configPaths.products} className="btn btn-cart">
                        Tiếp tục mua sắm
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Cart;
