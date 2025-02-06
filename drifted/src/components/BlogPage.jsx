import React from "react";
import Comments from "./Comments";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import blogs from "../blog-data.json";
import '../pages/css/blog.css';
import '../pages/css/gallery.css'

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <>
      <NavBar />

      <div className="blog-header">
        <img className="blog-top-img" src={blog["top-img"]} alt={blog.title} />
        <div className="blog-content">
          <h1 className="big-title">{blog.title}</h1>
          <h1 className="small-title">{blog.title2}</h1>
          <p className="author">By {blog.author}</p>
          <p className='date'>{new Date(blog.date).toLocaleDateString()}</p>
          <p className="content">{blog.content}</p>
        </div>
      </div>

      <div className="gallery-back">
        <div className="gallery-container">
          {blog.picArray.map((image, index) => (
            <div className="gallery-box" key={index}>
              <img src={image} alt={`Gallery Image ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <Comments currentUserId="1" />
      <Footer />
    </>
  );
};

export default BlogPage;