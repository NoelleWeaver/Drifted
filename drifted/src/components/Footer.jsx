import React from 'react'
import '../pages/css/footer.css'

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="logoContainer">
            <img className="logoImg" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472515/paper-plane_lpbunt.png" />
            <h1 className="logoText">Drifted</h1>
        </div>
        <div className="contactInfoContainer">
            <div className="emailInfo">
                <img className="emailImg" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472516/mail_kj3r7e.png"/>
                <p className="emailText">Email@gmail.com</p>
            </div>
            <div className="phoneInfo">
                <img className="phoneImg" src="https://res.cloudinary.com/dynkv0p8x/image/upload/v1736472515/phone_nbnflk.png" />
                <p className="phoneText">+1 (123) 456-7890</p>
            </div>
        </div>
        <div className="lineBreak"></div>
        <div className="copyrightContainer">2025 Drifted Inc All Rights Reserved</div>
    </div>
  )
}

export default Footer