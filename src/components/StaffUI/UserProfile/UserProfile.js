import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import purchaseHistory from "../../../db/purchaseHistory";
import "./UserProfile.css";
const UserProfile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [user, setUser] = useState({
    username: "john_doe",
    name: "John Doe",
    dob: "15-05-1995",
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1234567890",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filteredPurchases = purchaseHistory.filter((purchase) => {
    const purchaseDate = new Date(purchase.date);
    const matchesSearch = purchase.items
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStartDate = startDate
      ? purchaseDate >= new Date(startDate)
      : true;
    const matchesEndDate = endDate ? purchaseDate <= new Date(endDate) : true;
    return matchesSearch && matchesStartDate && matchesEndDate;
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
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

      <div className="main-content">
        <header className="header-section">
          <div className="logo">
            <img
              src="../image/logo2.png"
              alt="JoHap"
              style={{ width: "150px", height: "90px" }}
            />
          </div>
          <Tooltip anchorSelect=".logo" place="right">
            {" "}
            Joy and Happiness Canteen{" "}
          </Tooltip>
          <div className="avatar">
            <img src="../image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        <h2 style={{ textAlign: "center" }}>User Profile</h2>
        <div className="main-section">
          <div className="user-profile">
            <h3>User Profile</h3>
            <div className="profile-picture">
              <img src="../image/avatar.jpg" alt="User Avatar" />
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
                <button
                  className="btn btn-secondary blue-btn"
                  onClick={toggleEditForm}
                >
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
                <button
                  type="button"
                  className="btn btn-secondary blue-btn"
                  style={{ backgroundColor: "#007bff" }}
                  onClick={toggleEditForm}
                >
                  Save
                </button>
              </form>
            )}
          </div>
          <div className="transaction-history">
            <h3>Receipt History</h3>
            <input
              type="text"
              placeholder="Search by item name"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
            />
            <div className="date-filter">
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <label htmlFor="end-date">End Date:</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <table className="purchase-history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Amount ($)</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {filteredPurchases.map((purchase) => (
                  <tr key={purchase.id}>
                    <td>{purchase.date}</td>
                    <td>{purchase.items}</td>
                    <td>${purchase.totalAmount.toFixed(2)}</td>
                    <td>{purchase.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default UserProfile;
