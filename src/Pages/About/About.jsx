import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div id="about">
        <div className="row about">
          <div className="about-me-img col-md-3 img-fluid col-10 text-center">
            <img src="/img/profile-pic.jpg" alt="profile-pic" />
          </div>
          <div className="about-me-content col-lg-7 col-10">
            <h2>ABOUT ME</h2>
            <p>
              Hi ! I am a full stack MERN developer. Folow me on LinkedIn to get
              in touch with me :){" "}
            </p>
            <br />
            <h2>PERSONAL INFORMATION</h2>
            <p>
              I am a student from IITBHU. I have worked with many open-source
              organization in their projects. Working with GSOC organization,
              CDLI was my latest experience. I have participated in
              KWOC'21(open-source fest of IIT Kharagpur), Hacktoberfest, and
              OpenCode'21(open-source fest of IIIT Allahabad)
            </p>
            <ul>
              <li>Name : James Thomas</li>
              <li>Age : 20 Years</li>
              <li>Phone : +01254689</li>
              <li>Email : James@gmail.com</li>
              <li>Address : California,USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
