import React from 'react'
import Comments from "../components/Comments"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const BlogPost = () => {
  return (
    <>
        <NavBar />

        <Comments currentUserId="1" />
        <Footer />
    </>
  )
}

export default BlogPost