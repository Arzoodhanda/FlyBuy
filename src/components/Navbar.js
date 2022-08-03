import React from 'react'
import { Link } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';
import "./css/Navbar.css";
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { Profile } from './Profile';

export default function Navbar() {
  const {user, isAuthenticated} = useAuth0();
  return (
    <div>
      <nav id="header">
            <div className="logo">
                <img src="logo192.png" alt="" width="25"/>
              <Link className="navbar-title" to="/">
                FlyBuy
              </Link>
            </div>
            <ul id="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop </Link></li>
              {/* <li><a to="/">Price</a></li>
              <li><a to="/">Categories</a></li> */}
              <li><Link to="/">Blog </Link></li>
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
    	</nav>
    </div>
  )
}
