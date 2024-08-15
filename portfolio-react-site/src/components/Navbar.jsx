import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo-white.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='logo' className='h-10'/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'> 
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger Menu */}
        <div className='hidden'>
            <FaBars />
        </div>

        {/* Mobile menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden'></div>        

    </div>
  )
}

export default Navbar