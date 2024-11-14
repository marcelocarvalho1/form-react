import "./Login.scss";
function Login() {
  return (
    <div className="loginContainer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hazqQOpCvwu3T4c-2BmDJFxMSykokLZrDQ&s"
        alt="logo"
        className="login-logo"
      />
      <h2> Bem-vindo!</h2>
      <form>
        <input type="email" id="email" placeholder="E-mail" />

        <input type="password" id="password" placeholder="Senha" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
