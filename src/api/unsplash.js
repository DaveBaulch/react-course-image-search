import axios from 'axios';

// creates a customized axios instance
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
  }
});
