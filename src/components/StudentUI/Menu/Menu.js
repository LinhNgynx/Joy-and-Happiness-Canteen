import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Menu.css";

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [foodList, setFoodList] = useState([
    {
      id: 1,
      name: "Food 1",
      description: "Delicious food description",
      image: "./image/food1.jpg",
      price: 10,
    },
    {
      id: 2,
      name: "Food 2",
      description: "Tasty food description",
      image: "./image/food2.jpg",
      price: 12,
    },
    {
      id: 3,
      name: "Food 3",
      description: "Yummy food description",
      image: "./image/food3.jpg",
      price: 15,
    },
    {
      id: 4,
      name: "Food 4",
      description: "Tasty food description",
      image: "./image/food4.jpg",
      price: 20,
    },
    {
      id: 5,
      name: "Food 5",
      description: "Tasty food description",
      image: "./image/food5.jpg",
      price: 18,
    },
    {
      id: 6,
      name: "Food 6",
      description: "Tasty food description",
      image: "./image/food6.jpg",
      price: 22,
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate
  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchText)
  );

  const handleAddToCart = (foodName) => {
    alert(`${foodName} has been added to your cart!`);
  };

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

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header-section">
          <div className="logo">
            <h1>BK-Canteen</h1>
          </div>
          <div className="avatar">
            <img src="./image/avatar.jpg" alt="User Avatar" />
          </div>
        </header>

        <h2>Today Menu</h2>

        {/* Search, Filter, and Sort */}
        <div className="search-filter-sort">
          {/* Filter */}
          <div className="dropdown">
            <button type="button" className="icon-btn">
              <i className="fas fa-filter"></i>
            </button>
            <div className="dropdown-content">
              <button>Filter by Price</button>
              <button>Filter by Category</button>
              <button>Filter by Rating</button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search for food..."
              onChange={handleSearch}
              value={searchText}
            />
            <button type="button" className="btn search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Sort */}
          <div className="dropdown">
            <button type="button" className="icon-btn">
              <i className="fas fa-sort"></i>
            </button>
            <div className="dropdown-content">
              <button>Sort by Popularity</button>
              <button>Sort by Price (Low to High)</button>
              <button>Sort by Price (High to Low)</button>
            </div>
          </div>
        </div>

        {/* Food Cards */}
        <div className="container mt-4">
          <div className="row">
            {filteredFoodList.map((food) => (
              <div key={food.id} className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src={food.image}
                    className="card-img-top food-img"
                    alt={food.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text">{food.description}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(food.name)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination (Optional) */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link">&laquo; Prev</button>
            </li>
            <li className="page-item">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next &raquo;</button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
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

export default Menu;
