// src/components/AdminUI/AdminNavbar.js
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav style={{ width: '200px', background: '#343a40', height: '100vh', position: 'fixed', color: '#fff' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
        </li>
        <li>
          <Link to="/admin/orders" style={{ color: '#fff', textDecoration: 'none' }}>Orders</Link>
        </li>
        <li>
          <Link to="/admin/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
