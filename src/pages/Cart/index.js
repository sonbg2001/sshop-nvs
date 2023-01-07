import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import configPaths from '~/routes/configPaths';
import { formatCash } from '~/components/Format';
function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [changeQuantity, setChangeQuantity] = useState('');
    const [sumCart, setSumCart] = useState(0);

    function handleDeleteAllCart() {
        setCart([]);
        setSumCart(0);
        localStorage.removeItem('cart');
    }

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
        let sum = 0;
        for (let item of cart) sum = sum + item.product.price * Number(item.productQuantity);
        setSumCart(sum);

        // eslint-disable-next-line
    }, [changeQuantity]);
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
                                                <Link to={'/product-detail/' + item.product.id}>
                                                    <img
                                                        style={{ transform: ' translateY(35%)' }}
                                                        src={item.product.image}
                                                        height="40"
                                                        alt=""
                                                    />
                                                </Link>
                                            </td>
                                            <td>{formatCash(item.product.price + '')}đ</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    onChange={(e) => {
                                                        cart[index].productQuantity =
                                                            e.target.value > 0 ? e.target.value : 1;
                                                        localStorage.setItem('cart', JSON.stringify(cart));
                                                        setChangeQuantity(cart);
                                                    }}
                                                    value={Number(item.productQuantity)}
                                                />
                                            </td>
                                            {/* <td>${totalItem.toFixed(3)}đ</td> */}
                                            <td>
                                                {formatCash(item.product.price * Number(item.productQuantity) + '') ||
                                                    0}
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
                    <div id="cart-total-checkout"> {formatCash(sumCart + '')}đ</div>
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
