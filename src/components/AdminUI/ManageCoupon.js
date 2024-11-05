import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { coupons as couponDB } from "../../db/coupons";
import "./css/ManageCoupon.css";
const ManageCoupon = () => {
  const [coupons, setCoupons] = useState(couponDB);

  const [newCoupon, setNewCoupon] = useState({
    code: "",
    startDay: "",
    endDay: "",
    description: "",
    icon: "",
  });
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path, data) => {
    navigate(path, data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingCoupon) {
      setEditingCoupon((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewCoupon((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addCoupon = () => {
    if (
      !newCoupon.code ||
      !newCoupon.startDay ||
      !newCoupon.endDay ||
      !newCoupon.description ||
      !newCoupon.icon
    ) {
      alert("Please fill in all fields before adding a coupon.");
      return;
    }

    const couponToAdd = { ...newCoupon, id: Date.now() };
    setCoupons((prevCoupons) => [...prevCoupons, couponToAdd]);

    setNewCoupon({
      code: "",
      startDay: "",
      endDay: "",
      description: "",
      icon: "",
    });
    setShowAddForm(false);
  };

  const updateCoupon = () => {
    setCoupons(
      coupons.map((coupon) =>
        coupon.id === editingCoupon.id ? editingCoupon : coupon
      )
    );
    setEditingCoupon(null);
    setShowEditForm(false);
  };

  const handleRemove = (id) => {
    setCoupons((coupons) => coupons.filter((coupon) => coupon.id !== id));
  };

  const toggleAddForm = () => setShowAddForm(!showAddForm);
  const toggleEditModal = (coupon) => {
    setEditingCoupon(coupon);
    setShowEditForm(true);
  };

  return (
    <div className="menu-page">
      <nav className="navbar-left">
      <ul className="nav-list">
          <li>
            <button onClick={() => handleNavigation("/manage-menu")}>
              <i id="menu" className="fas fa-book"></i>
            </button>
            <Tooltip anchorSelect="#Manage Menu" place="top">
              {" "}
              Manage Menu{" "}
            </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/manage-user")}>
              <i id="profile" className="fas fa-users"></i>
            </button>
            <Tooltip anchorSelect="#Manage User" place="top">
              {" "}
              Manage User{" "}
            </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/manage-coupon")}>
              <i id="cart" className="fas fa-ticket-alt"></i>
            </button>
            <Tooltip anchorSelect="#Manage Coupon" place="top">
              {" "}
              Manage Coupon{" "}
            </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/manage-order")}>
              <i id="wallet" className="fas fa-wallet"></i>
            </button>
            <Tooltip anchorSelect="#Manage Order" place="top">
              {" "}
              Manage Order{" "}
            </Tooltip>
          </li>
          <li>
            <button onClick={() => handleNavigation("/logout")}>
              <i id="logout" className="fas fa-sign-out-alt"></i>
            </button>
            <Tooltip anchorSelect="#logout" place="top">
              {" "}
              Log Out{" "}
            </Tooltip>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="header-section">
          <div className="logo">
            <img
              src="./image/logo2.png"
              alt="JoHap"
              style={{ width: "150px", height: "90px" }}
            />
          </div>
          <Tooltip anchorSelect=".logo" place="right">
            {" "}
            Joy and Happiness Canteen{" "}
          </Tooltip>
          <div className="avatar">
            <img src="./image/admin avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        <div className="coupon-management-page">
          <h2 style={{ textAlign: "center" }}>Manage Coupons</h2>
          <div className="container mt-4">
            {showAddForm ? (
              <></>
            ) : (
              <button onClick={toggleAddForm} className="btn blue-btn">
                Add New Coupon <FaPlus />
              </button>
            )}
            {/* Add Coupon Form */}
            {showAddForm && (
              <div className="form-group mt-3">
                <h3>Add Coupon</h3>
                <input
                  type="text"
                  placeholder="Code"
                  name="code"
                  value={newCoupon.code}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  placeholder="Start Day"
                  name="startDay"
                  value={newCoupon.startDay}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  placeholder="End Day"
                  name="endDay"
                  value={newCoupon.endDay}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={newCoupon.description}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Icon"
                  name="icon"
                  value={newCoupon.icon}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <button onClick={addCoupon} className="btn blue-btn">
                  Add Coupon
                </button>
                <button
                  onClick={toggleAddForm}
                  className="btn red-btn"
                  style={{
                    backgroundColor: "#d9534f",
                    color: "#fff",
                    border: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#c9302c")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#d9534f")
                  }
                >
                  Cancel
                </button>
              </div>
            )}
            {/* Edit Coupon Form */}
            {showEditForm && editingCoupon && (
              <div className="modal-overlay">
              <div className="form-group mt-3">
                <h3>Edit Coupon</h3>
                <input
                  type="text"
                  placeholder="Code"
                  name="code"
                  value={editingCoupon.code}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  placeholder="Start Day"
                  name="startDay"
                  value={editingCoupon.startDay}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  placeholder="End Day"
                  name="endDay"
                  value={editingCoupon.endDay}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={editingCoupon.description}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Icon"
                  name="icon"
                  value={editingCoupon.icon}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <button onClick={updateCoupon} className="btn blue-btn">
                  Update Coupon
                </button>
              </div>
              </div>
            )}
            {/* Coupons Table */}
            <div className="container mt-4 coupon-section">
              <div className="coupon-table">
                {coupons.length === 0 ? (
                  <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                    No coupons available
                  </h3>
                ) : (
                  <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Coupons
                  </h3>
                )}
                <div className="row">
                  {coupons.map((coupon) => (
                    <div key={coupon.id} className="col-md-4 mb-4">
                      <div className="card shadow-sm h-100">
                        <div className="card-body">
                          <h5 className="coupon-code text-center">
                            <span role="img" aria-label="icon">
                              {coupon.icon}
                            </span>{" "}
                            {coupon.code}
                          </h5>
                          <p className="coupon-dates text-muted text-center">
                            Start: {coupon.startDay}
                          </p>
                          <p className="coupon-dates text-muted text-center">
                            End: {coupon.endDay}
                          </p>
                          <p className="coupon-description text-center">
                            {coupon.description}
                          </p>
                          <div className="d-flex justify-content-center mt-3">
                            <button
                              className="btn red-btn"
                              onClick={() => handleRemove(coupon.id)
                              }
                              style={{
                                backgroundColor: "#d9534f",
                                color: "#fff",
                                border: "none",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#c9302c")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "#d9534f")
                              }
                            >
                              <FaTrashAlt /> Remove
                            </button>
                            <button
                              className="btn blue-btn"
                              onClick={() => toggleEditModal(coupon)}
                            >
                              <FaEdit /> Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-dark text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img
                  src="./image/logo1-dark.png"
                  alt="Logo"
                  style={{ width: "300px", height: "180px" }}
                />
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
                  <li style={{ marginTop: "10px" }}>
                    <Link
                      to="https://www.facebook.com/truongdhbachkhoa"
                      className="social-icon text-white me-3"
                    >
                      <i id="facebook" className="fab fa-facebook"></i>
                    </Link>
                    <Tooltip anchorSelect="#facebook" place="bottom">
                      {" "}
                      Follow on Facebook{" "}
                    </Tooltip>
                    <Link
                      to="https://www.instagram.com/truongdaihocbachkhoa.1957/"
                      className="social-icon text-white me-3"
                    >
                      <i id="instagram" className="fab fa-instagram"></i>
                    </Link>
                    <Tooltip anchorSelect="#instagram" place="bottom">
                      {" "}
                      Follow on Instagram{" "}
                    </Tooltip>
                    <Link
                      to="https://mail.google.com/mail/?view=cm&fs=1&to=johaphcmut@gmail.com&su=Subject%20Here&body=Body%20content%20here"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon text-white me-3"
                    >
                      <i id="envelope" className="fas fa-envelope"></i>
                    </Link>
                    <Tooltip anchorSelect="#envelope" place="bottom">
                      {" "}
                      Email us{" "}
                    </Tooltip>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/member-list"
                      className="custom-link"
                      onClick={() => handleNavigation("/member-list")}
                    >
                      Member List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand-story"
                      className="custom-link"
                      onClick={() => handleNavigation("/brand-story")}
                    >
                      Brand Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ingredients"
                      className="custom-link"
                      onClick={() => handleNavigation("/ingredients")}
                    >
                      Learn About Ingredients
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-line">
                <h5 className="text-uppercase">Policy</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/payment-methods"
                      className="custom-link"
                      onClick={() => handleNavigation("/payment-methods")}
                    >
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shipping-policy"
                      className="custom-link"
                      onClick={() => handleNavigation("/shipping-policy")}
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="custom-link"
                      onClick={() => handleNavigation("/privacy-policy")}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-between"
            style={{ opacity: "0.5" }}
          >
            <p className="mb-0">
              JoHap - Niềm vui và hạnh phúc, phục vụ bữa ăn mọi lúc
            </p>
            <p className="mb-0">Copyright © 2024 JoHap</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ManageCoupon;
