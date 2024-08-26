import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Logo from "../assets/logo-white.png";
import { Link } from "react-scroll";
import CV from "../assets/CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-white/5 backdrop-blur border-b border-white/10 text-gray-300 z-10">
      <div>
        <img src={Logo} alt="logo" className="h-10 pl-2" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            className="hover:border-b-2 hover:border-gray-300"
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2"
            to="about"
            smooth={true}
            duration={500}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2"
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2"
            to="work"
            smooth={true}
            duration={500}
            offset={-20}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2"
            to="contact"
            smooth={true}
            duration={500}
            offset={-20}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-3xl" />
        ) : (
          <FaTimes className="text-3xl" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[40vh] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="pl-5 flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/anders-youssef-b884121b6/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1B2C36]">
            <a
              className="pl-5 flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Andazu"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B54600]">
            <a
              className="pl-5 flex justify-between items-center w-full text-gray-300"
              href="mailto:andersmazen@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#362D1B]">
            <a
              className="pl-5 flex justify-between items-center w-full text-gray-300"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
