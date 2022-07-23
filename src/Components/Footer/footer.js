import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
            The main motto of this club is to train today's youths to become great leaders in the future Intellectual education influences the head and value-based education influences the heart. In fact, education that does not train the heart can be dangerous. If we want to build character in our offices, homes and society, we must have the wisdom to live a principle-centered life based on honesty, compassion, courage, responsibility etc.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contribute</Link>
              </li>
              <li>
                <Link to="/donate" className="footer-link">Donate</Link>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Socials</h6>
            <ul class="footer-links">
              <li>
                <a href="https://www.instagram.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://linktr.ee/" className="footer-link" target="_blank" rel="noopener noreferrer">Linktree</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
