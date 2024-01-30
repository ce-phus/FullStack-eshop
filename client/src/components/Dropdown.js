import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    let router = useRouter()
    const dispatch = useDispatch()
  
    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer
  
    // logout
    const logoutHandler = ()=>{
      dispatch (logout()) //action
      router.push("/LoginPage")
    }
  
    const handleClick = () => {
      
      setIsOpen(!isOpen);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full py-6 pb-8 mr-3'>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-4 py-2 text-light bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown} 
                    title={isOpen ? userInfo.username : ''}>
                     <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <Link
                                    href= "/AccountPage"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Account Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/AllAddressesOfUserPage"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Address Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/OrdersListPage"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    All Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;