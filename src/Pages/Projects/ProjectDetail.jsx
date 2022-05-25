import React from "react";

const ProjectDetail = ({ img, index, projectLink, githubLink }) => {
  return (
    <div>
      <img src={img} alt={`project${index}`} />
      <div className="slider-links">
        <a href={projectLink} target="_blank" rel="noreferrer">
          Live-Link
        </a>
        <i className="bi bi-arrow-left-right" />
        <a href={githubLink} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
