import React, { useState } from 'react';
import './main.css';

const LoginPage = () => {
  // State for toggling between login and sign-up forms
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle Google Login
  const handleGoogleLogin = () => {
    alert('Login with Google');
  };

  // Handle Apple Login
  const handleAppleLogin = () => {
    alert('Login with Apple');
  };

  // Toggle between login and signup forms
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? 'Create Account' : 'Login'}</h2>

        {/* Conditional rendering: Show Login or Sign Up form */}
        {isSignUp ? (
          <SignUpForm />
        ) : (
          <LoginForm handleGoogleLogin={handleGoogleLogin} handleAppleLogin={handleAppleLogin} />
        )}

        <div className="divider">or</div>

        {/* Google and Apple Login Buttons */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button className="apple-btn" onClick={handleAppleLogin}>
          Login with Apple
        </button>

        <p className="signup-link" onClick={toggleSignUp}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

const LoginForm = ({ handleGoogleLogin, handleAppleLogin }) => {
  return (
    <form action="#" method="POST">
      <div className="input-group">
        <input type="email" id="email" name="email" placeholder="Email" required />
      </div>
      <div className="input-group">
        <input type="password" id="password" name="password" placeholder="Password" required />
      </div>

      <button type="submit" className="login-btn">Login</button>

      <p className="forgot-password"><a href="#">Forgot Password?</a></p>
    </form>
  );
};

const SignUpForm = () => {
    return (
      <form action="#" method="POST">
        <div className="input-group">
          <input type="text" id="username" name="username" placeholder="Username" required />
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <div className="input-group">
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
        </div>
  
        {/* Date of Birth Input */}
        <div className="input-group">
          <input type="date" id="dob" name="dob" required />
        </div>
  
        <button type="submit" className="signup-btn">Create Account</button>
      </form>
    );
  };

export default LoginPage;