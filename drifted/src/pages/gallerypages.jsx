import { useState } from "react";
import './css/main.css';
import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Gallery from "../components/GalleryPage";

export const main = () => {
    return (
    <>
    <Navbar className="navbar" />
        <Gallery/>
    <Footer />
    </>
  )
}
export default main