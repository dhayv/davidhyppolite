import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icons from "../img/image";

// Lazy load the components
const About = lazy(() => import("../Component/About"));
const Projects = lazy(() => import("../Component/Projects"));
const Skills = lazy(() => import("../Component/Skills"));
const imageKeys = Object.keys(Icons) as Array<keyof typeof Icons>;

const GitHubLink: React.FC = () => (
  <a href="https://github.com/dhayv" target="_blank" rel="noopener noreferrer">
    <img className="mb-3 skill-icon" src={Icons.Github} alt="GitHub" />
  </a>
);

const LinkedInLink: React.FC = () => (
  <a href="https://www.linkedin.com/in/david-h-60560b61/" target="_blank" rel="noopener noreferrer">
    <img className="mb-3 skill-icon" src={Icons.LinkedIn} alt="LinkedIn" />
  </a>
);

const Home: React.FC = () => {
  // Reference to the about section
  const aboutRef = useRef<HTMLDivElement | null>(null);

  // State to track visibility of the about section
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // UseEffect to observe the about section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Col className="text-center">
        <div id="home">
          <h3 className="display-4 mt-4">Hi, I'm James</h3>
          <h6 className="lead mb-4">A fullstack Developer from Arkansas.</h6>
          <GitHubLink />
          <LinkedInLink/>
        </div>
      </Col>

      <div id="about" ref={aboutRef}>
        {isAboutVisible && (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
            <Skills />
            <Projects />
          </Suspense>
        )}
      </div>
    </Container>
  );
};

export default Home;
