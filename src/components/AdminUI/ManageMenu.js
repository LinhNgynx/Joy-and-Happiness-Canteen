import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./css/ManageMenu.css";
const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Pasta with Tomato Sauce",
      price: 8.0,
      image: `./image/food1.jpg`,
    },
    { id: 2, name: "Grilled Chicken", price: 10.0, image: `./image/food2.jpg` },
    { id: 3, name: "Caesar Salad", price: 7.5, image: `./image/food3.jpg` },
  ]);
  const [newItem, setNewItem] = useState({ name: "", price: "", image: "" });
  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (path, data) => {
    navigate(path, data);
  };

  const handleRemove = (id) => {
    setMenuItems((items) => items.filter((item) => item.id !== id));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingItem) {
      setEditingItem((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };
  const addItem = () => {
    // Validate that no fields are empty
    if (!newItem.name || !newItem.price || !newItem.image) {
      alert("Please fill in all fields before adding an item."); // Alert the user
      return; // Exit the function early
    }

    // Proceed with adding the item
    const itemToAdd = {
      ...newItem,
      id: Date.now(), // Example of generating a unique ID
    };

    setMenuItems((prevItems) => [...prevItems, itemToAdd]); // Add the item to the list
    setNewItem({ name: "", price: "", image: "" }); // Reset the form
    setShowAddForm(false); // Optionally close the Add form
  };

  const updateItem = () => {
    setMenuItems(
      menuItems.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
  };

  const toggleAddForm = () => setShowAddForm(!showAddForm); // Function to toggle Add Form
  const toggleEditForm = (item) => {
    setEditingItem(item);
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

        <h2 style={{ textAlign: "center" }}>
          Manage Menu <i id="menu" className="fas fa-book"></i>
        </h2>
        <div className="container mt-4">
          {showAddForm ? (
            <></>
          ) : (
            <button onClick={toggleAddForm} className="btn blue-btn">
              Add New Item <FaPlus />
            </button>
          )}
          {/* Add Form */}
          {showAddForm && (
            <div className="form-group mt-3">
              <h3>Add Form</h3>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                value={newItem.price}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                value={newItem.image}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <button onClick={addItem} className="btn blue-btn">
                Add Item
              </button>
              <button onClick={toggleAddForm} className="btn red-btn"
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
              }>
                Cancel
              </button>
            </div>
          )}
          {/* Edit Form */}
          {showEditForm && editingItem && (
            <div className="modal-overlay">
            <div className="form-group mt-3">
              <h3>Edit Form</h3>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={editingItem.name}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                value={editingItem.price}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                value={editingItem.image}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <button onClick={updateItem} className="btn blue-btn">
                Update Item
              </button>
            </div>
            </div>
          )}
        </div>
        <div className="container mt-4">
          <div className="row d-flex">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="col-12 d-flex align-items-center mb-3 cart-item"
              >
                <div className="col-2 img-container">
                  <img src={item.image} className="food-img" alt={item.name} />
                </div>
                <div className="col-4">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="price">
                    Price: ${Number(item.price).toFixed(2)}
                  </p>
                </div>
                <div className="col-4 text-end ms-auto">
                  <button
                    className="btn red-btn"
                    onClick={() => handleRemove(item.id)}
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
                    onClick={() => toggleEditForm(item)}
                  >
                    <FaEdit /> Edit
                  </button>
                </div>
              </div>
            ))}
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

export default ManageMenu;
