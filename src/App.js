// src/App.js
import React, { useState } from 'react';
import StudentApp from './StudentApp';
import AdminApp from './AdminApp';
import Login from './components/Login/Login';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(null); // null until login

  const handleLogin = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <div>
      {isAdmin === null ? (
        <Login onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminApp />
      ) : (
        <StudentApp />
      )}
    </div>
  );
};

export default App;
