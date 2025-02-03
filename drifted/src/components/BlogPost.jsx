import React from 'react'
import BlogPage from './BlogPage'

const BlogPost = () => {
    let data = ["https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836571/woman-on-boat_xzmjem.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836570/ocean_uxotuj.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836575/yemple_chnin2.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836583/pretty_wevoi3.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836573/windy-road_fyokbl.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836581/farmer_dedxas.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837195/tracks_xpgujb.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836587/yaxi_mbn2lr.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836577/yenys_oxsnun.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836579/rainy-window_mwrf6g.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837183/cat_k48w2b.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836585/thailand-sign_ravrw7.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837185/chili_n7kmwg.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836590/cool_s4nou6.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837191/buddah_sbjtqd.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736836589/boat_km6uqw.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837187/temple2_orqxdn.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837189/houses_mspz24.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837181/thai-street_wn5ohl.jpg",
            "https://res.cloudinary.com/dynkv0p8x/image/upload/v1736837193/more-mountains_hv5g1e.jpg"]
    return (
    <>
    {data.map((post)=> {
        return (
          <div className="hi" key={post.id}><a href={`/blog/${post.id}`}>< BlogPage/></a></div>
        )
      })}
    </>
)
}

export default BlogPost