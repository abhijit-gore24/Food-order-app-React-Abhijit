import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
  faDiscord,
  faFacebook,
  faRedhat,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section about">
          <h2 className="footer-logo">Abhijit App</h2>
          <p>
            Abhijit Gore, an accomplished software developer based in Pune with
            2.5+ years of experience. Specializing in frontend development with
            Angular and React, backend expertise in Java and Spring Boot, and
            certified in AWS and Microsoft DevOps practices.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/data">Data Page</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://discord.com/channels/@me"
              aria-label="Discord"
              className="icon-black"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="#" aria-label="Instagram" className="icon-black">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" aria-label="Twitter" className="icon-black">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://github.com/abhijit-gore24"
              aria-label="GitHub"
              className="icon-black"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijit-gore-5a71b4180/"
              aria-label="LinkedIn"
              className="icon-black"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="#" aria-label="Redhat" className="icon-black">
              <FontAwesomeIcon icon={faRedhat} size="2x" />
            </a>
            <a href="#" aria-label="Facebook" className="icon-black">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" aria-label="AWS" className="icon-black">
              <FontAwesomeIcon icon={faAws} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Abhijit Gore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
