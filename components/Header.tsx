
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const NavLinks = ({ isMobile = false }) => {
  const linkClass = "py-2 px-3 block rounded-md text-sm font-medium transition-colors";
  const activeLinkClass = "bg-brand-gold text-brand-dark";
  const inactiveLinkClass = "text-gray-300 hover:bg-brand-gray hover:text-white";

  return (
    <>
      <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>Home</NavLink>
      <NavLink to="/services" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>Services</NavLink>
      <NavLink to="/gallery" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>Gallery</NavLink>
      <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>Contact</NavLink>
    </>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-heading text-3xl tracking-wider uppercase">
              {BUSINESS_INFO.name}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="hidden md:block ml-4">
            <Link to="/contact" className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-amber-400 transition-colors duration-300 uppercase text-sm tracking-wider">
              Book Now
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks isMobile={true} />
            <div className="pt-4">
                <Link to="/contact" className="bg-brand-gold text-brand-dark text-center block w-full font-bold py-3 px-6 rounded-md hover:bg-amber-400 transition-colors duration-300 uppercase text-sm tracking-wider">
                    Book Now
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
