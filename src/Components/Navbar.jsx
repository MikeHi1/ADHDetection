import { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'

import React from 'react'

function NavItems({isMenuOpen}) {
  return (
    <ul className= {`${isMenuOpen ? "" : "hidden" } lg:flex items-start lg:items-center space-x-0 lg:space-x-8 flex-col lg:flex-row`}>
      <li>
        <a
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-tertiary"
        >
          <Link to="/"> Home </Link>
          {/* Links to Home using the path in main.jsx */}
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-tertiary"
        >
          <Link to="/testing"> Testing </Link>
          {/* Links to Testing using the path (/testing) in main.jsx */}
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-tertiary"
        >
          <Link to="/community"> Community </Link>
          {/* Links to Community using the path (/community) in main.jsx */}
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-tertiary"
        >
          <Link to="/about"> About us </Link>
          {/* Links to about us using the path (/about) in main.jsx */}
        </a>
      </li>
      <li className="d-block sm:hidden">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-secondary hover:bg-brand-tertiary focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          Sign up
        </a>
      </li>
    </ul>
  )
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company "
          className="inline-flex items-center"
        >
          <img className="w-48" src={Logo} alt="Logo" />

        </a>
          <NavItems />

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-secondary hover:bg-brand-tertiary focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
        </ul>

        {/* Mobile Nav Bar */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img className="w-48" src={Logo} alt="Logo" />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <NavItems isMenuOpen={isMenuOpen}/>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
