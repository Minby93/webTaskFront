import axios from 'axios';

const API_URL = 'http://localhost:8080/note'; // Update with your API URL

const addNote = (note) => {
  return axios.post(`${API_URL}/add`, note);
};

const updateNote = (note) => {
  return axios.put(API_URL, note);
};

const deleteNote = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const getNoteById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const getNotes = () => {
  return axios.get(API_URL);
};

export { addNote, updateNote, deleteNote, getNoteById, getNotes };