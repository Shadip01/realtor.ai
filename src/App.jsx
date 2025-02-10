
import { Router, Routes, Route } from 'solid-app-router';
import Auth from './components/Auth.jsx';
import HomePage from './components/HomeScreen.jsx';
import './components/LoginForm.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Auth} />        
        <Route path="/home" component={HomePage} /> 
      </Routes>
    </Router>
  );
}

export default App;
