import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { ModeToggle } from '@/components/ui/ModeToggle';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pt-4 px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="#">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium underline-offset-4">Rahul Jha</span>
        </div>
      </Link>
      <nav className="hidden md:flex ml-auto gap-4 sm:gap-6 cursor-pointer">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
      <div className='ml-4 hidden md:flex gap-4 sm:gap-6'>
      <ModeToggle/>
      </div>
      <button className="md:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose className="h-6 w-6" /> : <CgMenuRight className="h-6 w-6" />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact
            </Link>
            <ModeToggle/>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


