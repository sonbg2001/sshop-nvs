function Admin() {
    return (
        <section id="dashboard" className="dashboard product">
            <div className="dashboard-container">
                <div className="dashboard-title">
                    <h1 className="heading">Dashboard</h1>
                </div>
                <div className="dashboard-content">
                    <div className="dashboard-content-item">
                        <h3>Total</h3>
                        <span>$0</span>
                    </div>
                    <div className="dashboard-content-item">
                        <h3>Products</h3>
                        <span id="products-count"></span>
                    </div>
                    <div className="dashboard-content-item">
                        <h3>Orders</h3>
                        <span>6</span>
                    </div>
                    <div className="dashboard-content-item">
                        <h3>Customers</h3>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;
