function Login() {
    return (
        <section id="login" class="login">
            <div class="login-container">
                <div class="login-content">
                    <div class="login-header">
                        <h1>S-Shop</h1>
                    </div>
                    <div class="login-form">
                        <form method="get" action="">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" />
                            </div>
                            <div class="form-group form-group-button">
                                <button id="btn-login" type="submit" class="btn btn-login" value="Login">
                                    Login
                                </button>
                            </div>
                            <div class="form-group form-group-link">
                                <a href="register.html">Create an account</a>
                                <a href="#">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
