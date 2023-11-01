import axios from 'axios';

const http2 = axios.create({
    baseURL: process.env.REACT_APP_SERVER2,
    timeout: 30000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY2}`
    }
});

export default http2;