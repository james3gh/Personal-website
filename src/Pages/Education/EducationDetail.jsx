import React from "react";

const EducationDetail = ({ school, standard, icon, percent, extra }) => {
  return (
    <div className="col-lg-3 col-md-10 col-11 m-auto edu-content mt-4">
      <i className={`fa fa-${icon}`} aria-hidden="true" />
      <h5>{standard}</h5>
      <p>
        <span>{school}</span>
        <br />
        Percentile : {percent} <br />
        {extra ? extra : ""}
      </p>
    </div>
  );
};

export default EducationDetail;
