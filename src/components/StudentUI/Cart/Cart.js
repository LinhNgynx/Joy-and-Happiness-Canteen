import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrashAlt,
  FaTicketAlt,
  FaCreditCard,
} from "react-icons/fa";
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

  const handleNavigation = (path) => {
    navigate(path);
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
              <i className="fas fa-book"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/profile")}>
              <i className="fas fa-user"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/cart")}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/payments")}>
              <i className="fas fa-credit-card"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/wallet")}>
              <i className="fas fa-wallet"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/messages")}>
              <i className="fas fa-comments"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/logout")}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="header-section">
          <div className="logo">
            <h1>BK-Canteen</h1>
          </div>
          <div className="avatar">
            <img src="./image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        <h2>
          Cart <FaShoppingCart />
        </h2>

        <div className="container mt-4">
          <h3>Your Cart</h3>
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
                      className="btn btn-secondary quantity-decrease"
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
                      className="btn btn-secondary quantity-increase"
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
                      onChange={() => handleBuyNowChange(item.id)}
                    />
                    <label className="form-check-label">Buy Now</label>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrashAlt className="me-1" /> Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="col-12 d-flex align-items-center mb-3">
              <div className="ms-auto me-3 text-end">
                <h5 className="card-title">Order Summary</h5>
                <p className="total-price">Total: ${totalCost.toFixed(2)}</p>
                <button className="btn btn-danger">
                  <FaTicketAlt /> Voucher
                </button>
                <button className="btn btn-danger">
                  <FaCreditCard /> Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-light text-center text-lg-start mt-4">
          <div className="text-center p-3">
            <p className="footer-brand">Contact us</p>
            <div className="social-media-icons">
              <button>
                <i className="fab fa-facebook"></i>
              </button>
              <button>
                <i className="fas fa-envelope"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
