
import './css/main.css';
import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import blog from "../blog-data.json"
// import BlogPage from "../components/BlogPage";

export const main = () => {
  return (
    <>
    <Navbar className="navbar" />
      <div className="top-container">
        <img className="main" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1738875264/mountain_wskmaf_jozokp.jpg" alt="Mountains" />
      </div>
      
      <div className="blog-container">
        <h1 className="places-title">Places</h1>
      </div>
      <div className="blog-container-main">
  {blog.map((post) => (
    <div className="blog-item" key={post.id}>
      <a href={`/blog/${post.id}`}>
        <img className="top-img" src={post["top-img"]} alt="Blog post image" />

        <div className="location-container">
          <img
            className="location-pin"
            src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472515/location_zlpzno.png"
            alt="Location pin"
          />
          <p className="location-text-main">{post["location"]}</p>
        </div>
      </a>
    </div>
  ))}
</div>
      <Footer />
    </>
  )
}
export default main