import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import "./Menu.css";

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [foodList, setFoodList] = useState([
    {
      id: 1,
      name: "Food 1",
      description: "Delicious food description",
      image: "./image/food1.jpg",
      buyed: true,
      price: 10,
      reviews: [
        {
          username: "John Doe",
          avatar: "./image/avatar.jpg",
          rating: 5,
          review: "This product is amazing! I love it.",
          timestamp: "29/10/2024, 10:15:57"
        },
        {
          username: "Jane Smith",
          avatar: "./image/avatar.jpg",
          rating: 4,
          review: "Good quality and fast shipping. Highly recommend!",
          timestamp: "30/10/2024, 14:30:05"
        },
        {
          username: "Alice Johnson",
          avatar: "./image/avatar.jpg",
          rating: 3,
          review: "Not what I expected, but it's okay.",
          timestamp: "31/10/2024, 02:00:01"
        }
      ],
    },
    {
      id: 2,
      name: "Food 2",
      description: "Tasty food description",
      image: "./image/food2.jpg",
      buyed: false,
      price: 12,
      reviews: [
        {
          username: "John Doe",
          avatar: "./image/avatar.jpg",
          rating: 5,
          review: "This product is amazing! I love it.",
          timestamp: "29/10/2024, 10:15:57"
        },
        {
          username: "Jane Smith",
          avatar: "./image/avatar.jpg",
          rating: 4,
          review: "Good quality and fast shipping. Highly recommend!",
          timestamp: "30/10/2024, 14:30:05"
        }
      ],
    },
    {
      id: 3,
      name: "Food 3",
      description: "Yummy food description",
      image: "./image/food3.jpg",
      buyed: false,
      price: 15,
      reviews: [],
    },
    {
      id: 4,
      name: "Food 4",
      description: "Tasty food description",
      image: "./image/food4.jpg",
      price: 20,
      reviews: [
        {
          username: "John Doe",
          avatar: "./image/avatar.jpg",
          rating: 5,
          review: "This product is amazing! I love it.",
          timestamp: "29/10/2024, 10:15:57"
        }
      ],
    },
    {
      id: 5,
      name: "Food 5",
      description: "Tasty food description",
      image: "./image/food5.jpg",
      buyed: true,
      price: 18,
      reviews: [],
    },
    {
      id: 6,
      name: "Food 6",
      description: "Tasty food description",
      image: "./image/food6.jpg",
      buyed: false,
      price: 22,
      reviews: [],
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

  const handleShowReviews = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFood(null);
  };

  const handleSendReview = () => {
    if (!selectedFood.buyed) {
      alert("You must purchase this product before leaving a review.");
      setRating(0);
      setHoveredRating(0);
      setReviewText("");
      return;
    }
    // DD-MM-YYYY, HH:MM:SS
    const timestamp = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const newReview = {
      username: "Current User",
      avatar: "./image/avatar.jpg",
      rating,
      review: reviewText,
      timestamp,
    };

    // Add to reviews of selectedFood
    setSelectedFood(prevFood => ({
      ...prevFood,
      reviews: [...(prevFood.reviews || []), newReview],
    }));

    // Reset
    setRating(0);
    setHoveredRating(0);
    setReviewText("");
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
        <h2 style={{ textAlign: 'center' }}>Today Menu</h2>

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
              <button>Filter by Buyed</button>
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
                    <button className="btn blue-btn" onClick={() => handleAddToCart(food.name)}>
                      Add to Cart
                    </button>
                    <button className="btn blue-btn" onClick={() => handleShowReviews(food)}>
                      Reviews
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Reviews */}
        {showModal && (
          <div className="modal-review-overlay">
            <div className="modal-review-content">
              <div className="modal-review-header">
                <h3>Reviews for {selectedFood?.name}</h3>
                <button className="red-btn" onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', padding: '0px 10px', fontSize: '20px' }}>&times;</button>
              </div>
              <div className="review-list">
                {selectedFood?.reviews && selectedFood.reviews.length > 0 ? (
                  selectedFood.reviews.map((review, index) => (
                    <div key={index} className="review-item row">
                      <div className="user-avatar col-2">
                        <img src={review.avatar || "./image/avatar.jpg"} alt="User Avatar" />
                        <p className="user-name">{review.username}</p>
                        <p className="review-timestamp">{review.timestamp}</p>
                      </div>
                      <div className="col-10 rating-section" style={{ textAlign: 'left' }}>
                        <span className="me-2">Rating:</span>
                        {[...Array(5)].map((_, idx) => (
                          <i
                            key={idx}
                            className={`fas fa-star ${idx < review.rating ? "selected" : ""}`}
                            style={{ margin: '0 5px' }}
                          ></i>
                        ))}
                        <div className="review-content">
                          <p>{review.review}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet. Be the first to review!</p>
                )}
              </div>
              {/* New review */}
              <div className="add-review row">
                <div className="rating-section col-12 d-flex align-items-center">
                  <span className="me-2">Rating:</span>
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fas fa-star ${index < (hoveredRating || rating) ? "selected" : ""}`}
                      onMouseEnter={() => setHoveredRating(index + 1)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(index + 1)}
                      style={{ margin: '0 5px' }}
                    ></i>
                  ))}
                </div>
                <div className="col-12 d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control me-1"
                    placeholder="Write a review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <button
                    className="btn blue-btn"
                    disabled={rating === 0 || !reviewText.trim()}
                    onClick={handleSendReview}>
                    Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

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

export default Menu;