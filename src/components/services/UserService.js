import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Update with your API URL

const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, {
    username: user.username,
    password: user.password
  });
};

const findUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export { registerUser, findUserById };