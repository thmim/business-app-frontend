import React from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <div className="navbar">
  <div className="navbar-start">
   <img src={logo} className='w-36 h-14' alt="Company logo" />
  </div>
  <div className="navbar-end">
    <a className="btn btn-accent text-white font-bold py-5 px-6">Get Started</a>
  </div>
</div>
    );
};

export default Navbar;