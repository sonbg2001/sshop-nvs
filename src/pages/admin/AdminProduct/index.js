function AdminProduct() {
    return (
        <section id="product" className="product">
            <div className="product-container">
                {true && (
                    <div className="product-add">
                        <div className="product-add-container">
                            <div className="product-add-title">
                                <h1>Thêm sản phẩm</h1>
                                <button className="btn btn-danger">Close</button>
                            </div>
                            <div className="product-add-form">
                                <div className="product-add-form-container">
                                    <div className="product-add-form-title">
                                        <h2>Product Information</h2>
                                    </div>

                                    <div className="product-add-form-input">
                                        <label htmlFor="product-name">Tên sản phẩm:</label>
                                        <input
                                            spellCheck="false"
                                            type="text"
                                            name="product-name"
                                            id="product-name"
                                            placeholder="Enter Product Name"
                                        />
                                    </div>
                                    <div className="product-add-form-input">
                                        <label htmlFor="product-price">Giá:</label>
                                        <input
                                            type="text"
                                            name="product-price"
                                            id="product-price"
                                            placeholder="Enter Product Price"
                                        />
                                    </div>
                                    <div className="product-add-form-input">
                                        <label htmlFor="product-discount">Giảm giá:</label>
                                        <input
                                            type="text"
                                            name="product-discount"
                                            id="product-discount"
                                            placeholder="Enter Product Discount"
                                        />
                                    </div>
                                    <div className="product-add-form-input">
                                        <label htmlFor="product-type">Loại sản phẩm</label>
                                        <select name="product-type" id="product-type">
                                            <option value="">--Loại sản phẩm--</option>
                                            <option value="shirt">Áo</option>
                                            <option value="trousers">Quần</option>
                                            <option value="shoes">Giày</option>
                                        </select>
                                    </div>
                                    <div className="product-add-form-input">
                                        <label htmlFor="product-description">Mô tả: </label>
                                        <textarea
                                            name="product-description"
                                            id="product-description"
                                            placeholder="Mô tả"
                                        ></textarea>
                                    </div>
                                    <div className="product-add-form-input">
                                        <label htmlFor="product-image">Ảnh sản phẩm:</label>
                                        <img
                                            src="https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-16.jpg"
                                            alt=""
                                        />
                                        <input
                                            type="file"
                                            className="product-image"
                                            id="product-image"
                                            // onChange={(e) => {
                                            //     console.log(e.target.files);
                                            //     setAvatar(URL.createObjectURL(e.target.files[0]));
                                            // }}
                                        />
                                    </div>
                                </div>
                                <div className="product-add-form-button">
                                    <button className="btn btn-primary" name="add-product" id="add-product">
                                        Thêm sản phẩm
                                    </button>
                                    <button className="btn btn-green">Update Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="product-header">
                    <h1 className="heading">Product</h1>
                    <button className="btn btn-primary">Thêm sản phẩm</button>
                </div>
                <div className="product-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Giảm giá</th>
                                <th>Chỉnh sửa</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>
                                    <img
                                        className="product-table-img"
                                        src="https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-16.jpg"
                                        alt=""
                                        height="40"
                                    />
                                </td>
                                <td>Mô tả</td>
                                <td>giá</td>
                                <td>giảm 3%</td>
                                <td>
                                    <button className="btn btn-danger">Chỉnh sửa</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Xoá</button>
                                </td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>
                                    <img
                                        className="product-table-img"
                                        src="https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-16.jpg"
                                        alt=""
                                        height="40"
                                    />
                                </td>
                                <td>Mô tả</td>
                                <td>giá</td>
                                <td>giảm 3%</td>
                                <td>
                                    <button className="btn btn-danger">Chỉnh sửa</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Xoá</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminProduct;
