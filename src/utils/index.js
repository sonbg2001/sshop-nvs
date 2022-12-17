import request from './request';

// User
export function getUsersByParams(params) {
    return request
        .get('users', {
            params,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}

export function getUserById(id) {
    return request
        .get('users/' + id)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}

export function addUser(params) {
    return request
        .post('users', params)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}

//Product

// export function getAllProduct() {
//     return request
//         .get('products')
//         .then(function (response) {
//             return response.data;
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//             return {};
//         });
// }
export function getProductsByParams(params) {
    return request
        .get('products', { params })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}

export function getProductById(id) {
    return request
        .get('products/' + id)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}
