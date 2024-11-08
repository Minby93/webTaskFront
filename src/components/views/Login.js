import React, { useEffect, useState } from 'react';

function Login() {
  const [error, setError] = useState(false);

  useEffect(() => {
    // Проверка параметров URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error')) {
      setError(true);  // Устанавливаем ошибку, если есть параметр error
    }
  }, []);

  const LOGIN_API_URL = process.env.REACT_APP_LOGIN_BACK_URL;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h1 className="mb-4 text-center">Авторизация</h1>
            {/* Форма для входа */}
            <form method="post" action={LOGIN_API_URL}>
              <div className="mb-3">
                <label htmlFor="login" className="form-label">Логин</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Введите логин"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                />
              </div>
              {error && (
                <div className="alert alert-danger mt-3">
                  Неверный логин или пароль
                </div>
              )}
              <div className="text-center">
                <button type="submit" className="btn btn-primary text-center">Войти</button>
                <p className="mt-3">
                  Нет аккаунта? <a href="/registration">Регистрация</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
