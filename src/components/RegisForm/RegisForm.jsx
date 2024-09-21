import React, { useState } from 'react';
import './RegisForm.css'; // Ensure that your CSS is located in the styles folder

const RegisForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setPasswordVisible(!passwordVisible);
        } else if (field === 'confirmPassword') {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation (you can add more)
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const response = await fetch('http://localhost:5173/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
            }),
        });
        

        const data = await response.json();
        if (data.message) {
            alert(data.message);
        } else {
            alert('Registration successful');
        }
    };

    return (
        <div className="container">
            <div className="login-form">
                <div className="logo-container">
                    <img src="./src/assets/Images/Icon/director-logo.svg" alt="Chill Logo" />
                    <h1>CHILL</h1>
                </div>
                <h2 className="title">Daftar</h2>
                <p>Selamat datang kembali!</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            placeholder="Masukkan username" 
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Kata Sandi</label>
                        <div className="password-wrapper" style={{ position: 'relative' }}>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                id="password" 
                                name="password"
                                placeholder="Masukkan kata sandi" 
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <img
                                src={passwordVisible ? "./src/assets/Images/Icon/eye-slash-icon.png" : "./src/assets/Images/Icon/eye-icon.png"}
                                className="toggle-password"
                                alt="Toggle Password Visibility"
                                onClick={() => togglePasswordVisibility('password')}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                        <div className="password-wrapper" style={{ position: 'relative' }}>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Masukkan kata sandi"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            <img
                                src={confirmPasswordVisible ? "./src/assets/Images/Icon/eye-slash-icon.png" : "./src/assets/Images/Icon/eye-icon.png"}
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
                        <img src="./src/assets/Images/Icon/google-logo.png" alt="Google Logo" className="google-logo" />
                        Daftar Dengan Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisForm;
