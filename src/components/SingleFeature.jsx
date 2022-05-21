import React from 'react';

const SingleFeature = ({ feature }) => {
    const { icon, title, text } = feature;

    return (
        <div className="">
            <div className=""><img className="my-6 mx-auto md:mx-0" src={icon} alt="/" /></div>
            <h3 className="text-2xl mb-6 text-darkBlue">{title}</h3>
            <p className="text-xl text-grayishBlue">{text}</p>
        </div>
    )
}

export default SingleFeature;