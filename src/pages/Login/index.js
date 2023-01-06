import { useState } from 'react';
import { Link } from 'react-router-dom';
import datafetch from '~/datafetch';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e) {
        let user = datafetch.getUserByUsernameAndPassword(username, password);
        if (user.id) {
            localStorage.setItem('user', JSON.stringify(user));
            alert('Đăng nhập thành công');
            if (user.role === 'admin') {
                window.location.assign('/admin');
            } else {
                window.location.assign('/');
            }
        } else {
            alert('Sai thông tin đăng nhập');
        }

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
                                    placeholder="Tên đăng nhập"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    value={password}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group form-group-button">
                                <button id="btn-login" type="submit" className="btn btn-login" value="Login">
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="form-group form-group-link">
                                <Link to="/register">Tạo tài khoản mới mới</Link>
                                <Link to="/">Quên mật khẩu?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
