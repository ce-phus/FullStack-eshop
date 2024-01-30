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
    <div className='bg-dark text-light  flex items-center justify-center'>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6} className='bg-[#000220] border border-light/45 border-[1] px-5 py-8 rounded'>
          <h1 className='text-2xl mb-5 font-semibold'>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          <Form onSubmit={submitHandler} className='max-w-sm mx-auto'>
            <Form.Group controlId='username'>
              <Form.Label className='mb-2 text-sm font-medium text-light mr-3'>
                Username
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='input-field bg-light/55 border rounded mb-3'
              />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label className='mb-2 text-sm font-medium mr-4 text-light'>
                Password
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input-field bg-light/55 mb-5 border rounded'
              />
            </Form.Group>

            <Button type='submit' variant='primary' className='submit-button border border-1 border-light/20 p-1 rounded-lg bg-blue-700 hover:bg-blue-500'>
              Sign In
            </Button>
          </Form>

          <Row className='py-3'>
            <Col>
              Do not have an account?{' '}
              <Link href={`/RegisterPage`} className='text-blue-500 dark:text-blue-400'>
                 Register
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
