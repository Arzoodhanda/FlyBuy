import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Profile } from "./Profile";
import "./css/Navbar.css";

export default function Navbar() {
  const toggleNavbar = () => {
    document.querySelector(".header").classList.toggle("active");
    if (document.querySelector(".header").classList.contains("active")) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  };
  const navClick = () => {
    document.querySelector(".header").classList.toggle("active");
    document.querySelector("html").style.overflow = "auto";
  };

  return (
    <div className="header">
      <div className="logo">
        {/* <img src="logo192.png" alt="" width="25"/> */}
        <Link className="navbar-title" to="/">
          FlyBuy
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/" onClick={navClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={navClick}>
            Shop{" "}
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={navClick}>
            Blog{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={navClick}>
            About Us
          </Link>
        </li>
        <div className="dropdown">
          <li id="profile">
            <i className="fa-solid fa-user"></i>
          </li>
          <div className="dropdown-content">
            <Profile />
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        <li>
          <Link to="/wishlist" title="Wishlist" onClick={navClick}>
            <i className="fa-solid fa-heart"></i>
          </Link>
        </li>
        <li>
          <Link to="/cart" title="Add to Cart" onClick={navClick}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>

      {/* <div className="mob-items"> */}
        {/* <Link to="/wishlist" title="Wishlist" onClick={navClick}>
          <i className="fa-solid fa-heart"></i>
        </Link> */}
        <div className="mobile-nav" onClick={() => toggleNavbar()}>
          <i className="fa-solid fa-bars" name="bars"></i>
          <i className="fa-solid fa-xmark" name="cross"></i>
        </div>
      {/* </div> */}
    </div>
  );
}
