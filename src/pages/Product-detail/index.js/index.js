import data from '~/data';
function ProductDetail() {
    let product = data.products[1];
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
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-detail-info">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>Giá: {product.price.toFixed(3)}đ</p>
                        <p>Giảm giá: {product.discount}%</p>
                        <div>
                            <label for="quantity">Số lượng:</label>
                            <input type="number" value="1" min="1" max="100" id="quantity" />
                        </div>
                        <button className="btn btn-cart" onClick="addItem({product.id})">
                            Đặt mua
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
