import { useState } from "react";
import './css/main.css';
import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import About from "../components/AboutPage";

export const main = () => {
    return (
    <>
    <Navbar className="navbar" />
        <About/>
    <Footer />
    </>
)
}
export default main