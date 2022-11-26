import data from '~/data';
import { Link } from 'react-router-dom';
function Products() {
    let products = data.products;
    return (
        <section id="product" class="product">
            <div class="product-container">
                <div class="product-top">
                    <div class="product-top-title">
                        <h3 class="heading-page">
                            <a href="/">Trang chủ</a> / <span>Sản phẩm</span>
                        </h3>
                    </div>
                    <div class="product-top-sort-by">
                        <div class="product-top-sort-by-title">
                            <h3>Sắp xếp:</h3>
                        </div>
                        <div class="product-top-sort-by-select">
                            <select name="sort-by" id="sort-by">
                                <option value="">Mặc định</option>
                                <option value="">Tên (A - Z)</option>
                                <option value="">Tên (Z - A)</option>
                                <option value="">Giá (Thấp &gt; Cao)</option>
                                <option value="">Giá (Cao &gt; Thấp)</option>
                                <option value="">Mới nhất</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="product-body">
                    <div class="product-body-filter">
                        <div class="product-body-filter-title">
                            <h3>Bộ lọc:</h3>
                        </div>
                        <div class="product-body-filter-select">
                            <select name="filter" id="filter">
                                <option value="">Tất cả</option>
                                <option value="">Áo phông</option>
                                <option value="">Quần</option>
                                <option value="">Giày</option>
                            </select>
                        </div>
                        <div class="product-body-filter-brand">
                            <h3>Thương hiệu</h3>
                            <div class="product-body-filter-brand-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="brand-1" name="brand-1" />
                                        <label for="brand-1">Thương hiệu 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-2" name="brand-2" />
                                        <label for="brand-2">Thương hiệu 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-3" name="brand-3" />
                                        <label for="brand-3">Thương hiệu 3</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-body-filter-price">
                            <h3>Giá</h3>
                            <div class="product-body-filter-price-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="price-1" name="price-1" />
                                        <label for="price-1">0đ - 100.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-2" name="price-2" />
                                        <label for="price-2">100.000đ - 200.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-3" name="price-3" />
                                        <label for="price-3">200.000đ - 300.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-4" name="price-4" />
                                        <label for="price-4">300.000đ - 500.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-5" name="price-5" />
                                        <label for="price-5">500.000đ - 800.000đ</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-body-filter-size">
                            <h3>Kích thước</h3>
                            <div class="product-body-filter-size-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="size-1" name="size-1" />
                                        <label for="size-1">XS</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-2" name="size-2" />
                                        <label for="size-2">S</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-3" name="size-3" />
                                        <label for="size-3">M</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-4" name="size-4" />
                                        <label for="size-4">L</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-5" name="size-5" />
                                        <label for="size-5">XL</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-body-filter-color">
                            <h3>Màu</h3>
                            <div class="product-body-filter-color-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="color-1" name="color-1" />
                                        <label for="color-1">Đỏ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-2" name="color-2" />
                                        <label for="color-2">Xanh lam</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-3" name="color-3" />
                                        <label for="color-3">Xanh lá</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-4" name="color-4" />
                                        <label for="color-4">Vàng</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-5" name="color-5" />
                                        <label for="color-5">Đen</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-body-filter-button">
                            <button type="submit" class="btn btn-cart">
                                Lọc
                            </button>
                        </div>
                    </div>
                    <div id="product-body-list">
                        {products.map((product, index) => {
                            let totalsale = product.price - (product.price * product.discount) / 100;
                            totalsale = totalsale.toFixed(3);
                            return (
                                <Link
                                    key={index}
                                    to={'/product-detail?id=' + product.id}
                                    id="{product.id}"
                                    class="product-body-list-item"
                                >
                                    <div class="product-body-list-item-image">
                                        <img src={product.image} height="80" alt="" />
                                    </div>
                                    <div class="product-body-list-item-title">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div class="product-body-list-item-discount">
                                        <p>Giảm {product.discount}%</p>
                                    </div>
                                    <div class="product-body-list-item-price">
                                        <h4>
                                            <span>{product.price}.000đ</span> {totalsale}đ
                                        </h4>
                                    </div>
                                    <div class="product-body-list-item-button">
                                        <button class="btn btn-cart">Đặt mua</button>
                                        <button class="btn btn-cart">Xem chi tiết</button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
