import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"

const Footer = () => {
  return (
    <div className = "footer">
        <div className="footer-content">
            <div className="footer-content-right">
                <img src={assets.logo} alt="" />
                <p>"Welcome to Tomato, where culinary art meets hospitality. Indulge in a symphony of flavors curated by our talented chefs, each dish a masterpiece crafted with care and passion. Whether you're craving the comfort of traditional favorites or the excitement of innovative cuisine, our menu offers something to delight every palate. Join us for an unforgettable dining experience, where every meal is a celebration of food, family, and community." </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className= "footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-522-454-4579</li>
                        <li>contact@tomato.com</li>
                    </ul>
            </div>

        </div>

        <hr />
        <p className= "footer-copyright">Copyright 2024 @ Tomato.com - All Rights Reserved</p>

    </div>
  )
}

export default Footer