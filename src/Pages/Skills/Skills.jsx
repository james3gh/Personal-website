import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="row skills mt-3 pt-3 mb-5">
        <h1>SKILLS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, natus
          distinctio. Pariatur harum cumque natus, autem illum sunt incidunt
          voluptates amet labore, maxime inventore aliquam, dolore quasi
          mollitia tempore voluptate?
        </p>
        <div className="prog-bars">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {" "}
              HTML
            </div>
          </div>
          <br />
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              CSS
            </div>
          </div>
          <br />
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              jQUERY
            </div>
          </div>
          <br />
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              BOOTSTRAP
            </div>
          </div>
          <br />
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              REACT
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
