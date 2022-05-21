import React from 'react';

import facebookIcon from '../assets/img/icon-facebook.svg'; 
import youTubeIcon from '../assets/img/icon-youtube.svg'; 
import twitterIcon from '../assets/img/icon-twitter.svg';  
import pinterestIcon from '../assets/img/icon-pinterest.svg'; 
import instagramIcon from '../assets/img/icon-instagram.svg'; 
import LogoWhite from '../assets/logo/logo-white.svg';  

const Footer = () => {
    return (
        <div className="w-full bg-darkBlue">
            <div className="flex flex-col md:flex-row justify-between mt-8 lg:container px-6 lg:px-16 mx-auto">
                <div className="flex flex-col justify-between md:flex-row my-4">
                    <div className="flex flex-col items-center md:items-start my-8 gap-y-8 md:gap-y-16">
                        <img className="cursor-pointer" src={LogoWhite} alt="" />
                        <div className="flex gap-4">
                            <img src={facebookIcon} alt="/" />
                            <img src={youTubeIcon} alt="/" />
                            <img src={twitterIcon} alt="/" />
                            <img src={pinterestIcon} alt="/" />
                            <img src={instagramIcon} alt="/" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row text-white gap-x-32 md:py-16 justify-center md:items-start">
                    <div className="flex flex-col gap-y-3 text-center sm:text-left">
                        <a href="/#">About Us</a>
                        <a href="/#">Contact</a>
                        <a href="/#">Blog</a>
                    </div>
                    <div className="flex flex-col gap-y-3 text-center sm:text-left">
                        <a href="/#">Careers</a>
                        <a href="/#">Support</a>
                        <a href="/#">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end justify-center space-y-8 py-12 md:py-0">
                    <a href="#/" className="p-3 px-6 pt-2 text-white bg-gradient-to-r from-limeGreen to-brightCyan rounded-full baseline hover:text-lightGrayishBlue">Request Invite</a>
                    <span className="text-grayishBlue text-xl">&copy; Easybank. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;