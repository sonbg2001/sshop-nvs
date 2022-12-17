import { useState } from 'react';

function Account() {
    // function img_pathUrl(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         // reader.onload = function (e) {
    //         //     $('#product-image-preview').attr('src', e.target.result);
    //         // }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // };
    const [avatar, setAvatar] = useState('');
    return (
        <section id="login" className="login">
            <div className="login-container">
                <div className="login-content account">
                    <div className="login-header">
                        <h1>Thông tin tài khoản</h1>
                    </div>
                    <div className="login-form">
                        <form action="/">
                            <div className="form-group">
                                <label htmlFor="name">Tên khách hàng</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tên"
                                    onChange={(e) => {
                                        // setname(e.target.value);
                                    }}
                                    readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        // setemail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Phone number"
                                    onChange={(e) => {
                                        // setphone(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <select name="calc_shipping_provinces" required="">
                                    <option value="">Tỉnh / Thành phố</option>
                                    <option value="">Hà Nội</option>
                                </select>
                                <select name="calc_shipping_district" required="">
                                    <option value="">Quận / Huyện</option>
                                    <option value="">Hà Đông</option>
                                </select>
                                <select name="calc_shipping_district" required="">
                                    <option value="">Quận / Huyện</option>
                                    <option value="">Mỗ lao</option>
                                </select>
                                <input name="" type="hidden" value="" />
                                <input name="" type="hidden" value="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adressnote">Thông tin địa chỉ chi tiết</label>
                                <input
                                    type="adressnote"
                                    className="form-control"
                                    id="adressnote"
                                    placeholder="Chi tiết địa chỉ"
                                    onChange={(e) => {
                                        // setadressnote(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Ảnh</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="avatar"
                                    onChange={(e) => {
                                        setAvatar(URL.createObjectURL(e.target.files[0]));
                                    }}
                                />
                                <img src={avatar} alt="" style={{ height: '150px' }}></img>
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

export default Account;
