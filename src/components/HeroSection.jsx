import React from 'react';
import mockupsImage from '../assets/img/image-mockups.png';

const HeroSection = () => {
    return (
        <div id="mockups" className="w-full lg:h-[650px] z-10 relative">
            <div className="flex flex-col-reverse lg:flex-row lg:flex-auto mx-auto h-full relative lg:container">
                <div className="flex flex-col justify-center px-6 lg:px-16 my-16 items-center lg:items-start">
                    <h1 className="text-4xl lg:text-6xl text-darkBlue mb-10 lg:max-w-lg text-center lg:text-left">Next generation digital banking</h1>
                    <p className="text-grayishBlue text-xl lg:max-w-3xl pr-8 text-center lg:text-left">
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <div className="">
                        <button className="bg-gradient-to-r from-limeGreen to-brightCyan mt-10 py-4 px-8 rounded-full text-white">Request Invite</button>
                    </div>
                </div>
                <div id="mockups-sm" className="w-full">
                    <img className="hidden lg:block max-w-[100%] h-auto -right-[170px] -top-[120px] absolute" src={mockupsImage} alt="" />
                    <img className="lg:hidden grow shrink-0 basis-0 mx-auto -mt-40" src={mockupsImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
