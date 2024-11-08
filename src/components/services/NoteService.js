import axios from 'axios';

const API_URL = process.env.REACT_APP_BACK_URL + '/note'; // Update with your API URL

const addNote = (note) => {
  return axios.post(`${API_URL}/add`, note, {
    withCredentials: true
  });
};

const updateNote = (note) => {
  return axios.put(API_URL, note, {
    withCredentials: true
  });
};

const deleteNote = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    withCredentials: true
  });
};

const getNoteById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const getNotes = () => {
  return axios.get(API_URL, {
    withCredentials: true
  });
};

export { addNote, updateNote, deleteNote, getNoteById, getNotes };