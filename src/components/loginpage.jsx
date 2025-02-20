import React, { useState } from 'react';
import './main.css';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(isSignUp ? "Sign-up successful!" : "Login successful!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? 'Create Account' : isResetPassword ? 'Reset Password' : 'Login'}</h2>

        {/* Conditional rendering */}
        {isResetPassword ? (
          <PasswordResetForm
            setIsResetPassword={setIsResetPassword}
            handleSubmit={handleSubmit}
          />
        ) : isSignUp ? (
          <SignUpForm handleSubmit={handleSubmit} />
        ) : (
          <LoginForm handleSubmit={handleSubmit} />
        )}

        {/* External login options */}
        {!isResetPassword && (
          <>
            <div className="divider">or</div>

            <button
              type="button"
              className="google-btn"
              onClick={() => alert('Login with Google')}
            >
              Login with Google
            </button>

            <button
              type="button"
              className="apple-btn"
              onClick={() => alert('Login with Apple')}
            >
              Login with Apple
            </button>

            <p className="forgot-password">
              <button
                type="button"
                onClick={() => setIsResetPassword(true)}
                className="link-button"
              >
                Forgot Password?
              </button>
            </p>
          </>
        )}

        <p className="signup-link" onClick={() => setIsSignUp(!isSignUp)}>
          <button type="button" className="link-button">
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  );
};

const SignUpForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm Password"
          required
        />
      </div>

      <button type="submit" className="signup-btn">
        Create Account
      </button>
    </form>
  );
};

const PasswordResetForm = ({ setIsResetPassword, handleSubmit }) => {
  return (
    <div className="reset-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="New Password"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm New Password"
            required
          />
        </div>

        <button type="submit" className="reset-btn">
          Reset Password
        </button>
      </form>

      <button
        type="button"
        className="link-button"
        onClick={() => setIsResetPassword(false)}
      >
        Back to Login
      </button>
    </div>
  );
};

export default LoginPage;