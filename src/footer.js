import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="container">
                <div className="columns">
                    <div className="footer-col">
                        <h3 className="title">Services</h3>
                        <ul className="list">
                            <li><a href="#" className="link">About us</a></li>
                            <li><a href="#" className="link">Our services</a></li>
                            <li><a href="#" className="link">Privacy policy</a></li>
                            <li><a href="#" className="link">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title">About</h3>
                        <ul className="list">
                            <li><a href="#" className="link">FAQ</a></li>
                            <li><a href="#" className="link">Shipping</a></li>
                            <li><a href="#" className="link">Returns</a></li>
                            <li><a href="#" className="link">Payment options</a></li>
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
                <div className="copyright"><p> © 2022</p></div>
            </footer>
        </div>
    );
}

export default Footer;