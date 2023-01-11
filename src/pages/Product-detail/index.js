//scss
import './Productdetail.scss';

//Lib
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatCash } from '~/components/Format';
import configPaths from '~/routes/configPaths';
import datafetch from '~/datafetch';
function ProductDetail() {
    const [product, setProduct] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);
    let { id } = useParams();

    function handleAddToCart() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            alert('Đã thêm vào giỏ hàng');
            let cart = [];
            cart = JSON.parse(localStorage.getItem('cart'));
            if (!cart) {
                cart = [{ product, productQuantity }];
            } else {
                let check = true;
                for (let item of cart) {
                    if (item.product.id === product.id) {
                        let d = Number(item.productQuantity) + Number(productQuantity);
                        check = false;
                        item.productQuantity = d;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        break;
                    }
                }
                if (check) cart.push({ product, productQuantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            if (window.confirm('Đăng nhập để thêm vào giỏ hàng?')) window.location.assign('/login');
        }
    }

    useEffect(() => {
        setProduct(datafetch.getProductById(id));

        // eslint-disable-next-line
    }, []);

    return (
        <section className="product-detail">
            <div className="product-detail-container">
                <div className="product-top">
                    <div className="product-top-title">
                        <h3 className="heading-page">
                            <a href={configPaths.products}>Sản phẩm</a> / <span>Chi tiết sản phẩm</span>
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
                        <p style={{ color: 'red' }}>Giá gốc: {formatCash(product.price + '')}đ</p>
                        <p>Giá sale: {formatCash((product.price * (100 - product.discount)) / 100 + '')}đ</p>
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
                            <Link to={'/cart'}>
                                <button className="btn btn-active" onClick={handleAddToCart}>
                                    Mua ngay
                                </button>
                            </Link>
                            <button className="btn btn-cart" onClick={handleAddToCart}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment-container">
                <div className="comment-title">
                    <h1 className="comment-heading">Bình luận (haha)</h1>
                    <i className="fa-solid fa-comments" />
                </div>

                <div className="comment-submit">
                    <img
                        className="comment-submit-img"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAfAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAGBwAEBQMBAgj/xAA7EAACAQMCAwUGBAUCBwAAAAABAgMABBEFEiExQQYTIlFhFDJxgZGhByOx0UJSweHwJKIVM0NTY3OC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAAEF/8QAIREAAgICAgMBAQEAAAAAAAAAAAECEQMhEjEiMkFRYRP/2gAMAwEAAhEDEQA/AGxUqVKxiV8TSpBC80rbUjUsx8gK+6FPxE1P2PRxaRn826O08eO0cTWML3WtZub69uJzNIu9t2AxGB0FYMl9c5P+om4f+Q193T459azu93MfjXTHtxe3QIAuZwf/AGt+9ewzXjkAXM/E/wDdb965uneXBwOAFb2iWay3EYA5kfrQSdIKKtmleaXNFpu72icSBAf+Yf3rL9mvBbxyd/P4uneH96PtcjRbdU/mXGKzXtEjt7ddvJsf7aTHIymWJAxG9ygI76bcBnG88aKOwmtyWesrbXMrNb3Y2+I5Afof6fOsC7Iiuivlmqwfup0ZGKlG4Hy8qenZNJUPqpVLRr0ajpdtdr/1EBYeTcj96u10ElSpUrGJUqVKxiUou3OpNf6tM4P5MJMUXrjmfrTT1S5Fpp1zcE42RMQfXHCkrqEqTLsjJ4dKxgdvZOfrVFX8a+hqxqQKyYPCqGfED61jF7vArAjPAF2/QUW9hY2mnWWTOC2F+VCdvbvNG0aKXeTHAeVGmgQarYiHNgAg5EuBnNIyPVFGGO7CDtUxRYmHHCNj7VLtcW8bDpKPptxVfXEu79IUSE8xu415fG59kW2iiJkxwz9KRZW0Duvx91cGXOBuGD/8g1mPKWY4xWzq+n3UzOl7qFvGSAe6XmPLP2oWWRoZu7k5r4TVWNkWVbHN+Gl53+jSW5I/Jfhx5A8f3owpb/hRKe9u4yeGwH7/AN6ZFGhJKlSpXTEqVKlYwEfibqfcaatnG2GkbxAHmAM/1H19KUxuSjbgTzoq7e3clxqk5J8KnulAPIDifuaDkjMr4PuL73wrGOOpS97Ip5ZUYqiq7pUQc2YCrlwN7PKfcAwBVS0bfqMA5bnAPoKGwktm7Z6TqU4Sa3Zo4ZZNu9feCjhmi3szoWtW9xK17eMY1jxB+cWEhzwJB5DGfKtjs3FkRwiEqEUDxrgD5daLYrXaAe8Cn0QYqWWVvsu/zjGmcrK0KIvegEsPpVO/07vzMqM8ZIwHTmvqK0Zrk25DOQ6ZAO0YYZOPgefp865z3axyhlRmLkBQw25JOOtL/odt9gAvY1ls54Z3NxLJKGMm3BUDPI/OhDtdFFYatHCgxiMZPnxp3TxII2MpVyBxBzt+lJ/tJtn1q4SPCxo23CDaDVGFuUhGeCUNG7+FWoLHriwu2O9jZRnz54pxCkXoBSfV7K2hiMM8BC98r8SQMjgBwwfjTtspWmtIpHGHK+IDlnr96eiRqjvUqVK6cJUqV4xwKxhJdsoJI9VukIOO+bH+fKsZbfZHtPAnixPSjPt0IW16Tu8EYRiR54NC0ybwy58PU/0FC2GkDF8+fDxCDlWbFNtugc8v1NXdZfuiRjjyFYZYgeuc1jXTHl2Iuv8ARoDnOd2Pj/fNHMbd4MZpO/h7rsMkQtLlgsqEYycZ+FM6OZjGGgLNw/mNRTjTPTjJTiqPrUUuZJo47dO8UOGcgjoQQPtXt0t5czxHuO6WMhgxbgTnODjpWZcavqMZ2WwtY8e9uBJ/tXxDqeqTSt380HddVWPl880A54JqHJ9FvX9WjtLCaZiFKITtchePlk8PnSmS6CHvZLiO4uZDu2xeJASebMOB+AJ9fI9fxG7TrqVz/wALs3328TZmccnYdB6D9ax7JQrgnh4asxR4o8zNk5SpfAk7IF1vxLxJR8nzPr/nnTy0lg9jGy8myRSV7JLiZnI604ezMm7RoAfeQFD8QaYuxD6NWpUqUQJKoXdzuQiP3eWQfe9B+9e3NwXk7mFS7H+HpjzJ6D/OND3bDWYdG0+SLvRJqMy7FRT7i9TjoPL40LCSF/2p1EHUJWRgxzzofa5YRNJngBwrjqUxLZfiTz+tUru42IOGQTn9RWCbMzUd0nM5O7jVArk1oXJWSAMjDcp8Q64rlBD3q4HPoaxyi/2e0yW7ux3LlGUZDCmxod7e6Ygi1FDJEOG9Rkj96Aex0vs8+xlXxHHi/hNN3TVW5tcMmDywajyydl+BJRPqTUdEmjEszQtw4l14igftp2mtLmwubHQpCjYALqhXIPMKf6/SiXVtLLhgvI0utb0mXTp+8I4H04Y/zNDipy2FmcuOugKeMRy7fKt6P3o8EDhisW7H5zFhjJPDyq9bzbkGTxFXHnfQ67MDgrcNgkXdnljlTU7LuBDNDn3X6/DB+4NJzQr0221W4o/hb065pl9lLxfbAVcFZlI59ef70P0JrQbVK8U5Fe0wUK7Ue0F8WeG0WZe9cqpQeOVs44dfThQhfJMZ5JJ5zKwbbuDFtzdQD1+Nat9eTW+qXVwTtmcvHEeGUXJU48uHD5ms8Sx2sftMvNBiLP8AN5/KhYxL9MnUI0tYu7nAM5ILH+QeXxrJv0ILKejYrV07T5+0GqKiglM8fh+5r67V2trpl5cWUTBxlSjA8F4eIfXl8aDlug+OrBCTKtwrrazdy5yOfnXzIASfjWpZ2EcmnvO6hQ2cN8OvpRN0gUrLelXEZudwBG4YZTTg7JXq3NmqkjvU97HWkXZyKjhQTwbwnlTH7H35t7yNXPhkGKnzR+lGGXwZNxGsiZpc9tZwImVcFs4Xhyxw/XP1piGTdASnMjAHqaV3b4tb3ciqPdCYyeg/vScfsPk/Fi/v0KtljkkZNfFrneg6Zq97CVVJJX3BwGG3mTjlXK8j9mQA8GIyMVamQtGvYzlxhW2sMYI6EUYdldUZNWhiYBFkY8Me4xHT0zS702crIATzokimaKaC5jPjjYMPlXWjI/QFrJ3kKN1I413oe7Mag97ad4+3Bxjby5A/1ogU5UV1MU1TEFrtykmrXEkRLLvbaMcskk/rWfJcW1zNHDNMUiHAsVJx61a1Fdt5MQMEyNw+ZrR0/Rrm5CWYCRrIA8mE8WDyGT+gx86GUkh0Itlay1mDSpJl0tWkSXkxGCDjjQhq9zLNeSNLneT4jjjmmpdWmm6BZbI7VJ534HIBwfMseXwFCOodk75xDdzbEkuCWWLb7vxpUZLsdKEqoEBaNIQx7xIT/EwrvavMY/ZVkBjGQAelHMOn3dhbu2qW3fgj+HByMYpfajH3V84ty23vPAOoFGpcgJR4bOV5A9jOEPQD50edlW9u0yAhiJUOwH9D9R9qA7h5HYiQkkUQdjdTW0njikcKpkDgnpwNbIricxtKQ5dPmN3p5jc7JCu1jjO0+dCna+zaSRZp1EgMbxzFRyHQ/YUUwKrQR3Nq6lyOI6MPKsu+23CTxJG6nYcjbyOOvrj61NFNOyhyj+itheaeyjsIUJeL8x2x/CBisKWV5mdpCS2ep5Ciq6LQaobyw24WJWKAe8MeIH6GhudFN0zxn8t/Fgfw56VVElnR5bHEg6VtWNw5Oxjy5VkRQsYGfh4WA+1adknfHng0TBj2HnZbtVLo6rBLGZbctnYOan0pqaRqtpqtmtzbyqBnayOdrI3kR50lYNOnBjjaIq0mNu7qaZOi2E81ir6qqzznADB9mFAAAIA5+vrQqaQUoPsARbxzak3fRnJuM5zzXPLFEpt5o77bbhg8w8bZwUXjjHlxH2rypSsj2U41o09K0WGfF1OmVQbEUkkcDxPzPnmruoW8c/jKbgjZx6Ag15UpNjD2/tU7g5AIIxjHCkr2usUh1F2jO0g1KlFjfkLyeoPyxFyHwduPrXeKwuEX2iNWKRgFjj3R55qVKrjsjm6GJ+HOqtqMMtk0irNBx7vluXjgj6n7UR6lp1wp9ojmUEcsKfEOeDx6dPj8alSmx6JpewDa3YLazCVdwzzLeWf3rI1PsxeCIXNlEzoQSy5BK/Dzr2pQVsbejHntLuyYpPGYyRkeR+B61ZsJdq+oqVKFoZBhzpusR3cVmGAE0G5yT1CqcffFN63AEfAYHlUqUhrZS34n/9k="
                        alt="avatar"
                    />
                    <input className="comment-input" type="text" placeholder="Viết bình luận..." />
                    <button>Gửi</button>
                </div>
                <ul className="comment-list">
                    <li className="comment-list-item">
                        <img
                            className="comment-list-item-img"
                            src="https://scontent.fhan16-1.fna.fbcdn.net/v/t39.30808-6/324246364_1414429759303783_1812319813689082977_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FwLFbxenfNkAX-OHmIK&_nc_ht=scontent.fhan16-1.fna&oh=00_AfDQVb_gUHGrovaoLjrtcM6Y7TbEQOwbF0USTrO5vKrCrg&oe=63BD6179"
                            alt="avatar"
                        />
                        <div className="comment-list-item-show">
                            <div className="comment-list-item-heading">
                                <strong className="comment-user">
                                    Nguyễn Văn Sơn
                                    <div className="comment-user-star">
                                        <i style={{ color: 'black', fontWeight: '400', fontStyle: 'italic' }}>
                                            Đánh giá :{' '}
                                        </i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </strong>

                                <i className="comment-time">12/02/2002</i>
                            </div>

                            <span className="comment-list-item-content">Giày đẹp nhưng mà xấu!!!</span>
                        </div>
                    </li>
                    <li className="comment-list-item">
                        <img
                            className="comment-list-item-img"
                            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                            alt="avatar"
                        />
                        <div className="comment-list-item-show">
                            <div className="comment-list-item-heading">
                                <strong className="comment-user">
                                    Bố Nguyễn Văn Sơn
                                    <div className="comment-user-star">
                                        <i style={{ color: 'black', fontWeight: '400', fontStyle: 'italic' }}>
                                            Đánh giá :{' '}
                                        </i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </strong>
                                <i className="comment-time">12/02/2002</i>
                            </div>

                            <span className="comment-list-item-content">
                                Giày xấu vãi, giao hàng thì lâu, mọi người không nên mua nha :)
                            </span>
                        </div>
                    </li>
                    <li className="comment-list-item">
                        <img
                            className="comment-list-item-img"
                            src="data:image/jpeg;base64,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"
                            alt="avatar"
                        />
                        <div className="comment-list-item-show">
                            <div className="comment-list-item-heading">
                                <strong className="comment-user">
                                    Mẹ Nguyễn Văn Sơn
                                    <div className="comment-user-star">
                                        <i style={{ color: 'black', fontWeight: '400', fontStyle: 'italic' }}>
                                            Đánh giá :{' '}
                                        </i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </strong>
                                <i className="comment-time">12/02/2002</i>
                            </div>

                            <span className="comment-list-item-content">
                                Minigame kiểm tra giới thính nè! Ai giới tính nữ ấn like tay trái, ai giới tính nam ấn
                                like tay phải, ai giới tính thứ 3 thì click like 3 lần luôn nha!
                            </span>
                        </div>
                    </li>
                    <li className="comment-list-item">
                        <img
                            className="comment-list-item-img"
                            src="https://scontent.fhan16-1.fna.fbcdn.net/v/t39.30808-1/305621663_1228299661292235_6111961428458437926_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EpMqG1LWXRAAX-93C5J&_nc_ht=scontent.fhan16-1.fna&oh=00_AfDoyflohuqm4U6qiKe67hf5NOVU8F-r5kmL1HUhFqJ97w&oe=63BDF5A1"
                            alt="avatar"
                        />
                        <div className="comment-list-item-show">
                            <div className="comment-list-item-heading">
                                <strong className="comment-user">
                                    Em gái Nguyễn Văn Sơn
                                    <div className="comment-user-star">
                                        <i style={{ color: 'black', fontWeight: '400', fontStyle: 'italic' }}>
                                            Đánh giá :{' '}
                                        </i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star-half-stroke"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </strong>
                                <i className="comment-time">12/02/2002</i>
                            </div>

                            <span className="comment-list-item-content">
                                Minigame kiểm tra giới thính nè! Ai giới tính nữ ấn like tay trái, ai giới tính nam ấn
                                like tay phải, ai giới tính thứ 3 thì click like 3 lần luôn nha!
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProductDetail;
