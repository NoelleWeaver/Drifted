import React from 'react';

const Gallery = ({
    pictures = [
        { 
            name: "Mountains", 
            url: "https://plus.unsplash.com/premium_photo-1675629118861-dc8aa2acea74?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Sunset", 
            url: "https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Autumn", 
            url: "https://images.unsplash.com/photo-1637016860934-552f2c28b35f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Grass", 
            url: "https://images.unsplash.com/photo-1458441087617-24d758e383f1?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Mesa", 
            url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "City", 
            url: "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Snow", 
            url: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Beach", 
            url: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Flowers", 
            url: "https://plus.unsplash.com/premium_photo-1709492256417-816ffcb88cc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Forest", 
            url: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Meadow", 
            url: "https://images.unsplash.com/photo-1617067128946-8c4f807d91e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Lake", 
            url: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Volcano", 
            url: "https://plus.unsplash.com/premium_photo-1679329103267-624f9775f317?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Underwater", 
            url: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        },
        { 
            name: "Cliff", 
            url: "https://images.unsplash.com/photo-1498889444388-e67ea62c464b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Add description here"
        }
    ]
}) => {
    return (
        // Make sure Tailwind is installed and set in your config for the given effect
        <div className="p-5 md:p-10">
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
                {/* This takes all the pictures and sets it into a masonary grid */}
                {pictures.map((picture, index) => (
                    <div 
                        key={index} 
                        className="relative group cursor-pointer overflow-hidden" 
                        style={{ 
                            marginTop: index !== 0 ? "1.25rem" : "0",
                            "@media (min-width: 1024px)": { 
                                marginTop: index !== 0 ? "2rem" : "0" 
                            }
                        }}
                    >
                        <img
                            src={picture.url}
                            alt={picture.description}
                            className="w-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 ease-in-out flex items-center justify-center">
                            <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-50 group-hover:translate-y-50">
                                <h3 className="text-2xl font-bold mb-2">{picture.name}</h3>
                                <p className="text-sm line-clamp-3">{picture.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Gallery