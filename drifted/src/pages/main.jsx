import { useState } from "react";
import './css/main.css';
import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import blog from "../blog-data.json"
import BlogPost from "../components/BlogPage";
import Blog from '../components/BlogPost'

export const main = () => {
  return (
    <>
    <Navbar className="navbar" />
      <div className="top-container">
        <img className="main" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736469296/mountain_wskmaf.jpg" alt="Mountains" />
      </div>
      
      <div className="blog-container">
        <h1 className="places-title">Places</h1>
      </div>
      {blog.map((post)=> {
        return (
          <div className="hi" key={post.id}><a href={`/blog/${post.id}`}>< BlogPost/></a></div>
        )
      })}
      
      <Footer />
    </>
  )
}
export default main