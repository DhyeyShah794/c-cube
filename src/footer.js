import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="footdiv">
                    <div className="row justify-content-center">
                        <div className="footer-col">
                            <h3>Services</h3>
                                <ul>
                                <li><a href="#" className="link">About us</a></li>
                                <li><a href="#" className="link">Our services</a></li>
                                <li><a href="#" className="link">Privacy policy</a></li>
                                <li><a href="#" className="link">Affiliate program</a></li>
                                </ul>
                        </div>
                        <div className="footer-col">
                            <h3>About</h3>
                                <ul>
                                <li><a href="#" className="link">FAQ</a></li>
                                <li><a href="#" className="link">Shipping</a></li>
                                <li><a href="#" className="link">Returns</a></li>
                                <li><a href="#" className="link">Payment options</a></li>
                                </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Socials</h3>
                                <ul>
                                <li><a href="#" className="link">Instagram</a></li>
                                <li><a href="#" className="link">Twitter</a></li>
                                <li><a href="#" className="link">Linktree</a></li>
                                </ul>
                        </div>
                        <p className="copyright"> © 2022</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;