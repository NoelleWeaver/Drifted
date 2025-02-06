import React from 'react';
import '../pages/css/navbar.css';
import SearchBar from './SearchBar';

const NavBar = () => {
  const handleSearchResults = (results) => {
    // You can handle the search results here
    // For example, update a global state or redirect to a search results page
    console.log('Search results:', results);
  };

  return (
    <div className="navbarContainer">
      <img 
        className="navbarLogo" 
        src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472515/paper-plane_lpbunt.png"
        alt="Logo"
      />
      <div className="navbarLinks">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
      </div>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className="navbarLineBreak"></div>
    </div>
  );
};

export default NavBar;