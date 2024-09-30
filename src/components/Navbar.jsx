import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { TbWorld } from 'react-icons/tb';
import { FaCloud, FaServer, FaCodeBranch, FaChevronDown } from 'react-icons/fa';
import { DiWindows } from 'react-icons/di';
import { IoIosSearch } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';


const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  const isToggle = () => {
    setToggle(!Toggle);
  };

  const closeMenu = () => {
    setToggle(false); // Properly closing the menu on click
  };

  return (
    <div className="bg-[#FF6746]">
      <div className="flex items-center justify-between lg:max-w-[1280px] md:max-w-[800px] p-2 md:p-5 max-w-[680px] px-7 text-white">
        <div className="text-2xl font-bold lg:text-3xl md:text-3xl">
          <Link to="/">
            <h1>Ezohost</h1>
          </Link>
        </div>

        <div className="relative flex flex-row items-center text-lg space-x-14">
          <div className="relative hidden group md:block lg:block">
            <NavLink className="hover:text-[#79DE82] transition-all duration-150">
              <h2 className="flex space-x-2 cursor-pointer">
                Services <p></p> <FaChevronDown className="self-center" />
              </h2>
            </NavLink>

            <div className="absolute w-[280px] p-4 space-y-4 text-gray-600 list-none top-7 z-10 border-2 hidden group-hover:block bg-white rounded-lg">
              <li className="flex items-center space-x-3 cursor-pointer">
                <TbWorld />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Shared Cloud Hosting</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaCloud />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150"> Premium Cloud Hosting</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <DiWindows />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Windows Cloud RDP</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaServer />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Cloud Storage Server</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaCodeBranch />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Cloud Proxy Server</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <IoIosSearch />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Domains</span>
              </li>
            </div>
          </div>

          <button className="absolute px-2 py-1 text-3xl text-black md:hidden right-24 transition-200 bg-white/25 rounded-xl" onClick={isToggle}>
            {Toggle ? <RxCross2 /> : <FiMenu />}
          </button>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? 'text-[#79DE82]' : 'text-white'} hover:text-[#79DE82] transition-all duration-150 hidden md:block lg:block`
            }
            to="/Contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? 'text-[#79DE82]' : 'text-white'} hover:text-black hover:bg-white transition-all duration-150 md:py-2 md:px-6 py-1 px-3 bg-white/25 rounded-lg`
            }
            to="/Console"
          >
            Console
          </NavLink>
        </div>
      </div>

      {/* Mobile responsive menu */}


      {Toggle && (
        <div onClick={closeMenu} className="bg-[#0075FF] md:hidden lg:hidden flex flex-col space-y-4 pt-8 pl-6 top-0 text-2xl h-screen fixed w-full z-30">
          <RxCross2 className='absolute top-0 pt-2 text-4xl text-white cursor-pointer right-10' />
          <div className="relative group">
            <NavLink
              className="hover:text-[#79DE82] transition-all duration-150 text-white"
            >
              <h2 className="flex space-x-2 cursor-pointer">
                Services <FaChevronDown className="self-center" />
              </h2>
            </NavLink>

            <div className="absolute w-[330px] p-4 space-y-4 text-gray-600 list-none left-3 top-8 bg-white z-10 border-2 hidden group-hover:block rounded-lg">
              <li className="flex items-center space-x-3 cursor-pointer">
                <TbWorld />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Shared Cloud Hosting</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaCloud />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150"> Premium Cloud Hosting</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <DiWindows />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Windows Cloud RDP</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaServer />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Cloud Storage Server</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaCodeBranch />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Cloud Proxy Server</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <IoIosSearch />{' '}
                <span className="hover:text-[#FF6746] transition-all duration-150">Domains</span>
              </li>
            </div>
          </div>

          <div>
            <NavLink onClick={closeMenu} className="hover:text-[#79DE82] transition-all duration-150 text-white" to="/Contact">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
