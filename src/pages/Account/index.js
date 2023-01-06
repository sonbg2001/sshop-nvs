import { useState } from 'react';
import datafetch from '~/datafetch';
function Account() {
    const [avatar, setAvatar] = useState('');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    function handleSubmit(e) {
        console.log(user);
        setUser(JSON.parse(localStorage.getItem('user')));
        datafetch.editUser(user);
        alert('Cập nhật thành công!!');
        window.location.assign('/');
        e.preventDefault();
    }
    return (
        <section id="login" className="login">
            <div className="login-container">
                <div className="login-content account">
                    <div className="login-header">
                        <h1>Thông tin tài khoản</h1>
                    </div>
                    <div className="login-form">
                        <form action="/" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Tên khách hàng</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="name"
                                    placeholder={user.name}
                                    onChange={(e) => {
                                        user.name = e.target.value;
                                    }}
                                    // readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder={user.email}
                                    onChange={(e) => {
                                        user.email = e.target.value;
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder={user.phone}
                                    onChange={(e) => {
                                        user.phone = e.target.value;
                                        console.log(user);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <select name="calc_shipping_provinces" required="">
                                    <option value="">Tỉnh / Thành phố</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Bắc Giang">Bắc Giang</option>
                                </select>
                                <select name="calc_shipping_district" required="">
                                    <option value="">Quận / Huyện</option>
                                    <option value="Hà Đông">Hà Đông</option>
                                </select>
                                <select name="calc_shipping_district" required="">
                                    <option value="">Thị trấn / Xã</option>
                                    <option value="Mỗ lao">Mỗ lao</option>
                                </select>
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
                                        // user.avatar = e.target.value;
                                        setAvatar(URL.createObjectURL(e.target.files[0]));
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Link ảnh"
                                    onChange={(e) => {
                                        user.avatar = e.target.value;
                                        setAvatar(e.target.value);
                                    }}
                                />
                                <img src={avatar} alt="" style={{ height: '150px' }}></img>
                            </div>
                            <div className="form-group form-group-button">
                                <button id="btn-login" type="submit" className="btn btn-login" value="update">
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;
