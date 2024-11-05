// src/Staff.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BrandStory from './components/StaffUI/BrandStory/BrandStory';
import Ingredients from './components/StaffUI/Ingredients/Ingredients';
import Invoices from './components/StaffUI/Invoices/Invoices';
import MemberList from './components/StaffUI/MemberList/MemberList';
import Menu from './components/StaffUI/Menu/Menu';
import PaymentMethods from './components/StaffUI/PaymentMethods/PaymentMethods';
import PrivacyPolicy from './components/StaffUI/PrivacyPolicy/PrivacyPolicy';
import ShippingPolicy from './components/StaffUI/ShippingPolicy/ShippingPolicy';
import UserProfile from './components/StaffUI/UserProfile/UserProfile';
import Wallet from './components/StaffUI/Wallet/Wallet';

const StaffApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/staff/menu" element={<Menu />} />
                <Route path="/staff/profile" element={<UserProfile />} />
                <Route path="/staff/invoices" element={<Invoices />} />
                <Route path="/staff/wallet" element={<Wallet />} />
                {/* Add additional routes as needed */}
                <Route path="/staff/member-list" element={<MemberList />} />
                <Route path="/staff/brand-story" element={<BrandStory />} />
                <Route path="/staff/ingredients" element={<Ingredients />} />
                <Route path="/staff/payment-methods" element={<PaymentMethods />} />
                <Route path="/staff/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/staff/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
};

export default StaffApp;
