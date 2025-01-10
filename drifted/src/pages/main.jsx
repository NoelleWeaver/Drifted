import { useState } from "react";
import './css/main.css';
import React from 'react'

export const main = () => {
  return (
    <>
      <div className="top-container">
        <img className="main" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736469296/mountain_wskmaf.jpg" alt="Mountains" />
      </div>

      <div className="blog-container">
        <h1 className="places-title">Places</h1>
      </div>
    </>
  )
}
export default main