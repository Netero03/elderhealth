import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [showFixedNavbar, setShowFixedNavbar] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      // setShowFixedNavbar(currentScrollPos === 0);
      setShowNavbar(isScrollingUp || currentScrollPos === 0 || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* <nav className={`bg-transparent opacity-50 h-20 w-full flex items-center justify-between px-5 z-50 fixed top-0 transition-transform duration-500 ${showFixedNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center">
    
          <div className="flex items-center mr-8">
            <span className="text-white text-lg font-semibold">Company Name</span>
          </div>

          <ul className="flex items-center">
            <li className="mr-6">
              <a href="#" className="text-white">Plans</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Our Services</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Moh TV</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Blog</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Media</a>
            </li>
          </ul>
        </div>
      </nav> */}

      <nav className={`fixed top-0 w-full h-20 flex items-center justify-between px-5 z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0 bg-gray-300 bg-opacity-50' : '-translate-y-full bg-transparent'}`}>
        <div className="flex items-center">
          {/* Company Logo and Name */}
          <Link to="/" className="flex items-center mr-8">
            <span className="text-white text-lg font-semibold">Company Name</span>
          </Link>

          {/*Navigation Links */}
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="#" className="text-white ">Plans</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Our Services</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Moh TV</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Blog</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white ">Media</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          {/* Circle Button with WhatsApp Logo */}
          <Link to="" className='flex items-centre p-3 border-solid border-2 border-white rounded-full w-14 h-14 justify-center '>
            <img
              src="/assets/icons/whatsapp.svg"
              alt='logo'
              width={32}
              height={32}
              className='w-auto h-auto mx-auto'
            />
          </Link>

          {/* Login Button */}
          <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
