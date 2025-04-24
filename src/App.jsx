// App.jsx
import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";


const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleExploreClick = () => {
    setShowLanding(false); // Hide landing page and show main website
  };

  return (
    <div className="bg-black dark:white">
      {showLanding ?  (
        <LandingPage onExploreClick={handleExploreClick} />
      ) : (
        <>
          <div id="home">
            
            <Navbar />
          </div>
         
          <Home />
          <div id="about"></div>
          <ResumeDownload />
          <About />
          <div id="skill"></div>

          <Skills />
          <div id="project"></div>
          <ProjectCard />

          <div id="contact"></div>
          <Contact />
          <Footer />
          <BackToTopButton />
        </>
      )}
    </div>
  );
};

export default App;
