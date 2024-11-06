import axios from 'axios';


const API_URL = 'http://127.0.0.1:8080'; // Update with your API URL

const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, {
    username: user.username,
    password: user.password
  });
};

const findUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const logout = () => {
   return axios.post("http://127.0.0.1:8080/logout", { logout: true }, { withCredentials: true });

}

export { registerUser, findUserById, logout };