import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Menu from "../Component/Navbar"
import Footer from "../Component/Foot";



const App: React.FC = () => {

    return (
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/"/>
            <Route/>
        </Routes>
        <Footer/>

        
        
        </BrowserRouter>
    );
};



export default App