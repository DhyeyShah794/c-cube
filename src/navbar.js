import React from 'react';
import './navbar.css';

const Nav = () => {
    return (
        <div>
        <a href="../index.html"><img src={require("./Images/C-Cube.png")} className="logo" /></a>
        <div className="navbar">
            <nav className="nav">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="about.html">About </a></li>
                    <li><a href="donate.html">Donate </a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li><a href="events.html">Events </a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </nav>
            <div className="menu" id="menu-btn">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {/* <nav className="new-nav" id="mob-nav">
                <ul className="ul-new-nav">
                <li><a href="../index.html">Home</a></li>
                <li><a href="about.html">About </a></li>
                <li><a href="donate.html">Donate </a></li>
                <li><a href="contactus.html">Contact Us</a></li>
                <li><a href="events.html">Events </a></li>
                <li><a href="login.html">Login</a></li>
                </ul>
            </nav> */}
        </div>
        </div>
    );
}

export default Nav;