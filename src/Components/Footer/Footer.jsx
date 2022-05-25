import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="p-0">
      <div id="copyright">
        <p>
          Copyright &#169; 2021 All rights reserved by:{" "}
          <span>James Thomas</span>
        </p>
        <div id="copyright-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://github.com/james3gh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/james-thomas-421b9a203/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
