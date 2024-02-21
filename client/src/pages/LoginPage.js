import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import { useRouter } from 'next/router';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // reducer
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { error, userInfo } = userLoginReducer;

    // Use the useRouter hook to access the router object
    const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push('/'); // homepage
    }
  }, [router, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className='text-light mt-12 grid h-screen place-items-center'>
      <div className='justify-content-md-center'>
      <div className='grid justify-items-center'>
          <h1 className='text-2xl mb-5 font-semibold text-light'>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          <form className='max-w-sm mx-auto' onSubmit={submitHandler}>
            <div className='mb-5'>
              <label for='username' className='block mb-2 text-sm font-medium text-light'>Username</label>
              <input className='bg-gray-700 block border border-gray-600 w-full placeholder-gray-400 text-light focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm p-2.5' type='username' placeholder='enter username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div className='mb-5'>
              <label for='username' className='block mb-2 text-sm font-medium text-light'>Password</label>
              <input className='bg-gray-700 block border border-gray-600 w-full placeholder-gray-400 text-light focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm p-2.5' type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type='submit' className='text-light focus:ring-blue-800 hover:bg-blue-700 bg-blue-600 text-center px-5 py-2.5 sm:auto rounded-lg'>
              Sign In
            </button>
          </form>

          <div className='flex flex-col text-light'>

            <div className='mt-10'>
              Do not have an account?
            </div>
            <div className='flex flex-row-reverse mt-3'>

              <Link href='/RegisterPage'>
              <button className='text-light bg-blue-600  hover:bg-blue-700 text-center rounded-lg p-3 sm:auto'>
              Register
            </button>
              </Link>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
