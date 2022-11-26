import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '~/data';
function Search() {
    const [searchResult, setSearchResult] = useState('Từ khoá search');
    const [sortType, setSortType] = useState('new');
    const [listProduct, setListProduct] = useState(data.products);
    let products = listProduct;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((dataa) => {
                setListProduct(dataa);
                let s = Math.random() * 10;
                s = s.toFixed();
                s = sortType.length;
                setListProduct(data.products.slice(s, s + 4));
                setSearchResult(sortType);
                // setListProduct(data.products);
            })
            .catch((e) => {
                console.log('Cos loi');
                // return;
            });
    }, [sortType]);

    let search = searchResult;
    return (
        <section id="product" className="product">
            <div className="product-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">Kết quả tìm kiếm với từ khoá: {search}</h3>
                    </div>
                </div>
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href="/">Trang chủ</a> / <span>Sản phẩm</span>
                        </h3>
                    </div>
                    <div className="product-top-sort-by">
                        <div className="product-top-sort-by-title">
                            <h3>Sắp xếp:</h3>
                        </div>
                        <div className="product-top-sort-by-select">
                            <select
                                name="sort-by"
                                id="sort-by"
                                value={sortType}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    // let s = Math.random() * 10;
                                    // s = s.toFixed();
                                    // setSearchResult(data.products.slice(s, s + 4));

                                    setSortType(e.target.value);
                                }}
                            >
                                <option value="default">Mặc định</option>
                                <option value="nameaz">Tên (A - Z)</option>
                                <option value="nameza">Tên (Z - A)</option>
                                <option value="pricelowtohight">Giá (Thấp &gt; Cao)</option>
                                <option value="pricehighttolow">Giá (Cao &gt; Thấp)</option>
                                <option value="new">Mới nhất</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="product-body">
                    <div className="product-body-filter">
                        <div className="product-body-filter-title">
                            <h3>Bộ lọc:</h3>
                        </div>
                        <div className="product-body-filter-select">
                            <select name="filter" id="filter">
                                <option value="">Tất cả</option>
                                <option value="">Áo phông</option>
                                <option value="">Quần</option>
                                <option value="">Giày</option>
                            </select>
                        </div>
                        <div className="product-body-filter-brand">
                            <h3>Thương hiệu</h3>
                            <div className="product-body-filter-brand-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="brand-1" name="brand-1" />
                                        <label htmlFor="brand-1">Thương hiệu 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-2" name="brand-2" />
                                        <label htmlFor="brand-2">Thương hiệu 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="brand-3" name="brand-3" />
                                        <label htmlFor="brand-3">Thương hiệu 3</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-price">
                            <h3>Giá</h3>
                            <div className="product-body-filter-price-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="price-1" name="price-1" />
                                        <label htmlFor="price-1">0đ - 100.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-2" name="price-2" />
                                        <label htmlFor="price-2">100.000đ - 200.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-3" name="price-3" />
                                        <label htmlFor="price-3">200.000đ - 300.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-4" name="price-4" />
                                        <label htmlFor="price-4">300.000đ - 500.000đ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="price-5" name="price-5" />
                                        <label htmlFor="price-5">500.000đ - 800.000đ</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-size">
                            <h3>Kích thước</h3>
                            <div className="product-body-filter-size-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="size-1" name="size-1" />
                                        <label htmlFor="size-1">XS</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-2" name="size-2" />
                                        <label htmlFor="size-2">S</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-3" name="size-3" />
                                        <label htmlFor="size-3">M</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-4" name="size-4" />
                                        <label htmlFor="size-4">L</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="size-5" name="size-5" />
                                        <label htmlFor="size-5">XL</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-color">
                            <h3>Màu</h3>
                            <div className="product-body-filter-color-list">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="color-1" name="color-1" />
                                        <label htmlFor="color-1">Đỏ</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-2" name="color-2" />
                                        <label htmlFor="color-2">Xanh lam</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-3" name="color-3" />
                                        <label htmlFor="color-3">Xanh lá</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-4" name="color-4" />
                                        <label htmlFor="color-4">Vàng</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="color-5" name="color-5" />
                                        <label htmlFor="color-5">Đen</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-body-filter-button">
                            <button type="submit" className="btn btn-cart">
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
                                    className="product-body-list-item"
                                >
                                    <div className="product-body-list-item-image">
                                        <img src={product.image} height="80" alt="" />
                                    </div>
                                    <div className="product-body-list-item-title">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="product-body-list-item-discount">
                                        <p>Giảm {product.discount}%</p>
                                    </div>
                                    <div className="product-body-list-item-price">
                                        <h4>
                                            <span>{product.price}.000đ</span> {totalsale}đ
                                        </h4>
                                    </div>
                                    <div className="product-body-list-item-button">
                                        <button className="btn btn-cart">Đặt mua</button>
                                        <button className="btn btn-cart">Xem chi tiết</button>
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

export default Search;
