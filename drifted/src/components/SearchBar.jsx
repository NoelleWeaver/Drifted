import React from 'react'

const SearchBar = () => {
  return (
    <section className='search_section'>
        <div className='search_input_div'>
            <input type='text' className='search_input' placeholder='Search...' autoComplete='off' />
            <div className='search_icon'>
                <img src='https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472517/search_hnuf23.png' />
            </div>
        </div>
        <div className='search_result'>
            <a href='#' target='_blank' className='search_suggestion_line'>
                This is suggestion line.
            </a>
        </div>
    </section>
  )
}

export default SearchBar