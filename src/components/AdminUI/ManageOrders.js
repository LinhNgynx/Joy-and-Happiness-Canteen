import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { staff as staffDB } from "../../db/staffUser";
import { students as studentsDB } from "../../db/studentUser";
const ManageOrder = () => {
  const [staffUsers, setStaffUsers] = useState(staffDB);
  const [studentUsers, setStudentUsers] = useState(studentsDB);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [oldOrders, setOldOrders] = useState([]);
  const [isOldOrdersModalOpen, setIsOldOrdersModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStaffClick = (staff) => {
    setSelectedStaff(staff);
    setShowOrderHistory(true);
  };

  const handleNavigation = (path, data) => {
    navigate(path, data);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate && endDate && new Date(selectedDate) > new Date(endDate)) {
      alert("Start date cannot be later than end date.");
    } else {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedDate = e.target.value;
    if (
      selectedDate &&
      startDate &&
      new Date(selectedDate) < new Date(startDate)
    ) {
      alert("End date cannot be earlier than start date.");
    } else {
      setEndDate(selectedDate);
    }
  };

  const toggleOrderHistory = () => {
    setShowOrderHistory((prev) => !prev);
  };

  // Filter order history based on search term and date range
  const filteredOrderHistory = selectedStaff
    ? selectedStaff.orderHistory.filter((purchase) => {
        const matchesSearch = purchase.items
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesStartDate = startDate
          ? new Date(purchase.date) >= new Date(startDate)
          : true;
        const matchesEndDate = endDate
          ? new Date(purchase.date) <= new Date(endDate)
          : true;
        return matchesSearch && matchesStartDate && matchesEndDate;
      })
    : [];
  const fetchOldOrders = () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const orders = staffUsers.flatMap((staff) =>
      staff.orderHistory
        .filter((order) => new Date(order.date) < sixMonthsAgo)
        .map((order) => ({
          ...order,
          staffId: staff.id,
          staffName: staff.name,
        }))
    );

    setOldOrders(orders);
    setIsOldOrdersModalOpen(true);
  };
  // Delete old order by ID
  const deleteOldOrder = (orderId, staffId) => {
    setStaffUsers((prevUsers) =>
      prevUsers.map((staff) =>
        staff.id === staffId
          ? {
              ...staff,
              orderHistory: staff.orderHistory.filter(
                (order) => order.id !== orderId
              ),
            }
          : staff
      )
    );
    setOldOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };
  const closeOldOrdersModal = () => setIsOldOrdersModalOpen(false);
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

        <div className="user-management-page">
          <h2 style={{ textAlign: "center" }}>Order History</h2>
          <div className="container mt-4">
            {/* Staff Users Table */}
            <div className="container mt-4 user-section">
              <div className="user-table">
                <h3>Staff Users</h3>
                <div className="container mt-4">
                  <div className="row">
                    {staffUsers.map((user) => (
                      <div
                        key={user.id}
                        className="col-12 d-flex align-items-center mb-3 user-item"
                      >
                        <div className="col-4">
                          <h5 className="user-name">
                            <i id="staff-icon" className="fas fa-user-tie"></i>{" "}
                            {user.name}
                          </h5>
                          <p className="user-email">{user.email}</p>
                        </div>
                        <div
                          className="col-4 "
                          style={{
                            display: "flex",
                          }}
                        >
                          <button
                            className="btn blue-btn"
                            onClick={() => handleStaffClick(user)}
                          >
                            View History
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="user-table">
                <h3>Student Users</h3>
                <div className="container mt-4">
                  <div className="row">
                    {studentUsers.map((user) => (
                      <div
                        key={user.id}
                        className="col-12 d-flex align-items-center mb-3 user-item"
                      >
                        <div className="col-4">
                          <h5 className="user-name">
                            <i id="staff-icon" className="fas fa-user"></i>{" "}
                            {user.name}
                          </h5>
                          <p className="user-email">{user.email}</p>
                        </div>
                        <div
                          className="col-4 "
                          style={{
                            display: "flex",
                          }}
                        >
                          <button
                            className="btn blue-btn"
                            onClick={() => handleStaffClick(user)}
                          >
                            View History
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={fetchOldOrders} className="btn blue-btn">
              Show Orders Older Than 6 Months
            </button>
            {isOldOrdersModalOpen && oldOrders.length > 0  && (
              
                <div className="modal-overlay">
                <div style={{ maxWidth: "800px" }}>
                <div className="user-table mt-4">
                <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className="header-title">
                        Old Orders
                      </h3>
                      <FaTimes
                        className="close-icon"
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={closeOldOrdersModal}
                      />
                    </div>
                <table className="purchase-history-table">
                  <thead>
                    <tr>
                      <th>Staff Name</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Total Amount ($)</th>
                      <th>Payment Method</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oldOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.staffName}</td>
                        <td>{new Date(order.date).toLocaleDateString('en-GB')}</td>
                        <td>{order.items}</td>
                        <td>${order.totalAmount.toFixed(2)}</td>
                        <td>{order.paymentMethod}</td>
                        <td>
                          <button
                          className="btn red-btn"
                            onClick={() =>
                              deleteOldOrder(order.id, order.staffId)
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
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
              </div>
            )}

            {showOrderHistory && selectedStaff && (
              <div className="modal-overlay">
                <div style={{ maxWidth: "800px" }}>
                  <div className="user-table mt-4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className="header-title">
                        Order History for {selectedStaff.name}
                      </h3>
                      <FaTimes
                        onClick={toggleOrderHistory}
                        className="close-icon"
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by item name"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      style={{
                        padding: "8px",
                        marginBottom: "10px",
                        width: "100%",
                      }}
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
                        {filteredOrderHistory.map((purchase) => (
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
              </div>
            )}
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

export default ManageOrder;
