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
              Hi! I'm an engineering student enthusiastic about software
              development. Connect with me on LinkedIn to know more :){" "}
            </p>
            <br />
            <h2>PERSONAL INFORMATION</h2>
            <p>
              I am a student of IIT(BHU), Varanasi. I have worked as an{" "}
              <a
                href="https://drive.google.com/file/d/13nPsQsEsCHdUbwnHPweuWFT9PuJaAVP7/view?usp=sharing"
                target="blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                SDE Intern
              </a>{" "}
              at Amazon. I have also worked with many open-source organization
              in their projects like, GSOC organization-CDLI,{" "}
              <a
                href="https://kwoc.kossiitkgp.org/"
                target="blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                KWOC'21
              </a>
              (open-source fest of IIT Kharagpur),{" "}
              <a
                href="https://hacktoberfest.com/"
                target="blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Hacktoberfest
              </a>
              , and{" "}
              <a
                href="https://github.com/opencodeiiita"
                target="blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                OpenCode'21
              </a>
              (open-source fest of IIIT Allahabad). I also like solving  <a href="https://leetcode.com/jamesthomas3801/" target="blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >coding problems</a> to increase by problem-solving skill.
            </p>
            <ul>
              <li>Name : James Thomas</li>
              <li>
                Age :{" "}
                {process.env.REACT_APP_MY_AGE
                  ? process.env.REACT_APP_MY_AGE
                  : 23}{" "}
                Years
              </li>
              <li>Email : jamesthomas3801@gmail.com</li>
              <li>Address : Bhopal, India (Pincode: 462023)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
