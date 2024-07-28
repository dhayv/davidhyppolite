import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

// Lazy load the components
const About = lazy(() => import("../Component/About"));
const Projects = lazy(() => import("../Component/Projects"));
const Skills = lazy(() => import("../Component/Skills"));

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
      <div id="home">
        <h1>Hello, and welcome! I am James</h1>
      </div>
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
