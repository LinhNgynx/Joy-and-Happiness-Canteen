import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // default role

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple credential check (replace with your authentication logic)
    if (username === 'admin' && password === 'admin') {
      onLogin(true); // isAdmin = true
    } else if (username === 'student' && password === 'student') {
      onLogin(false); // isAdmin = false
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      className="login-container"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('./image/banner.png')`, // Update the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="login-form">
        <div style={{ margin: '50px' }}>
          <h2 className="text-center mb-4">JoHap Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Role:
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
