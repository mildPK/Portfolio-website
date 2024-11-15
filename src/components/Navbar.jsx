import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-800 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center"> 
            <div className="sm:text-2xl lg:text-3xl font-semibold text-white">Phutthikiat</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="sm:text-xl lg:text-2xl hover:text-white hover:font-semibold cursor-pointer"
              >
                Home
              </Link>
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="sm:text-xl lg:text-2xl hover:text-white hover:font-semibold cursor-pointer"
              >
                About
              </Link>
              <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                className="sm:text-xl lg:text-2xl hover:text-white hover:font-semibold cursor-pointer"
              >
                Skills
              </Link>
              <Link 
                to="education" 
                smooth={true} 
                duration={500} 
                className="sm:text-xl lg:text-2xl hover:text-white hover:font-semibold cursor-pointer"
              >
                Education
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="sm:text-xl lg:text-2xl hover:text-white hover:font-semibold cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="block text-base hover:text-white hover:font-semibold cursor-pointer"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="block text-base hover:text-white hover:font-semibold cursor-pointer"
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="block text-base hover:text-white hover:font-semibold cursor-pointer"
          >
            Skills
          </Link>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            className="block text-base hover:text-white hover:font-semibold cursor-pointer"
          >
            Education
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="block text-base hover:text-white hover:font-semibold cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
