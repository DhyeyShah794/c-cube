import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Nav = () => {
    return (
        <div>
            <Link to="/"><img src={require("./Images/C-Cube.png")} className="logo" /></Link>
            <div className="navbar">
                <nav className="nav">
                    <ul>
                        <li><Link className="Navbar-link" to="/">Home</Link></li>
                        <li><Link className="Navbar-link" to="/about">About</Link></li>
                        <li><Link className="Navbar-link" to="/donate">Donate</Link></li>
                        <li><Link className="Navbar-link" to="/contact">Contact</Link></li>
                        <li><Link className="Navbar-link" to="/events">Events</Link></li>
                        <li><Link className="Navbar-link" to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;