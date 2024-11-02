import React, {useState} from "react";
import { registerUser } from "../services/UserService";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await registerUser({ username, password });
            alert('Note updated successfully');
        }
        catch (error){
            alert('An error occurred: ' + error.message);
        }
    }
  
    return (
  <div className="d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h1 className="mb-4 text-center">Регистрация</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">Логин</label>
              <input type="text" className="form-control" value={username} name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Введите логин"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль:</label>
              <input type="password" className="form-control" value={password} name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль"/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary text-center">Зарегистрироваться</button>
              <p className="mt-3">
              Уже есть аккаунт? <a href="/login">Войти</a>
            </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default Register;
  