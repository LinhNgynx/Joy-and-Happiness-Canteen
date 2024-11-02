import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import "./PaymentMethods.css";

const PaymentMethods = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  const handleNavigation = (path) => {
    navigate(path); // Programmatically navigate to the specified path
  };

  return (
    <div className="menu-page">
      {/* Left Sidebar Navigation */}
      <nav className="navbar-left">
        <ul className="nav-list">
          <li>
            <button onClick={() => handleNavigation("/menu")}>
              <i id="menu" className="fas fa-book"></i>
            </button>
            <Tooltip anchorSelect="#menu" place="top"> Menu </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/profile")}>
              <i id="profile" className="fas fa-user"></i>
            </button>
            <Tooltip anchorSelect="#profile" place="top"> Profile </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/cart")}>
              <i id="cart" className="fas fa-shopping-cart"></i>
            </button>
            <Tooltip anchorSelect="#cart" place="top"> Shopping Cart </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/wallet")}>
              <i id="wallet" className="fas fa-wallet"></i>
            </button>
            <Tooltip anchorSelect="#wallet" place="top"> My Wallet </Tooltip>
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
            <img src="./image/logo2.png" alt="JoHap" style={{ width: '150px', height: '90px' }} />
          </div>
          <Tooltip anchorSelect=".logo" place="right"> Joy and Happiness Canteen </Tooltip>
          <div className="avatar">
            <img src="./image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        {/* PaymentMethods Content */}
        <div className="edited-content align-items-center">
          <p style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>Payment Methods</p>
          <div className="edited-content">
            <p>JoHap supports flexible and secure payment methods for all customers shopping on the Website in the following forms:</p>
            <div className="row align-items-center">
              <div className="col-md-7">
                <ol>
                  <li>Cash on delivery</li>
                  <li>Payment by bank transfer (QR code scanning)</li>
                </ol>
                <p>Online payment: Customers pay for purchases through the following account:</p>
                <ul>
                  <li>Account Number: 0004106868688006</li>
                  <li>Account Holder: TRƯỜNG ĐẠI HỌC BÁCH KHOA</li>
                  <li>OCB Bank - Orient Commercial Bank</li>
                </ul>
              </div>
              <div className="col-md-5">
                <img src="./image/logo-OCB.png" alt="OCB BANK" style={{ width: '60%', height: 'auto', display: 'block' }}/>
              </div>
            </div>
            <p>You are responsible for ensuring that the bank card used to make online payments to us is still valid at the time you place your order.</p>
            <p>We reserve the right to confirm your payment information before providing the Product. We will stop processing your Order if the information you provide is incorrect.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src="./image/logo1-dark.png" style={{ width: '300px', height: '180px' }} />
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
                    <Link to="/member-list" className="custom-link" onClick={() => handleNavigation("/member-list")}>Member List</Link>
                  </li>
                  <li>
                    <Link to="/brand-story" className="custom-link" onClick={() => handleNavigation("/brand-story")}>Brand Story</Link>
                  </li>
                  <li>
                    <Link to="/ingredients" className="custom-link" onClick={() => handleNavigation("/ingredients")}>Learn About Ingredients</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">Policy</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/payment-methods" className="custom-link" onClick={() => handleNavigation("/payment-methods")}>Payment Methods</Link>
                  </li>
                  <li>
                    <Link to="/shipping-policy" className="custom-link" onClick={() => handleNavigation("/shipping-policy")}>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="custom-link" onClick={() => handleNavigation("/privacy-policy")}>Privacy Policy</Link>
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

export default PaymentMethods;