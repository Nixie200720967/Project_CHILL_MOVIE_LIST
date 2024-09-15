import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
        <form id="loginForm">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Masukkan username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Kata Sandi</label>
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Masukkan kata sandi"
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
            <a href="/register">Belum punya akun? <span className="bold-text">Daftar</span></a>
            <a href="#"><span className="forget-pass">kata sandi?</span></a>
          </div>
          <button type="submit">Masuk</button>
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
