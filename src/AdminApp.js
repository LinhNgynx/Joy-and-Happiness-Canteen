
// src/AdminApp.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminNavbar from './components/AdminUI/AdminNavBar';
import Dashboard from './components/AdminUI/Dashboard';
import Users from './components/AdminUI/Users';
import Orders from './components/AdminUI/Orders';
import Settings from './components/AdminUI/Settings';

const AdminApp = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <AdminNavbar />
        <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/orders" component={Orders} />
            <Route path="/admin/settings" component={Settings} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;
