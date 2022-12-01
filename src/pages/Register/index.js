function Register() {
    return (
        <section id="login" class="login">
            <div class="login-container">
                <div class="login-content">
                    <div class="login-header">
                        <h1>F-Shop</h1>
                    </div>
                    <div class="login-form">
                        <form method="get" action="login.html">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" />
                            </div>

                            <div class="form-group form-group-button">
                                <button id="btn-register" type="submit" class="btn btn-login" value="Register">
                                    Register
                                </button>
                            </div>
                            <div class="form-group form-group-link form-group-link-register">
                                <a href="/login">If you have an account? Go to login page</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
