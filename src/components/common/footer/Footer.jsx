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
              <Link to="/information">Information</Link>
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
            <li>
              <Link to="/linkedin">LinkedIn</Link>
            </li>
            <li>
              <Link to="/pinterest">Pinterest</Link>
            </li>
            <li>
              <Link to="/vimeo">Vimeo</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/designer-collective">Designer Collective</Link>
            </li>
            <li>
              <Link to="/collab">Collab</Link>
            </li>
            <li>
              <Link to="/dugood">Dugood</Link>
            </li>
            <li>
              <Link to="/inspiration">Inspiration</Link>
            </li>
            <li>
              <Link to="/contact">Contact Information</Link>
            </li>
            <li>
              <Link to="/showroom">Visit Our Showroom</Link>
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
              <Link to="/sales-policy">Sales Policy</Link>
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
