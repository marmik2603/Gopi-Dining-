import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/'>
          <img src="gopi.png" className="h-8" alt="Gopi Logo" />
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMobileNavOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMobileNavOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link to='/'>
                <span className="py-2 px-3 text-gray-900 md:hover:text-blue-500 md:p-0 text-white">Home</span>
              </Link>
            </li>
            <li>
              <Link to='/table'>
                <span className="py-2 px-3 text-gray-900 md:hover:text-blue-500 md:p-0 text-white">Menu</span>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <span className="py-2 px-3 text-gray-900 md:hover:text-blue-500 md:p-0 text-white">About</span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <span className="py-2 px-3 text-gray-900 md:hover:text-blue-500 md:p-0 text-white">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav