import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/amazon-logo-black.jpeg';
import { useAuth } from '../context/context';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {
    state: { authData, errorMessage },
    signIn,
    signUp
  } = useAuth();

  const login = (e) => {
    e.preventDefault();
    signIn({ email: email, password: password });
    if (authData.token) {
      navigate('/');
    }
  };

  const register = async (e) => {
    e.preventDefault();
    signUp({ email: email, password: password });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" alt="" src={logo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={(e) => login(e)}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={(e) => register(e)} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
