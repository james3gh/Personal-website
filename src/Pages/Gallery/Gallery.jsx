import React from "react";
import "./Gallery.css";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  return (
    <div className="container-fluid overflow-hidden p-0">
      <section className="gallery" id="gallery">
        <h1>GALLERY</h1>
        <div className="row gallery ">
          <GalleryImage img={"./img/Gallery/gallery-1.jpg"} index={1} />
          <GalleryImage img={"./img/Gallery/gallery-2.jpg"} index={2} />
          <GalleryImage img={"./img/Gallery/gallery-3.jpg"} index={3} />
          <GalleryImage img={"./img/Gallery/gallery-4.jpg"} index={4} />
        </div>

        <div className="row gallery">
          <GalleryImage img={"./img/Gallery/gallery-5.jpg"} index={5} />
          <GalleryImage img={"./img/Gallery/gallery-6.jpg"} index={6} />
          <GalleryImage img={"./img/Gallery/gallery-7.jpg"} index={7} />
          <GalleryImage img={"./img/Gallery/gallery-8.jpg"} index={8} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
