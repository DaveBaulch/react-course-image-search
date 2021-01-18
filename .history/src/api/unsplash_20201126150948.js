import axios from 'axios';

// creates a customized axios instance
axios.create({
  baseURL: 'https://api.unsplash.com/search/photos/',
  headers: {
    Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
  }
});
