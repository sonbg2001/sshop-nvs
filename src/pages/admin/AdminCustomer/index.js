import { useEffect, useState } from 'react';
import datafetch from '~/datafetch';
function AdminCustomer() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        setListUser(datafetch.getAllUser());
    }, []);

    return (
        <section id="product" className="product">
            <div className="product-container">
                <div className="product-header">
                    <h1 className="heading">Customer</h1>
                </div>
                <div className="product-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser.map((user) => {
                                return (
                                    <tr
                                        onClick={() => {
                                            //Handle click
                                            alert(user.name);
                                        }}
                                        key={user.id}
                                    >
                                        <td>{user.id}</td>
                                        <td>{user.name || '???'}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email || '???'}</td>
                                        <td>{user.phone || '???'}</td>
                                        <td>{user.address || '???'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminCustomer;
