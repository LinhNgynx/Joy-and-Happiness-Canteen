import React, { useState } from 'react';
import AdminApp from './AdminApp';
import Login from './components/Login/Login';
import StaffApp from './StaffApp';
import StudentApp from './StudentApp';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [role, setRole] = useState(null);

  const handleLogin = (isAdmin, role) => {
    setIsAdmin(isAdmin);
    setRole(role);
  };

  return (
    <div>
      {isAdmin === null ? (
        <Login onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminApp />
      ) : role === 'student' ? (
        <StudentApp />
      ) : (
        <StaffApp />
      )}
    </div>
  );
};

export default App;
