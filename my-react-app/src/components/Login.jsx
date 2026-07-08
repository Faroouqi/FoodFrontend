import React, { useState } from 'react';
import '../css/Login.css'; // Importing our custom stylesheet
import img from '../image/Img1.png' // Importing the image for the login page

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch("http://localhost:8090/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const data = await response.json();

    console.log("Login Success:", data);

    // Save JWT token
    localStorage.setItem("token", data.token);

    // Save logged in user (optional)
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login Successful!");

    // Navigate to dashboard
    // navigate("/dashboard");

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
    <div className="login-page-container">
      {/* Giant Background Decorative Text */}
      <div className="bg-watermark-text">Login</div>

      {/* Decorative Food Images */}
      <div className="food-bowl bowl-left">
        <img src={img} alt="Salad Left" />
      </div>
      <div className="food-bowl bowl-top-right">
        <img src={img} alt="Salad Top Right" />
      </div>
      <div className="food-bowl bowl-bottom-right">
        <img src={img} alt="Salad Bottom Right" />
      </div>

      <div className="main-content-wrapper">
        {/* Header / Brand Logo */}
        <header className="brand-header">
          <div className="brand-logo">🍕</div>
          <div className="brand-text">
            <h1 className="brand-title">Italian Pizza</h1>
            <p className="brand-subtitle">Your Second Home</p>
          </div>
        </header>

        {/* Central Content Area */}
        <main className="central-login-area">
          <div className="login-heading-group">
            <h2 className="login-main-title">Login</h2>
            <p className="login-sub-title">
              More than <span className="highlight-text">15,000 recipes</span> from around the world!
            </p>
          </div>

          {/* Form Card Box */}
          <div className="login-card">
            <form onSubmit={handleSubmit} className="login-form">
              
              {/* Email Field */}
              <div className="input-group">
                <span className="input-icon">
                  <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <input
                  type="email"
                  required
                  placeholder="Email / Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input-field"
                />
              </div>

              {/* Password Field */}
              <div className="input-group">
                <span className="input-icon">
                  <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input-field"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-btn"
                >
                  {showPassword ? (
                    <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>

              {/* Form Options Row */}
              <div className="form-options-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="custom-checkbox-input"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password-link">Forgot Password?</a>
              </div>

              {/* Primary Submit Button */}
              <button type="submit" className="login-submit-btn">Login</button>
            </form>

            {/* Separator Layout Line */}
            

            {/* Federated Social Connections */}
            

          </div>
        </main>

        {/* Global Structural Footer */}
        <footer className="global-footer">
          <div className="footer-navigation">
            <a href="#explore">Explore</a>
            <a href="#what">What</a>
            <a href="#help">Help & Feedback</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Company. All rights reserved. User Digital Experience.
          </p>
        </footer>
      </div>
    </div>
  );
}
