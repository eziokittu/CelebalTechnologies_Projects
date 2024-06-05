import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='fixed top-0 z-10 w-full h-10 flex items-center bg-[#1e0823] text-pink-100 border-b border-pink-300'>
      <div className='w-full mx-auto sm:w-[675px] md:w-[810px] lg:w-[1024px] flex justify-between items-center px-1 xsm:px-4'>
        <div 
          className='cursor-pointer'
          onClick={() => { window.open(`https://celebaltech.com/`, '_blank') }}
        >
          <img 
            className='h-8' 
            src="/logo.webp" 
            alt="Celebal Technologies" 
          />
        </div>
        <div className='flex gap-1 xsm:gap-2 sm:gap-10'>
          <Link 
            to='/display' 
            className={`${currentPath === '/display' ? 'text-pink-100' : 'text-pink-200'} relative`}
          >
            Display details
            <span className={`${currentPath === '/display' ? 'scale-x-100' : ' scale-x-0'} bg-pink-100 transform origin-center absolute inset-x-0 bottom-0 h-[2px] transition-transform duration-1000`}></span>
          </Link>
          <Link 
            to='/' 
            className={`${(currentPath === '/' || currentPath === '/form') ? 'text-pink-50' : 'text-pink-200'} relative`}
          >
            Fill Form
            <span className={`${(currentPath === '/' || currentPath === '/form') ? 'scale-x-100' : ' scale-x-0'} bg-pink-100 transform origin-center absolute inset-x-0 bottom-0 h-[2px] transition-transform duration-1000`}></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
