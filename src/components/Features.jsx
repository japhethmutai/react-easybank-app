import React from 'react';
import SingleFeature from './SingleFeature';
import onlineIcon from '../assets/img/icon-online.svg';
import budgetingIcon from '../assets/img/icon-budgeting.svg';
import onboardingIcon from '../assets/img/icon-onboarding.svg';
import apiIcon from '../assets/img/icon-api.svg';

const features = [
    {
        icon: onlineIcon,
        title: 'Online Banking',
        text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
        icon: budgetingIcon,
        title: 'Simple Budgeting',
        text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
        icon: onboardingIcon,
        title: 'Fast Onboarding',
        text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
        icon: apiIcon,
        title: 'Open API',
        text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
] 

const Features = () => {
    return (
        <div className="w-full bg-veryLightGray py-20">
            <div className="lg:container px-6 lg:px-16 mx-auto my-4 text-center md:text-left">
                <h1 className="text-5xl text-darkBlue py-6">Why choose Easybank?</h1>
                <p className="text-xl text-grayishBlue">
                    We leverage Open Banking to turn your bank account into your financial hub.<br /> Control 
                    your finances like never before.
                </p>
                <div className="flex flex-col md:flex-row justify-between my-8 gap-x-4">
                    {features.map((feature, key) => <SingleFeature feature={feature} key={key} />)}
                </div>
            </div>
        </div>
    )
}

export default Features;