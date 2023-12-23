import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { CartContext } from "./CartContext";

const Navbar = ({}) => {
  const [activeLink, setActiveLink] = useState("home");

  const { cartItems } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light `}
      style={{ backgroundColor: "#634832" }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between ">
          <a href="#" className="navbar-brand d-block d-md-none">
            <i className="bi bi-justify"></i>
          </a>
          <Link
            to="/"
            className="navbar-brand"
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textDecoration: "none",
              marginRight: "10px", // Add margin to the right
            }}
          >
            <i className="bi bi-cup-hot"></i> Coffee Paradise
          </Link>
          <button
            className={`navbar-toggler ${styles.togglerStyle} ms-5`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link
              to="/menu"
              className={`nav-link ${styles.navLinkStyle} ${
                activeLink === "menu" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("menu")}
            >
              Menu
            </Link>
            <Link
              to="/signup"
              className={`nav-link ${styles.navLinkStyle} ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("signup")}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`nav-link ${styles.navLinkStyle} ${
                activeLink === "login" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("login")}
            >
              Log In
            </Link>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item border rounded position-relative">
              <Link to="/cart" className={`nav-link ${styles.cartLinkStyle}`}>
                <i className="bi bi-cart3 me-2"></i>
                Your Cart
              </Link>
              {totalItemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {totalItemCount}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
