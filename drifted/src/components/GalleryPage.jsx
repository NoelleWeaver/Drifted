import React, { useState, useEffect } from 'react';

const LoadingSkeleton = () => (
    <div className="animate-pulse bg-gray-200 w-full h-64 rounded-lg"></div>
);
const Gallery = ({
    pictures = [
        // Tokyo, Japan
        { 
            name: "Sunset in Tokyo",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374022/sunset_j9265t.jpg",
            description: "A beautiful sunset view over the Tokyo skyline"
        },
        {
            name: "Kyoto Temple",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374020/kyoto_beusnt.jpg",
            description: "Traditional temple architecture in Kyoto"
        },
        {
            name: "Cherry Blossoms",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374022/sakura_l2yx19.jpg",
            description: "Sakura trees in full bloom"
        },
        {
            name: "Japanese Restaurant",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374022/resturant_ei48bi.jpg",
            description: "Traditional Japanese dining experience"
        },
        {
            name: "Shibuya Crossing",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374021/major-crossing_hxhnhl.jpg",
            description: "The famous Shibuya pedestrian crossing"
        },
        {
            name: "Osaka Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374021/osaka_bwwmz2.jpg",
            description: "Vibrant street life in Osaka"
        },
        {
            name: "City Bus",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736805735/bus_ibkdjm.jpg",
            description: "Public transportation in Japan"
        },
        {
            name: "Garden Pond",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374022/pond_n28epa.jpg",
            description: "Tranquil Japanese garden pond"
        },
        {
            name: "Rainy Day",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736806599/rain_atrh47.jpg",
            description: "Atmospheric rainy street scene"
        },
        {
            name: "Torii Gates",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736806664/red-gates_ahk7me.jpg",
            description: "Traditional red Torii gates"
        },
        {
            name: "Night Lights",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832315/night-lights-town_tf8luj.jpg",
            description: "City lights illuminating the night"
        },
        {
            name: "Street Performance",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832313/man-with-aura_bxycrv.jpg",
            description: "Urban street performance"
        },
        {
            name: "Festival Scene",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832304/festival_mps8hn.jpg",
            description: "Traditional Japanese festival"
        },
        {
            name: "Colorful Display",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832111/colorful_qre0eo.jpg",
            description: "Vibrant colors of urban Japan"
        },
        {
            name: "Neighborhood Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832317/neighborhood-street_rpv9zg.jpg",
            description: "Quiet residential area"
        },
        {
            name: "Riverside Scene",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832316/trees_and_river_gaxk9h.jpg",
            description: "Peaceful riverside with trees"
        },
        {
            name: "Mount Fuji",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832314/mt.fuji_xtsxch.jpg",
            description: "Majestic view of Mount Fuji"
        },
        {
            name: "Subway Station",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832481/subway_swohty.jpg",
            description: "Modern subway transportation"
        },
        {
            name: "Urban Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832750/street_unwas2.jpg",
            description: "Busy urban street scene"
        },
        {
            name: "Happy Moment",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832751/happy_tvkqm4.jpg",
            description: "Joyful urban life"
        },

        // New York, USA
        {
            name: "City Towers",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736374024/towers_iwrscp.jpg",
            description: "New York's impressive skyline"
        },
        {
            name: "Wall Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833251/wall-street_wyzoh5.jpg",
            description: "Financial district of Manhattan"
        },
        {
            name: "City Welcome",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833455/new-york-sign_jh5gio.jpg",
            description: "Welcome to New York sign"
        },
        {
            name: "City Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833250/nice-looking-street_piipq7.jpg",
            description: "Characteristic New York street"
        },
        {
            name: "Statue of Liberty",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833249/liberty_l9q6cp.jpg",
            description: "Symbol of freedom and democracy"
        },
        {
            name: "Brooklyn Bridge",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833250/cool-bridge_dirgcg.jpg",
            description: "Iconic Brooklyn Bridge"
        },
        {
            name: "Rainy Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736832936/rainy-street_ljr0jo.jpg",
            description: "New York in the rain"
        },
        {
            name: "Times Square",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833455/advertistments_etle4x.jpg",
            description: "Bright lights of Times Square"
        },
        {
            name: "City Sunset",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833252/sunset_sfnvtz.jpg",
            description: "Sunset over Manhattan"
        },
        {
            name: "Night Lights",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833460/abunch-of-lights_mqm7ux.jpg",
            description: "City that never sleeps"
        },

        // Paris, France
        {
            name: "Paris Overview",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736833875/paris_ryr3gd.jpg",
            description: "Panoramic view of Paris"
        },
        {
            name: "French Architecture",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736834611/more-buildings_lxm6ao.jpg",
            description: "Classic French buildings"
        },
        {
            name: "Parisian Street",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736834518/something-french_jkfcvn.jpg",
            description: "Charming street in Paris"
        },
        {
            name: "Clock Tower",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736834613/pretty-clock_hvidvu.jpg",
            description: "Historic clock tower"
        },
        {
            name: "Historic Building",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736834516/some-important-building_d0uhrt.jpg",
            description: "Important historical landmark"
        },

        // Bangkok, Thailand
        {
            name: "Bangkok Cityscape",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736834781/thailand_pgcjcs.jpg",
            description: "Modern Bangkok skyline"
        },
        {
            name: "River Market",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836571/woman-on-boat_xzmjem.jpg",
            description: "Traditional floating market"
        },
        {
            name: "Coastal View",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836570/ocean_uxotuj.jpg",
            description: "Beautiful Thai coastline"
        },
        {
            name: "Temple Complex",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836575/yemple_chnin2.jpg",
            description: "Ancient Buddhist temple"
        },
        {
            name: "Street Scene",
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836583/pretty_wevoi3.jpg",
            description: "Vibrant street life in Bangkok"
        }
    ]
}) => {
    return (
        <div className="p-5 md:p-10">
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
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