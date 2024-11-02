function Register() {
  
    return (
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <h1 class="mb-4 text-center">Регистрация</h1>
          <form method="post" action="/login">
            <div class="mb-3">
              <label for="login" class="form-label">Логин</label>
              <input type="text" class="form-control" id="username" name="username" placeholder="Введите логин"/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Пароль:</label>
              <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль"/>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary text-center">Зарегистрироваться</button>
              <p class="mt-3">
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
  