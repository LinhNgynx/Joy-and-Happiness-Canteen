import React, { useState } from "react";
import {
  FaCreditCard,
  FaShoppingCart,
  FaTicketAlt,
  FaTrashAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pasta with Tomato Sauce",
      price: 8.0,
      quantity: 1,
      image: `./image/food1.jpg`,
      buyNow: false,
    },
    {
      id: 2,
      name: "Grilled Chicken",
      price: 10.0,
      quantity: 1,
      image: `./image/food2.jpg`,
      buyNow: false,
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 7.5,
      quantity: 1,
      image: `./image/food3.jpg`,
      buyNow: false,
    },
  ]);

  const navigate = useNavigate();
  const handleNavigation = (path, data) => {
    navigate(path, data);
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
          : item
      )
    );
  };

  const handleBuyNowChange = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, buyNow: !item.buyNow } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalCost = cartItems
    .filter((item) => item.buyNow)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="menu-page">
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

      <div className="main-content">
        <header className="header-section">
          <div className="logo">
            <img src="./image/logo2.png" alt="JoHap" style={{ width: '150px', height: '90px' }} />
          </div>
          <Tooltip anchorSelect=".logo" place="right"> Joy and Happiness Canteen </Tooltip>
          <div className="avatar">
            <img src="./image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        <h2 style={{ textAlign: 'center' }}>Your Cart <FaShoppingCart /></h2>

        <div className="container mt-4">
          <div className="row d-flex">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="col-12 d-flex align-items-center mb-3 cart-item"
              >
                <div className="col-2 img-container">
                  <img src={item.image} className="food-img" alt={item.name} />
                </div>
                <div className="col-4">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="price">Price: ${item.price.toFixed(2)}</p>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <div className="quantity-controls">
                    <button
                      className="btn btn-secondary blue-btn quantity-decrease"
                      style={{ fontSize: '1rem',  justifyContent: 'center' }}
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control mx-2"
                      value={item.quantity}
                      min="1"
                      readOnly
                    />
                    <button
                      className="btn btn-secondary blue-btn quantity-increase"
                      style={{ fontSize: '1rem', justifyContent: 'center' }}
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-2 text-end ms-auto">
                  <p className="total-price">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={item.buyNow}
                      style={{ fontSize: '1rem' }}
                      onChange={() => handleBuyNowChange(item.id)}
                    />
                    <label className="form-check-label">Buy Now</label>
                  </div>

                  <button
                    className="btn red-btn"
                    style={{ fontSize: '1rem' }}
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrashAlt className="me-1" /> Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="col-12 d-flex align-items-center mb-3">
              <div className="ms-auto me-3 text-end">
                <p className="total-price">Total order: ${totalCost.toFixed(2)}</p>
                <button className="btn btn-secondary blue-btn " style={{ fontSize: '1rem' }}>
                  <FaTicketAlt style={{marginRight:'10px'}}/> Voucher
                </button>
                <button className="btn btn-secondary blue-btn " style={{ fontSize: '1rem' }} onClick={() => handleNavigation("/payment", { state: { cartItems } })}>
                  <FaCreditCard style={{marginRight:'10px'}}/> Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-dark text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src="./image/logo1-dark.png" alt="Logo" style={{ width: '300px', height: '180px' }} />
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

export default Cart;
