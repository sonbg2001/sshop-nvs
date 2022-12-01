import request from '~/utils/request';
import { useEffect, useState } from 'react';
// import * as userService from '~/apiService/userService';
function AdminCustomer() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        request
            .get('users', {})
            .then(function (response) {
                console.log(response.data);
                setListUser(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        // const fetchApi = async () => {
        //     const result = await userService.user();
        //     setListUser(result);
        // };
        // fetchApi();
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
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
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
