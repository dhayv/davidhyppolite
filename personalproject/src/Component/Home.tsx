import React, {lazy, Suspense, useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

const About = lazy(() => import("../Component/About"));
const Project = lazy(() => import ("../Component/Projects"))

const Home: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsAboutVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.1}
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();

    }, []);





    return (
        <Container>
            <div id="home"><h1>Hello, and welcome I am James</h1></div>
            <p>Im a full-stack developer</p>

            <div id="about" ref={aboutRef}>
                {isAboutVisible && (
                    <Suspense fallback={<div>Loading About..</div>}>
                         <About/>
                    </Suspense>

                )}
            </div>

        </Container>
    );
};


export default Home;