import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";

const AlRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Education" element={<Education />} />
        <Route path="*" element={<h1>Page not Found 404 !!!</h1>} />
      </Routes>
    </>
  );
};

export default AlRoutes;
