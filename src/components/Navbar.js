import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { Profile } from './Profile';
import "./css/Navbar.css";

export default function Navbar() {
  const toggleNavbar = ()=>{
    document.querySelector(".header").classList.toggle("active")
  }
  
  return (
    <div>
      <nav className="header">
            <div className="logo">
              <img src="logo192.png" alt="" width="25"/>
              <Link className="navbar-title" to="/">FlyBuy</Link>
            </div>
            <ul className="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop </Link></li>
              <li><Link to="/blog">Blog </Link></li>
              <div class="dropdown">
                <li id='profile'><Link to="/"><i class="fa-solid fa-user"></i></Link></li>
                <div class="dropdown-content">
                  <Profile/>
                  <LoginButton/>
                  <LogoutButton/>
                </div>
              </div>
              <li><Link to="/"><i className="fa-solid fa-bag-shopping"></i></Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>

            <div className="mobile-nav" onClick={()=>toggleNavbar()}>
              <i className="fa-solid fa-bars" name='bars'></i>
              <i className="fa-solid fa-xmark" name='cross'></i>
            </div>
    	</nav>
    </div>
  )
}
