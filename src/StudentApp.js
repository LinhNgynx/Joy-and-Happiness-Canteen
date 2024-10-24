// src/StudentApp.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/StudentUI/Menu/Menu';
import Cart from './components/StudentUI/Cart/Cart';
import UserProfile from './components/StudentUI/UserProfile/UserProfile';

const StudentApp = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add additional routes as needed */}
        </Routes>
      </Router>
  );
};

export default StudentApp;
