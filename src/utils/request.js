import axios from 'axios';

const request = axios.create({
    method: 'get',
    baseURL: 'http://localhost:3000/',
});

export default request;
