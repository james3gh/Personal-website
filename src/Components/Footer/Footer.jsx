import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="p-0">
      <div id="copyright">
        <p>&#169; 2023 All rights reserved by: James Thomas </p>
        <div id="copyright-icons">
          <a
            href="https://tinyurl.com/resume-oc"
            target="blank"
            rel="noreferrer"
          >
            <i class="bi bi-file-person"></i>
          </a>{" "}
          <a
            href="https://github.com/james3gh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/james-thomas-421b9a203/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
