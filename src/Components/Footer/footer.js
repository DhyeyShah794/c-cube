import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="container">
                <div className="columns">
                    <div className="footer-col">
                        <h3 className="title">About</h3>
                        <ul className="list">
                            <li><Link to="/" className="link">Homepage</Link></li>
                            <li><Link to="/about" className="link">About us</Link></li>
                            <li><Link to="/events" className="link">Past events</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title">Contact</h3>
                        <ul className="list">
                            <li><Link to="/contact" className="link">Contact us</Link></li>
                            <li><Link to="/contact" className="link">Get in touch</Link></li>
                            <li><Link to="/donate" className="link">Donation</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title">Socials</h3>
                        <ul className="list">
                            <li><a href="#" className="link">Instagram</a></li>
                            <li><a href="#" className="link">Twitter</a></li>
                            <li><a href="#" className="link">Linktree</a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="copyright"><p> © 2022</p></div> */}
            </footer>
        </div>
    );
}

export default Footer;