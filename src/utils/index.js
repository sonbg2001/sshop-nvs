import request from './request';

export function getUser(params) {
    return request
        .get('users', {
            params,
        })
        .then(function (response) {
            return response.data[0];
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return {};
        });
}
