import { Chart, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import "./UserProfile.css";

Chart.register(...registerables);

const UserProfile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [user, setUser] = useState({
    username: "john_doe",
    name: "John Doe",
    dob: "1995-05-15",
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1234567890",
    bank: {
      bankName: "ABC Bank",
      accountNumber: "1234567890123456",
      balance: 5000,
    },
  });

  const [transactions] = useState([
    { date: "2024-10-01", amount: 150 },
    { date: "2024-10-05", amount: 250 },
    { date: "2024-10-10", amount: 100 },
    { date: "2024-10-15", amount: 300 },
    { date: "2024-10-20", amount: 50 },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in user.bank) {
      setUser({ ...user, bank: { ...user.bank, [name]: value } });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const ctx = document.getElementById("transactionChart").getContext("2d");

    // Kiểm tra xem có biểu đồ cũ nào không và phá hủy nếu có
    let chartInstance;
    if (Chart.getChart("transactionChart")) {
      Chart.getChart("transactionChart").destroy();
    }

    // Tạo biểu đồ mới
    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: transactions.map((t) => t.date),
        datasets: [
          {
            label: "Transaction Amount ($)",
            data: transactions.map((t) => t.amount),
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Amount ($)",
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function để phá hủy biểu đồ khi component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [transactions]);

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
        <h2 style={{textAlign: 'center'}}>User Profile</h2>
        <div className="main-section">
          <div className="user-profile">
            <h3>User Profile</h3>
            <div className="profile-picture">
              <img src="./image/avatar.jpg" alt="User Avatar" />
            </div>

            {!isEditing ? (
              <div className="profile-info">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {user.dob}
                </p>
                <p>
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <h3>Bank Account Information</h3>
                <p>
                  <strong>Bank Name:</strong> {user.bank.bankName}
                </p>
                <p>
                  <strong>Account Number:</strong> {user.bank.accountNumber}
                </p>
                <p>
                  <strong>Balance:</strong> ${user.bank.balance}
                </p>
                <button className="btn btn-secondary blue-btn" onClick={toggleEditForm}>
                  Edit Information
                </button>
              </div>
            ) : (
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
                <h3>Bank Account Information</h3>
                <div className="form-group">
                  <label htmlFor="bankName">Bank Name:</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={user.bank.bankName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your bank name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="accountNumber">Account Number:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={user.bank.accountNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your account number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance:</label>
                  <input
                    type="number"
                    id="balance"
                    name="balance"
                    value={user.bank.balance}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter balance"
                  />
                </div>
                <button type="button" className="btn btn-secondary blue-btn" style={{backgroundColor: '#007bff'}} onClick={toggleEditForm}>
                  Save
                </button>
              </form>
            )}
          </div>
          <div className="transaction-history">
            <h3>Transaction History</h3>
            <canvas id="transactionChart"></canvas>
          </div>
        </div>
        {/* Footer  */}
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
                          target="_blank" rel="noopener noreferrer"  className="social-icon text-white me-3">
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

export default UserProfile;
