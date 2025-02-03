import React from 'react'
import Comments from "./Comments"
import Footer from "./Footer"
import NavBar from "./NavBar"

const BlogPage = () => {
  return (
    <>
        <NavBar />

        <Comments currentUserId="1" />
        <Footer />
    </>
  )
}

export default BlogPage