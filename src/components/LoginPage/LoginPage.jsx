import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      // Successful login
      navigate('/beranda');
    } else {
      // Failed login
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="logo-container">
          <img src="./src/assets/Images/Icon/director-logo.svg" alt="Chill Logo" />
          <h1>CHILL</h1>
        </div>
        <h2 className="title">Masuk</h2>
        <p>Selamat datang kembali!</p>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Masukkan username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Kata Sandi</label>
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={`./src/assets/Images/Icon/${passwordVisible ? "eye-slash-icon.png" : "eye-icon.png"}`}
                className="toggle-password"
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="actions">
            <Link to="/register">Belum punya akun? <span className="bold-text">Daftar</span></Link>
            <Link to="#"><span className="forget-pass">Lupa kata sandi?</span></Link>
          </div>
          
          {/* Combined Submit button for form handling */}
          <button type="submit" className="button-style">Masuk</button>
          
          <div className="or">Atau</div>
          <button type="button" className="google-login">
            <img src="./src/assets/Images/Icon/google-logo.png" alt="Google Logo" className="google-logo" />
            Masuk dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
