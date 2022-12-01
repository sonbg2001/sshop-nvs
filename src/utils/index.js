import axios from 'axios';

export const request = axios.create({
    method: 'get',
    baseURL: 'http://localhost:3000/',
});

export const getProductById = axios
    .get('http://localhost:3000/products/1', {
        params: {},
    })
    .then(function (response) {
        console.log(response);
        return response.data;
    })
    .catch(function (error) {
        console.log('Lỗi getProductById');
    });
