import React from "react";
import "./Education.css";
import EducationDetail from "./EducationDetail";

const Education = () => {
  return (
    <div className="container-fluid pt-3">
      <section id="edu-section">
        <div className="row" id="education">
          <h1 className="mb-3">EDUCATION</h1>
          <p>
            “Education is not preparation for life; education is life itself.” –{" "}
            <b>John Dewey</b>
          </p>
          <div className="row justify-content-evenly-lg text-center edu">
            <EducationDetail
              school={"St Joseph's Co-Ed School, BHOPAL"}
              standard={"10th"}
              percent={"95%"}
              icon={"id-card"}
            />
            <EducationDetail
              school={"St Joseph's Co-Ed School, BHOPAL"}
              standard={"12th"}
              percent={"94%"}
              icon={"book"}
            />
            <EducationDetail
              school={"Indian Institute of Technology BHU, VARANASI"}
              standard={"COLLEGE"}
              percent={"9.4 CPI"}
              icon={"graduation-cap"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
