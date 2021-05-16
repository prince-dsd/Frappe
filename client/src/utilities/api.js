import axios from 'axios';

let baseURL = 'https://build-frappe.herokuapp.com/api/v1';
if (process.env.REACT_APP_DEVELOPMENT === 'dev') baseURL = 'http://localhost:3000/api/v1';
console.log(baseURL);
const api = axios.create({
  baseURL,
  timeout: 10000,
});

export default api;
