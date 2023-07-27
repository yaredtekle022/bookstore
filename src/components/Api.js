import axios from 'axios';

const id = 'bodXzZRlsC11DoxzMf4e';

const api = axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}`,
});

export default api;
