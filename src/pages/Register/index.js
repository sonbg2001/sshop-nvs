import { useState } from 'react';
import { getUsersByParams, addUser } from '~/utils';
import configPaths from '~/routes/configPaths';
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    function handleRegister(e) {
        if (username && password && repassword) {
            getUsersByParams({ username })
                .then(function (data) {
                    if (data.length > 0) {
                        console.log('Tài khoản đã tồn tại');
                    } else if (repassword !== password) {
                        console.log('Nhập lại mật khẩu không chính xác!!!');
                    } else {
                        addUser({
                            username,
                            password,
                        })
                            .then(function (response) {
                                console.log('Tạo tài khoản thành công, chuyển qua đăng nhập!');
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            });
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        } else {
            alert('Vui lòng nhập đầy đủ thông tin');
            if (!username) document.getElementById('username').focus();
            else if (!password) document.getElementById('password').focus();
            else document.getElementById('repassword').focus();
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
                        <form method="get" action="/" onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    className="form-control"
                                    id="username"
                                    placeholder="Tên đăng nhập"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="form-control"
                                    id="password"
                                    placeholder="Mật khẩu"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="repassword">Nhập lại mật khẩu</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={repassword}
                                    onChange={(e) => {
                                        setRepassword(e.target.value);
                                    }}
                                    id="repassword"
                                    placeholder="Nhập lại mật khẩu"
                                />
                            </div>

                            <div className="form-group form-group-button">
                                <button id="btn-register" type="submit" className="btn btn-login" value="Register">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="form-group form-group-link form-group-link-register">
                                <a href={configPaths.login}>Bạn đã có tài khoản?Chuyển qua đăng nhập</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
