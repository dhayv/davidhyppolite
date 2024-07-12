import React, { lazy , Suspense, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Menu from "../Component/Navbar"
import Footer from "../Component/Foot";

const Home = lazy(() => import("../Component/Home"));

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Menu/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes >
                    <Route path="/" element={<Home />}/>
                </Routes>
            </Suspense>
            
            <Footer/>
        </BrowserRouter>
    );
};



export default App