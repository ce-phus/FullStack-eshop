import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/compat/router';
import Image from 'next/image';
import logo from '../../public/images/gallery/logo6.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import  Dropdown  from './Dropdown';
import { addToCart } from '../actions/cartActions';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <span className={`${className} relative group`}>
        {title}
        <span
          className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
            router.asPath ===href ? 'w-full' : 'w-0'
          }`}
        >
          &nbsp;
        </span>
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.stopPropagation(); // Add this line to stop event propagation
    toggle();
  
    router.push(href);
  };

  return (
    <Link href={href}>
      <span
        className={`${className} relative group text-dark my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
            router.asPath === href ? 'w-full' : 'w-0'
          }dark:bg-light'}`}
        >
          &nbsp;
        </span>
      </span>
    </Link>
  );
};

const Navbar = () => {

  let history = useRouter()
  const dispatch = useDispatch()

  // login reducer
  const userLoginReducer = useSelector(state => state.userLoginReducer)
  const { userInfo } = userLoginReducer

  // add to cart reducer
  const cartItems = useSelector(state => state.cartReducer.cartItems); // Assuming cartItems are stored under cart in the Redux state

  const handleAddToCart = (id, name, price) => {
    // Dispatch the addToCart action with the product details
    const product = { id, name, price };
    dispatch(addToCart(product));
  };
  


  // logout
  const logoutHandler = ()=>{
    dispatch (logout()) //action
    router.push("/LoginPage")
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    
    setIsOpen(!isOpen);
  };
  

  return (
    <header className='w-full px-32 py-8 flex items-center justify-between text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>
      <Image
        src={logo}
        alt='logo'
        className='w-[50px] h-[50px] rounded-full bg-dark'
      />
      <button
        className='flex-col  items-center justify-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {/* SVG icon for Add to Cart */}
      <svg
  xmlns='http://www.w3.org/2000/svg'
  className='h-6 w-6 cursor-pointer'
  fill='none'
  viewBox='0 0 24 24'
  stroke='currentColor'
  onClick={() => handleAddToCart(product.id, product.name, product.price)} // Pass dynamic product details
>
  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
</svg>

      {/* Display the number of items in the cart */}
      <div className='ml-2 text-light'>{cartItems.length}</div>


      <div className='w-full flex justify-end items-center lg:hidden text-light'>
        <nav className='flex items-center justify-center flex-wrap font-bold text-light'>
          <CustomLink href='/' title='Home' className='mr-4 text-light' />
          <CustomLink href='/ProductListPage' title='Shop' className='mr-4 text-light' />

          <CustomLink href='/contact'  title='FAQS' className='mr-4' />

          {userInfo ? 
          <div className='mr-3'><Dropdown title={userInfo.username}/></div> : <CustomLink href='/LoginPage' title='Login' className='mr-4 text-light'/>}
          


          
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 0.9, opacity: 2 }}
          className='min-w-[60%] flex flex-col items-center justify-between z-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light/75 rounded-lg backdrop-blur-m py-32'
        >
          <nav className='flex items-center flex-col  justify-center'>
            <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
            <CustomMobileLink href='/ProductListPage' title='Shop' className='' toggle={handleClick} />
            <CustomMobileLink href='/contact' title='FAQs' className='' toggle={handleClick} />
            {userInfo ? 
          <div className='mr-3'><Dropdown title={userInfo.username}/></div> : <CustomLink href='/LoginPage' title='Login' className='mr-4 text-light'/>}
            
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
