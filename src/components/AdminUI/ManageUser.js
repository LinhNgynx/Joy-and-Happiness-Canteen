import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./css/ManageUser.css";
import { staff as staffDB } from "../../db/staffUser";
import { students as studentsDB } from "../../db/studentUser";
const ManageUser = () => {
  const [staffUsers, setStaffUsers] = useState(staffDB);

  const [studentUsers, setStudentUsers] = useState(studentsDB);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path, data) => {
    navigate(path, data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("Please fill in all fields before adding a user.");
      return;
    }

    const userToAdd = { ...newUser, id: Date.now() };
    if (newUser.role === "Staff") {
      setStaffUsers((prevUsers) => [...prevUsers, userToAdd]);
    } else {
      setStudentUsers((prevUsers) => [...prevUsers, userToAdd]);
    }

    setNewUser({ name: "", email: "", role: "" });
    setShowAddForm(false);
  };

  const updateUser = () => {
    if (editingUser.role === "Staff") {
      setStaffUsers(
        staffUsers.map((user) =>
          user.id === editingUser.id ? editingUser : user
        )
      );
    } else {
      setStudentUsers(
        studentUsers.map((user) =>
          user.id === editingUser.id ? editingUser : user
        )
      );
    }
    setEditingUser(null);
    setShowEditForm(false);
  };

  const handleRemove = (id, role) => {
    if (role === "Staff") {
      setStaffUsers((users) => users.filter((user) => user.id !== id));
    } else {
      setStudentUsers((users) => users.filter((user) => user.id !== id));
    }
  };

  const toggleAddForm = () => setShowAddForm(!showAddForm);
  const toggleEditForm = (user) => {
    setEditingUser(user);
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

        <div className="user-management-page">
          <h2 style={{ textAlign: "center" }}>Manage Users</h2>
          <div className="container mt-4">
            {showAddForm ? (
              <></>
            ) : (
              <button onClick={toggleAddForm} className="btn blue-btn">
                Add New User <FaPlus />
              </button>
            )}
            {/* Add User Form */}
            {showAddForm && (
              <div className="form-group mt-3">
                <h3>Add User</h3>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                >
                  <option value="">Select Role</option>
                  <option value="Staff">Staff</option>
                  <option value="Student">Student</option>
                </select>
                <button onClick={addUser} className="btn blue-btn">
                  Add User
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
            {/* Edit User Form */}
            {showEditForm && editingUser && (
              <div className="modal-overlay">
              <div className="form-group mt-3">
                <h3>Edit User</h3>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={editingUser.name}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
                <select
                  name="role"
                  value={editingUser.role}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                >
                  <option value="Staff">Staff</option>
                  <option value="Student">Student</option>
                </select>
                <button onClick={updateUser} className="btn blue-btn">
                  Update User
                </button>
              </div>
              </div>
            )}
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
                          className="col-6 "
                          style={{
                            display: "flex",
                          }}
                        >
                          <button
                            className="btn red-btn"
                            onClick={() => handleRemove(user.id, "Staff")}
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
                            onClick={() => toggleEditForm(user)}
                          >
                            <FaEdit /> Edit
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
                          <i id="profile" className="fas fa-user"></i>{user.name}</h5>
                          <p className="user-email">{user.email}</p>
                        </div>
                        <div
                          className="col-6 "
                          style={{
                            display: "flex",
                          }}
                        >
                          <button
                            className="btn red-btn"
                            onClick={() => handleRemove(user.id, "Student")}
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
                            onClick={() => toggleEditForm(user)}
                          >
                            <FaEdit /> Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default ManageUser;
