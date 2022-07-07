import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Nav = () => {
    return (
        <div>
            <a href="../index.html"><img src={require("./Images/C-Cube.png")} className="logo" /></a>
                <div className="navbar">
                    <nav className="nav">
                        <ul>
                            <li><Link className="Navbar-link" to="/">Home</Link></li>
                            <li><Link className="Navbar-link" to="/about">About</Link></li>
                            <li><Link className="Navbar-link" to="/donate">Donate</Link></li>
                            <li><Link className="Navbar-link" to="/contact">Contact</Link></li>
                            <li><Link className="Navbar-link" to="/events">Events</Link></li>
                            <li><Link className="Navbar-link" to="/login">Login</Link></li>
                            {/* <li><a href="../index.html">Home</a></li>
                            <li><a href="about.html">About </a></li>
                            <li><a href="donate.html">Donate </a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                            <li><a href="events.html">Events </a></li>
                            <li><a href="login.html">Login</a></li> */}
                        </ul>
                    </nav>
                    <div className="menu" id="menu-btn">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
        </div>
    );
}

export default Nav;