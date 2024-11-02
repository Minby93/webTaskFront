import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './components/views/Login';
import Register from './components/views/Register';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<NoteList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
