import React, { useState } from 'react';
import AdminApp from './AdminApp';
import Login from './components/Login/Login';
import StaffApp from './StaffApp';
import StudentApp from './StudentApp';

const App = () => {
  const [role, setRole] = useState(null);

  const handleLogin = (role) => {
    setRole(role);
  };

  return (
    <div>
      {role === null ? (
        <Login onLogin={handleLogin} />
      ) : role === 'admin' ? (
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
