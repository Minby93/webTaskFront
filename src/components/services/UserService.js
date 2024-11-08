import axios from 'axios';


const BACK_URL = process.env.REACT_APP_BACK_URL; // Update with your API URL

const registerUser = (user) => {
  console.log(process.env.REACT_APP_BACK_URL);
  return axios.post(BACK_URL+"/register", {
    username: user.username,
    password: user.password
  });
};

const findUserById = (id) => {
  return axios.get(`${BACK_URL}/${id}`);
};

const logout = () => {
   return axios.post(BACK_URL+"/logout", { logout: true }, { withCredentials: true });

}

export { registerUser, findUserById, logout };