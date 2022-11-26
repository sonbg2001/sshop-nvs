import data from '~/data';
function Cart() {
    let products = data.products;
    return (
        <section class="cart">
            <div class="cart-container">
                <div class="product-top">
                    <div class="product-top-title">
                        <h3 class="heading-page">
                            <a href="index.html">Shop</a> / <span>Cart</span>
                        </h3>
                    </div>
                </div>
                <div class="cart-table-head">
                    <h3>Shopping Cart</h3>
                    <button class="btn btn-cart" onclick="clearCart()">
                        Clear Cart
                    </button>
                </div>
                <div class="cart-table">
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
                                            <button onclick="updateItem({product.id})">Update</button>
                                        </td>
                                        <td>
                                            <button onclick="removeItem({product.id})">Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div class="cart-total-price">
                    <div id="cart-origin-total"></div>
                    <div id="cart-total-checkout"></div>
                </div>
                <div class="cart-button">
                    <a href="#" class="btn btn-cart" onclick="checkout()">
                        Checkout
                    </a>
                    <a href="product.html" class="btn btn-cart">
                        Continue Shopping
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Cart;
