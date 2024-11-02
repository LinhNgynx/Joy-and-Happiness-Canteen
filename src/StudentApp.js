// src/StudentApp.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BrandStory from './components/StudentUI/BrandStory/BrandStory';
import Cart from './components/StudentUI/Cart/Cart';
import Ingredients from './components/StudentUI/Ingredients/Ingredients';
import MemberList from './components/StudentUI/MemberList/MemberList';
import Menu from './components/StudentUI/Menu/Menu';
import Payment from './components/StudentUI/Payment/Payment';
import PaymentMethods from './components/StudentUI/PaymentMethods/PaymentMethods';
import PrivacyPolicy from './components/StudentUI/PrivacyPolicy/PrivacyPolicy';
import ShippingPolicy from './components/StudentUI/ShippingPolicy/ShippingPolicy';
import UserProfile from './components/StudentUI/UserProfile/UserProfile';
import Wallet from './components/StudentUI/Wallet/Wallet';
const StudentApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/wallet" element={<Wallet />} />
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

export default StudentApp;
