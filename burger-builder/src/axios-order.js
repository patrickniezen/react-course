import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burder-builder-18d12.firebaseio.com/'
});

export default instance;