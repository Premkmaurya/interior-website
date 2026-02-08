import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__center">
        <div className="footer__section">
          <h4>Customer</h4>
          <ul>
            <li>
              <Link to="/register">Register Your Floor</Link>
            </li>
            <li>
              <Link to="/contact">Information</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Social</h4>
          <ul>
            <li>
              <Link to="/instagram">Instagram</Link>
            </li>
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/terms-of-use">Terms of Use</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 DUCHATEAU. All rights reserved.</p>
        <p>The Tailored Space</p>
        <div>
          <h1>Norrlands trä</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
