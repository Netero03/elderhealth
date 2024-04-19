import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setShowFixedNavbar(currentScrollPos === 0);
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
              <Link to="/plans" href="#" className="text-white">Plans</Link>
            </li>
            <li className="mr-6">
              <Link to="/services" href="#" className="text-white ">Our Services</Link>
            </li>
            <li className="mr-6">
              <Link to="/mohtv" href="#" className="text-white ">Moh TV</Link>
            </li>
            <li className="mr-6">
              <Link to="/blogs" href="#" className="text-white ">Blog</Link>
            </li>
            <li className="mr-6">
              <Link to="/media" href="#" className="text-white ">Media</Link>
            </li>
          </ul>
        </div>
      </nav> */}

      <nav className={`fixed top-0 w-full h-20 flex items-center justify-between px-5 z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0 bg-gray-300 bg-opacity-50' : '-translate-y-full bg-transparent'}`}>
        <div className="flex gap-5 max-w-full w-[1140px] max-md:flex-wrap">
          <Link to="/" className="flex-auto my-auto text-3xl font-extrabold leading-4 text-center text-white">
            ElderHealth
          </Link>
          <nav className="flex gap-5 text-base font-medium leading-4 max-md:flex-wrap max-md:max-w-full">
            <ul className="flex flex-auto gap-5 my-auto text-white">
              <li className="grow">
                <Link to="/plans">Plans</Link>
              </li>
              <li>
                <Link to="/services">OurServices</Link>
              </li>
              <li>
                <Link to="/mohtv">Moh TV</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
            </ul>
            <div className="flex gap-5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81710bdb7ec54028125e3483fc70026e22b71ebe42bd5ba9037ade42011b304e?apiKey=17ae877e53e24efa98605986dde5cfcc&"
                alt="User profile"
                className="shrink-0 aspect-square w-[50px]"
              />
              <Link to="/login" className="justify-center text-white px-6 py-4 my-auto border border-white border-solid rounded-[40px] max-md:px-5 cursor-pointer">
                Log in
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
