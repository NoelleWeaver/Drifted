import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ onSearchResults }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [blogData, setBlogData] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const data = await import('../blog-data.json')
                setBlogData(data.default)
            } catch (error) {
                console.error('Error loading blog data:', error)
            }
        }
        
        fetchBlogData()
    }, [])

    const handleSearch = (query) => {
        const lowercaseQuery = query.toLowerCase()
        
        if (!query.trim()) {
            setSearchResults([])
            onSearchResults([])
            return
        }

        const filtered = blogData.filter(post => {
            return (
                post.title?.toLowerCase().includes(lowercaseQuery) ||
                post.title2?.toLowerCase().includes(lowercaseQuery) ||
                post.location?.toLowerCase().includes(lowercaseQuery) ||
                post.content?.toLowerCase().includes(lowercaseQuery) ||
                post.author?.toLowerCase().includes(lowercaseQuery)
            )
        })

        setSearchResults(filtered)
        onSearchResults(filtered)
    }

    const handleInputChange = (e) => {
        const query = e.target.value
        setSearchQuery(query)
        handleSearch(query)
    }

    const toggleSearch = () => {
        setIsExpanded(!isExpanded)
        if (!isExpanded) {
            document.querySelector('.searchInput')?.focus()
        }
    }

    return (
        <div className="searchContainer relative">
            <div className="flex items-center">
                {isExpanded && (
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="searchInput pr-8"
                        style={{
                            fontSize: '1.3rem',
                            fontWeight: 600
                        }}
                    />
                )}
                <button
                    onClick={toggleSearch}
                    className="searchButton"
                    aria-label="Search"
                >
                    <Search 
                        className="searchImg" 
                        size={24} 
                        color="black"
                        style={{ cursor: 'pointer' }}
                    />
                </button>
            </div>
            
            {isExpanded && searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    {searchResults.map((result) => (
                        <a
                            key={result.id}
                            href={`/blog/${result.id}`}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <div className="font-semibold">{result.title}</div>
                            {result.location && (
                                <div className="text-sm text-gray-600">{result.location}</div>
                            )}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar