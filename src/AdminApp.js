// src/StudentApp.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BrandStory from './components/StudentUI/BrandStory/BrandStory';
import Ingredients from './components/StudentUI/Ingredients/Ingredients';
import MemberList from './components/StudentUI/MemberList/MemberList';
import ManageMenu from './components/AdminUI/ManageMenu';
import PaymentMethods from './components/StudentUI/PaymentMethods/PaymentMethods';
import PrivacyPolicy from './components/StudentUI/PrivacyPolicy/PrivacyPolicy';
import ShippingPolicy from './components/StudentUI/ShippingPolicy/ShippingPolicy';
import ManageUser from './components/AdminUI/ManageUser';
import ManageCoupon from './components/AdminUI/ManageCoupon';
import ManageOrder from './components/AdminUI/ManageOrders';
const AdminApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageMenu />} />
        <Route path="/manage-menu" element={<ManageMenu />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/manage-coupon" element={<ManageCoupon />} />
        <Route path="/manage-order" element={<ManageOrder />} />
        <Route path="/wallet" element={<ManageOrder />} />
        {/* Add additional routes as needed */}
        <Route path="/member-list" element={<MemberList />} />
        <Route path="/brand-story" element={<BrandStory />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AdminApp;
