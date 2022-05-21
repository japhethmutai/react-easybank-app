import React, { useState } from 'react';

import Logo from '../assets/logo/logo.svg';

const navs = [
    {title: 'Home'},
    {title: 'About'},
    {title: 'Contact'},
    {title: 'Blog'},
    {title: 'Careers'},
]

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <nav className="w-full shadow-sm z-20 relative bg-white">
      <div className="lg:container flex items-center justify-between px-6 lg:px-16 py-6 mx-auto">
          <div className="">
            <img className="cursor-pointer" src={Logo} alt="" />
          </div>
          <div className="hidden md:flex space-x-6">
              {navs.map((nav, key) => <a href="#/" className="text-lg text-grayishBlue hover:border-b-limeGreen border-transparent border-4" key={key}>{nav.title}</a>)}
          </div>
          <a href="#/" className="hidden p-3 px-6 pt-2 text-white bg-gradient-to-r from-limeGreen to-brightCyan rounded-full baseline hover:text-lightGrayishBlue md:block">Request Invite</a>

          {/* Hamburger Icon */}
          <button className={!nav ? `block hamburger md:hidden focus:outline-none` : `open block hamburger md:hidden focus:outline-none`} onClick={handleClick}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
          </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className={!nav ? "hidden" : "absolute flex flex-col items-center self-end py-8 mt-6 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
          {navs.map((nav, key) => <a href="#/" className="text-grayishBlue" onClick={handleClose} key={key}>{nav.title}</a>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
