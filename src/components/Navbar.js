import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { Profile } from './Profile';
import "./css/Navbar.css";

export default function Navbar() {
  const toggleNavbar = ()=>{
    document.querySelector(".header").classList.toggle("active")
    if(document.querySelector(".header").classList.contains("active")){
      document.querySelector("html").style.overflow = "hidden";
    }
    else{
      document.querySelector("html").style.overflow = "auto";
    }
  }
  const navClick = ()=>{
    document.querySelector(".header").classList.toggle("active")
    document.querySelector("html").style.overflow = "auto";
  }
  
  return (
    <div>
      <nav className="header">
            <div className="logo">
              {/* <img src="logo192.png" alt="" width="25"/> */}
              <Link className="navbar-title" to="/">FlyBuy</Link>
            </div>
            <ul className="navbar">
              <li><Link to="/" onClick={navClick}>Home</Link></li>
              <li><Link to="/shop" onClick={navClick}>Shop </Link></li>
              <li><Link to="/blog" onClick={navClick}>Blog </Link></li>
              <li><Link to="/about" onClick={navClick}>About Us</Link></li>
              <div class="dropdown">
                <li id='profile'><Link to="/" title='User'><i class="fa-solid fa-user"></i></Link></li>
                <div class="dropdown-content">
                  <Profile/>
                  <LoginButton/>
                  <LogoutButton/>
                </div>
              </div>
              <li><Link to="/" title='Wishlist' onClick={navClick}><i class="fa-solid fa-heart"></i></Link></li>
              <li><Link to="/" title='Add to Cart' onClick={navClick}><i className="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>

            <div className="mobile-nav" onClick={()=>toggleNavbar()}>
              <i className="fa-solid fa-bars" name='bars'></i>
              <i className="fa-solid fa-xmark" name='cross'></i>
            </div>
    	</nav>
    </div>
  )
}
