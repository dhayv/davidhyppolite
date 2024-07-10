import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Menu from "../Component/Navbar"




const App: React.FC = () => {

    return (
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/"/>
            <Route/>
        </Routes>
        
        
        </BrowserRouter>
    )
}



export default App