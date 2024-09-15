import React, { useState } from 'react';
import './RegisForm.css'; // Ensure that your CSS is located in the styles folder

const RegisForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setPasswordVisible(!passwordVisible);
        } else if (field === 'confirmPassword') {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    return (
        <div className="container">
            <div className="login-form">
                <div className="logo-container">
                    <img src="./assets/Images/director-logo.svg" alt="Chill Logo" />


                    <h1>CHILL</h1>
                </div>
                <h2 className="title">Daftar</h2>
                <p>Selamat datang kembali!</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Masukkan username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Kata Sandi</label>
                        <div className="password-wrapper" style={{ position: 'relative' }}>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                id="password" 
                                placeholder="Masukkan kata sandi" 
                            />
                            <img
                                src={passwordVisible ? "assets/img/eye-slash-icon.png" : "assets/img/eye-icon.png"}
                                className="toggle-password"
                                alt="Toggle Password Visibility"
                                onClick={() => togglePasswordVisibility('password')}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                        <div className="password-wrapper" style={{ position: 'relative' }}>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="confirm-password"
                                placeholder="Masukkan kata sandi"
                            />
                            <img
                                src={confirmPasswordVisible ? "assets/img/eye-slash-icon.png" : "assets/img/eye-icon.png"}
                                className="toggle-password"
                                alt="Toggle Password Visibility"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            />
                        </div>
                    </div>
                    <div className="actions">
                        <a href="index.html">Sudah punya akun? <span className="bold-text">Masuk</span></a>
                    </div>
                    <button type="submit">Daftar</button>
                    <div className="or">Atau</div>
                    <button type="button" className="google-login">
                        <img src="assets/img/google-logo.png" alt="Google Logo" className="google-logo" />
                        Daftar Dengan Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisForm;
