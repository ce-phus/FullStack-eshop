import React, { useState } from 'react';
import logo from '../../public/images/gallery/logo6.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import CartDropdown from './CartDropdown';

const HorizontalNavbar = ({ toggleSidebar }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);


  let router = useRouter()
  const dispatch = useDispatch()

  // Get cartItems from Redux store
  const cartReducer = useSelector(state => state.cart);
  const { cartItems } = cartReducer;

  
    // login reducer
  const userLoginReducer = useSelector(state => state.userLoginReducer)
  const { userInfo } = userLoginReducer
  
    // logout
  const logoutHandler = ()=>{
    dispatch (logout()) //action
    router.push("/LoginPage")
  }

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleCartDropdownToggle = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  }

  return (
    <nav className='fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-900 mb-5'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between trl:justify-end'>
          <button
            onClick={toggleSidebar}
            className='inline-flex items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 '
          >
            <span className='sr-only'>Open sidebar</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
              ></path>
            </svg>
          </button>
          <a href='#' className='flex ms-2 md:me-24'>
            <Image src={logo} className='h-[50px] w-[50px] me-3' alt='CephusTech Logo' />
            <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-light'></span>
          </a>

          
          
          <div className='flex items-center'>
          {/* <button
          className='relative'
          onClick={handleCartDropdownToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6 bg-gray-600 rounded-lg mb-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
          {cartItems.length > 0 && (
            <span className='absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full'>
              {cartItems.length}
            </span>
          )}
        </button> */}
                {/* Cart Dropdown */}
                <CartDropdown isOpen={isCartDropdownOpen} toggleDropdown={handleCartDropdownToggle} />

            <div className='flex items-center ms-3'>
              <div>
              
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
                  title={isUserMenuOpen ? userInfo?.username : ''}

                  onClick={handleUserMenuToggle}
                >
                  <span className="sr-only">Open user menu</span>
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isUserMenuOpen && (
        <div className='z-50 my-4 text-base list-none bg-gray-700 divide-y divide-gray-600 rounded shadow' id='dropdown-user'>
          <div className='px-4 py-3' role='none'>
            <p className='text-sm text-light' role='none'>CephusTech</p>
            <p className='text-sm text-gray-300 font-medium truncate' role='none'>cephusluke@gmail.com</p>
          </div>
          <ul className="py-1" role="none">
            <li><Link href="/AccountPage" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-light" role="menuitem">Account Settings</Link></li>
            <li><Link href="/AllAddressesOfUserPage" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-light" role="menuitem">Address Settings</Link></li>
            <li><Link href="/OrdersListPage" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-light" role="menuitem">All Orders</Link></li>
            <li><Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" role="menuitem" onClick={logoutHandler}>Sign out</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HorizontalNavbar;
