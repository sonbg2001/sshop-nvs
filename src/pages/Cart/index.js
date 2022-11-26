import data from '~/data';
function Cart() {
    let products = data.products;
    return (
        <section className="cart">
            <div className="cart-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href="index.html">Shop</a> / <span>Cart</span>
                        </h3>
                    </div>
                </div>
                <div className="cart-table-head">
                    <h3>Shopping Cart</h3>
                    <button className="btn btn-cart" onClick="clearCart()">
                        Clear Cart
                    </button>
                </div>
                <div className="cart-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody id="cart">
                            {products.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            <img src={product.image} height="40" alt="" />
                                        </td>
                                        <td>{product.price.toFixed(3)}đ</td>
                                        <td>{product.discount}%</td>
                                        <td>
                                            <input id="cart{product.id}" type="number" value="2" />
                                        </td>
                                        {/* <td>${totalItem.toFixed(3)}đ</td> */}
                                        <td>2đ</td>
                                        <td>
                                            <button onClick="updateItem({product.id})">Update</button>
                                        </td>
                                        <td>
                                            <button onClick="removeItem({product.id})">Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="cart-total-price">
                    <div id="cart-origin-total"></div>
                    <div id="cart-total-checkout"></div>
                </div>
                <div className="cart-button">
                    <a href="/" className="btn btn-cart" onClick="checkout()">
                        Checkout
                    </a>
                    <a href="product.html" className="btn btn-cart">
                        Continue Shopping
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Cart;
