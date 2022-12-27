import { useState } from 'react';
import { getUsersByParams } from '~/utils';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e) {
        getUsersByParams({ username, password })
            .then(function (data) {
                let user = null;
                if (data.length > 0) {
                    user = data[0];

                    localStorage.setItem('user', JSON.stringify(user));

                    alert('Đăng nhập thành công');
                    if (user.role === 'admin') {
                        window.location.assign('http://localhost:3001/admin');
                    } else {
                        window.location.assign('http://localhost:3001');
                    }
                } else {
                    alert('Sai thông tin đăng nhập');
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <section id="login" className="login">
            <div className="login-container">
                <div className="login-content">
                    <div className="login-header">
                        <h1>S-Shop</h1>
                    </div>
                    <div className="login-form">
                        <form action="/" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <input
                                    spellCheck="false"
                                    value={username.trim()}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    value={password}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group form-group-button">
                                <button id="btn-login" type="submit" className="btn btn-login" value="Login">
                                    Login
                                </button>
                            </div>
                            <div className="form-group form-group-link">
                                <a href="/register">Tạo tài khoản mới mới</a>
                                <a href="/">Quên mật khẩu?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
