import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NoteList from './components/NoteList';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NoteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
