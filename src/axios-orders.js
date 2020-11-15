import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6a79e.firebaseio.com/'
});

export default instance;