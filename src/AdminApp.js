// src/AdminApp.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNavbar from './components/AdminUI/AdminNavBar';
import Dashboard from './components/AdminUI/Dashboard';
import Orders from './components/AdminUI/Orders';
import Settings from './components/AdminUI/Settings';
import Users from './components/AdminUI/Users';

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
