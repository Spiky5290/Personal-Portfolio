import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe className id="About_Me"/>
      <MyProjects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
