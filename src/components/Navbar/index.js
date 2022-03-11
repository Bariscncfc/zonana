import React from "react";
import './navbar.scss';
import logo from '../../assets/images/burger.png';


const Navbar = () => {
    return(
        <div className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="logo" style={{width:80}}/>
          </div>
            <div className="navbar__menu">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">MENU</a>
                </li>
                  <li>
                      <a href="#">TEAM</a>
                  </li>
                  <li>
                      <a href="#">GALLERY</a>
                  </li>
                  <li>
                      <a href="#">BLOG</a>
                  </li>
                  <li>
                      <a href="#">PRICING</a>
                  </li>
                  <li>
                      <a href="#">RESERVATION</a>
                  </li>
                  <li>
                      <a href="#">CONTACT US</a>
                  </li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar;