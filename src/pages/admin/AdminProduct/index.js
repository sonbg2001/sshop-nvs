function AdminProduct() {
    // return HTMLHeadElement;
    return (
        <section id="product" classNameName="product">
            <div className="product-container">
                <div className="product-add">
                    <div className="product-add-container">
                        <div className="product-add-title">
                            <h1>Add Product</h1>
                            <button className="btn btn-danger" onclick="closeForm()">
                                Close
                            </button>
                        </div>
                        <div className="product-add-form">
                            <div className="product-add-form-container">
                                <div className="product-add-form-title">
                                    <h2>Product Information</h2>
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-id">Product ID</label>
                                    <input
                                        type="text"
                                        id="product-id"
                                        name="product-id"
                                        placeholder="Product ID"
                                        readonly
                                    />
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-name">Product Name</label>
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        placeholder="Enter Product Name"
                                    />
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-price">Product Price</label>
                                    <input
                                        type="text"
                                        name="product-price"
                                        id="product-price"
                                        placeholder="Enter Product Price"
                                    />
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-discount">Product Discount</label>
                                    <input
                                        type="text"
                                        name="product-discount"
                                        id="product-discount"
                                        placeholder="Enter Product Discount"
                                    />
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-type">Product Type</label>
                                    <select name="product-type" id="product-type">
                                        <option value="">Select Product Type</option>
                                        <option value="shirt">Áo</option>
                                        <option value="trousers">Quần</option>
                                        <option value="shoes">Giày</option>
                                    </select>
                                </div>
                                <div className="product-add-form-input">
                                    <label for="product-description">Product Description</label>
                                    <textarea
                                        name="product-description"
                                        id="product-description"
                                        placeholder="Enter Product Description"
                                    ></textarea>
                                </div>
                                {/* <div className="product-add-form-input">
                                    <label for="product-image">Product Image</label>
                                    <img
                                        src=""
                                        style="height:60px"
                                        alt="product-image-preview"
                                        id="product-image-preview"
                                    />
                                    <input
                                        type="file"
                                        name="product-image"
                                        id="product-image"
                                        onChange="img_pathUrl(this)"
                                    />
                                </div> */}
                            </div>
                            <div className="product-add-form-button">
                                <button
                                    className="btn btn-primary"
                                    name="add-product"
                                    id="add-product"
                                    onclick="addItem()"
                                >
                                    Add Product
                                </button>
                                <button className="btn btn-green" onclick="updateItem()">
                                    Update Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-header">
                    <h1 className="heading">Product</h1>
                    <button className="btn btn-primary" onclick="openForm()">
                        Add Product
                    </button>
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
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody id="product-body-list"></tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminProduct;
