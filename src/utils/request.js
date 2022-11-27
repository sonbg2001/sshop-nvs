import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

// export const get = async () => {

// }

export default request;
