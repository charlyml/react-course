import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4f2cb.firebaseio.com/'
});

export default instance;