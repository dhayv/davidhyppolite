import React, { lazy , Suspense, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Menu from "./src/Component/Navbar"
import Footer from "./src/Component/Foot";
import About from "./src/Component/About";
import Projects from "./src/Component/Projects";
import './App.css'

const Home = lazy(() => import("./src/Component/Home"));

const App: React.FC = () => {

    return (
        <div id="page-down">
            <BrowserRouter>
                <Menu/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes >
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/projects" element={<Projects />}/>
                    </Routes>
                </Suspense>
                
                <Footer/>
            </BrowserRouter>
        </div>
        
    );
};



export default App