import { createSignal } from 'solid-js';
import logo from './logo.png'; // Import logo
import './LoginForm.css'; // Import CSS

export default function Auth() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [name, setName] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [dob, setDob] = createSignal('');
  const [isLogin, setIsLogin] = createSignal(true);
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [message, setMessage] = createSignal('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin() ? '/login' : '/register';
    const body = {
      email: email(),
      password: password(),
      ...(isLogin() ? {} : { name: name(), phone: phone(), dob: dob() }),
    };

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://your-api.com${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Success: ${data.message}`);
        if (isLogin()) {
          localStorage.setItem('token', data.token); // Save token
        }
      } else {
        setMessage(`Error: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      setMessage('Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div class="auth-container">
      <div class="logo-container">
        <img src={logo} alt="Company Logo" class="auth-logo" />
      </div>
      <h2>{isLogin() ? 'Login' : 'Create Account'}</h2>
      <form onSubmit={handleSubmit}>
        <div class="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div class="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password()}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        {!isLogin() && (
          <>
            <div class="input-wrapper">
              <input
                type="text"
                placeholder="Full Name"
                value={name()}
                onInput={(e) => setName(e.target.value)}
                required
              />
              <label>Full Name</label>
            </div>
            <div class="input-wrapper">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone()}
                onInput={(e) => setPhone(e.target.value)}
                required
              />
              <label>Phone Number</label>
            </div>
            <div class="input-wrapper">
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob()}
                onInput={(e) => setDob(e.target.value)}
                required
              />
              <label>Date of Birth</label>
            </div>
          </>
        )}
        <button type="submit" disabled={isSubmitting()}>
          {isSubmitting() ? 'Submitting...' : isLogin() ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button class="toggle-btn" onClick={() => setIsLogin(!isLogin())}>
        {isLogin() ? 'Create an account' : 'Already have an account? Login'}
      </button>
      <p class="message">{message()}</p>
    </div>
  );
}