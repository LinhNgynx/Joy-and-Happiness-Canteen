// src/Staff.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './components/StaffUI/Menu/Menu';

const StaffApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/staff/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
};

export default StaffApp;
