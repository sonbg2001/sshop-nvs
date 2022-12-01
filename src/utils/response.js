import axios from 'axios';

const response = axios.create({
    method: 'post',
    baseURL: 'http://localhost:3000/',
});

export default response;
