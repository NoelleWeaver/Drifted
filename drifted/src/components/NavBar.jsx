import React from 'react'
import '../pages/css/navbar.css'

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <img className="navbarLogo" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472515/paper-plane_lpbunt.png"/>
      <div className="navbarLinks">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div className="searchContainer">
        <button className='searchButton'>
          <img className='searchImg' src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472517/search_hnuf23.png" />
        </button>
        <input className='searchInput' type="text" placeholder="Search..." />
      </div>
      <div className="navbarLineBreak"></div>
    </div>
  )
}

export default NavBar