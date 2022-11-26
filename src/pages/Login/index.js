function Login() {
    return (
        <section id="login" className="login">
            <div className="login-container">
                <div className="login-content">
                    <div className="login-header">
                        <h1>S-Shop</h1>
                    </div>
                    <div className="login-form">
                        <form method="get" action="">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group form-group-button">
                                <button id="btn-login" type="submit" className="btn btn-login" value="Login">
                                    Login
                                </button>
                            </div>
                            <div className="form-group form-group-link">
                                <a href="register.html">Create an account</a>
                                <a href="/">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
