import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const ooptions = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  };
  return (
    <div className="container-fluid pt-2">
      <div className="row" id="projects">
        <h1>PROJECTS</h1>
        <p>
          These are the projects made by me using various tech-stacks like
          Vanilla Javascript, React, Node, ExpressJS, MongoDB, JQuery,
          Bootstrap. These sites are deployed on Netlify and Heroku. Code to
          these are present in my Github. Link is provided below. Check them out
          !!!
        </p>
        <OwlCarousel className="owl-theme" {...ooptions}>
          <ProjectDetail
            index={1}
            img={"./img/Projects/Project-1.jpg"}
            projectLink={"https://stack-again-app.onrender.com/"}
            githubLink={"https://github.com/james3gh/stack-again-frontend"}
          />
          <ProjectDetail
            index={2}
            img={"./img/Projects/Project-2.jpg"}
            projectLink={
              "https://6266e32899f7620e5e22c457--reactproject-mobilestore.netlify.app/"
            }
            githubLink={"https://github.com/james3gh/ReactProject-MobileStore"}
          />
          <ProjectDetail
            index={3}
            img={"./img/Projects/Project-3.png"}
            projectLink={"https://github.com/james3gh/Javascript-projects/"}
            githubLink={"https://github.com/james3gh/Javascript-projects/"}
          />
          <ProjectDetail
            index={4}
            img={"./img/Projects/Project-4.png"}
            projectLink={"/"}
            githubLink={"https://github.com/james3gh/Personal-website"}
          />
          {/* <ProjectDetail
            index={5}
            img={"./img/Projects/Project-5.jpg"}
            projectLink={"https://color-game-eight.vercel.app/"}
            githubLink={"https://github.com/james3gh/Color-game"}
          /> */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Projects;
