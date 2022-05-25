import React from "react";

const GalleryImage = ({ img, index }) => {
  return (
    <div className="col-lg-3 col-sm-6 photo">
      <img src={img} alt={`galleryImage-${index}`} className="img-fluid" />
      <div className="photo-content d-none d-md-block">
        <h5>PROJECT TITLE</h5>
        <p>Photography</p>
        <div className="btn-icon">
          <i className="bi bi-link-45deg" />
          <i className="bi bi-plus" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
