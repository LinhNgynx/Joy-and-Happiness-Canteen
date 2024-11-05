import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import walletList from "../../../db/walletList";
import "./Wallet.css";
const Wallet = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState("");
    const [selectedWallet, setSelectedWallet] = useState(null);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredWallets = walletList.filter((wallet) => {
        return wallet.username
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    const handleAddFundsClick = (wallet) => {
        setSelectedWallet(wallet);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setAmount("");
        setSelectedWallet(null);
    };

    const handleConfirmAddFunds = () => {
        if (selectedWallet && amount) {
            // Here, you would typically update the wallet balance in your state management system
            selectedWallet.balance += parseFloat(amount);
            // Optionally, display a success message
            alert(`Added $${amount} to ${selectedWallet.username}'s wallet.`);
            handleCloseModal(); // Close the modal after confirming
        }
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

                <h2 style={{ textAlign: "center" }}>Student wallets</h2>
                <div className="main-section">
                    <div className="pending-invoices" style={{flex: "0 0 70%"}}>
                        <input
                            type="text"
                            placeholder="Search by user name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
                        />
                        <table className="list-invoice-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Balance ($)</th>
                                    <th style={{ width: '300px' }}>Add Funds</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredWallets.map((wallet) => (
                                    <tr key={wallet.id}>
                                        <td>{wallet.username}</td>
                                        <td>${wallet.balance.toFixed(2)}</td>
                                        <td>
                                            <button className="btn blue-btn" onClick={() => handleAddFundsClick(wallet)}>Add Funds</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal for adding funds */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Enter Amount to Add ($)</h3>
                            <input
                                type="number"
                                className="form-control amount-input"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                min="1"
                            />
                            <div className="modal-buttons">
                                <button className="btn red-btn" onClick={handleCloseModal}>Cancel</button>
                                <button className="btn blue-btn" onClick={handleConfirmAddFunds}>Confirm</button>
                            </div>
                        </div>
                    </div>
                )}

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

export default Wallet;
