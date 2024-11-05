import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import "./ShippingPolicy.css";

const ShippingPolicy = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  const handleNavigation = (path) => {
    navigate(path); // Programmatically navigate to the specified path
  };

  return (
    <div className="menu-page">
      {/* Left Sidebar Navigation */}
      <nav className="navbar-left" style={{ backgroundColor: '#530000' }}>
        <ul className="nav-list">
          <li>
            <button onClick={() => handleNavigation("/staff/menu")}>
              <i id="menu" className="fas fa-book"></i>
            </button>
            <Tooltip anchorSelect="#menu" place="top"> Menu </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/staff/profile")}>
              <i id="profile" className="fas fa-user"></i>
            </button>
            <Tooltip anchorSelect="#profile" place="top"> Profile </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/staff/invoices")}>
              <i id="invoices" className="fas fa-file-invoice"></i>
            </button>
            <Tooltip anchorSelect="#invoices" place="top"> Invoices </Tooltip>
          </li>

          <li>
            <button onClick={() => handleNavigation("/staff/wallet")}>
              <i id="wallet" className="fas fa-wallet"></i>
            </button>
            <Tooltip anchorSelect="#wallet" place="top"> Student Wallets </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/logout")}>
              <i id="logout" className="fas fa-sign-out-alt"></i>
            </button>
            <Tooltip anchorSelect="#logout" place="top"> Log Out </Tooltip>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header-section">
          <div className="logo">
            <img src="../image/logo2.png" alt="JoHap" style={{ width: '150px', height: '90px' }} />
          </div>
          <Tooltip anchorSelect=".logo" place="right"> Joy and Happiness Canteen </Tooltip>
          <div className="avatar">
            <img src="../image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        {/* ShippingPolicy Content */}
        <div className="edited-content align-items-center">
          <p style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>Shipping Policy</p>
          <ol>
            <li style={{ fontWeight: 'bold', marginBottom:'10px' }}>Shipping and Delivery Conditions:</li>
            <ul style={{marginBottom:'20px'}}>
              <li>Delivery Method: Direct delivery to customers at the cafeteria on Campus 2 (Di An, Binh Duong) of Hanoi University of Science and Technology.</li>
              <li>Estimated Delivery Time: Monday to Friday, from 8:00 AM to 5:00 PM. JoHap will wait for customers for 10 to 20 minutes during delivery.</li>
            </ul>
            <li style={{ fontWeight: 'bold', marginBottom:'10px' }}>In Case of Delays in Delivery:</li>
            <ul>
              <li>JoHap staff will call to inform the customer;</li>
              <li>Customers can contact JoHap directly to cancel the order in the system if the waiting time is too long.</li>
            </ul>
          </ol>
          <img src="../image/delivery.png" alt="DELIVERY" style={{width:'70%', height:'auto', display:'block', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}/>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src="../image/logo1-dark.png" alt="Logo" style={{ width: '300px', height: '180px' }} />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">JoHap</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className=""></i> Bach Khoa University - Di An Campus
                  </li>
                  <li>
                    <i className=""></i> 0113 114 115
                  </li>
                  <li>
                    <i className=""></i> johaphcmut@gmail.com
                  </li>
                  <li style={{ marginTop: '10px' }}>
                    <Link to="https://www.facebook.com/truongdhbachkhoa" className="social-icon text-white me-3">
                      <i id="facebook" className="fab fa-facebook"></i>
                    </Link>
                    <Tooltip anchorSelect="#facebook" place="bottom"> Follow on Facebook </Tooltip>
                    <Link to="https://www.instagram.com/truongdaihocbachkhoa.1957/" className="social-icon text-white me-3">
                      <i id="instagram" className="fab fa-instagram"></i>
                    </Link>
                    <Tooltip anchorSelect="#instagram" place="bottom"> Follow on Instagram </Tooltip>
                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=johaphcmut@gmail.com&su=Subject%20Here&body=Body%20content%20here"
                      target="_blank" rel="noopener noreferrer" className="social-icon text-white me-3">
                      <i id="envelope" className="fas fa-envelope"></i>
                    </Link>
                    <Tooltip anchorSelect="#envelope" place="bottom"> Email us </Tooltip>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/staff/member-list" className="custom-link" onClick={() => handleNavigation("/staff/member-list")}>Member List</Link>
                  </li>
                  <li>
                    <Link to="/staff/brand-story" className="custom-link" onClick={() => handleNavigation("/staff/brand-story")}>Brand Story</Link>
                  </li>
                  <li>
                    <Link to="/staff/ingredients" className="custom-link" onClick={() => handleNavigation("/staff/ingredients")}>Learn About Ingredients</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">Policy</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/staff/payment-methods" className="custom-link" onClick={() => handleNavigation("/staff/payment-methods")}>Payment Methods</Link>
                  </li>
                  <li>
                    <Link to="/staff/shipping-policy" className="custom-link" onClick={() => handleNavigation("/staff/shipping-policy")}>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link to="/staff/privacy-policy" className="custom-link" onClick={() => handleNavigation("/staff/privacy-policy")}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between" style={{ opacity: '0.5' }}>
            <p className="mb-0">JoHap - Niềm vui và hạnh phúc, phục vụ bữa ăn mọi lúc</p>
            <p className="mb-0">Copyright © 2024 JoHap</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ShippingPolicy;