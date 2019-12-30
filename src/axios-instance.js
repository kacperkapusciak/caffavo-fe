import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://caffavo.herokuapp.com/'
});

export default instance;