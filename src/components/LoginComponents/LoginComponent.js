import React from 'react';
import {Link} from 'react-router-dom';
import "../../assets/sass/LoginComponents/LoginComponent1.scss";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-container__box">
        <img src={require('../../assets/images/png/iconfinder-videologoplayicon-3993847_112649.png')} alt="logo" />
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <span><Link>Forgot Password ?</Link></span>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
