import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { register } from '../actions/userActions'
import Message from '../components/Message'

function RegisterPage({ history, variant }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    // reducer
    const userRegisterReducer = useSelector(state => state.userRegisterReducer)
    const { error, userInfo } = userRegisterReducer

    useEffect(() => {
        if (userInfo) {
            history.push('/') // homepage
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            dispatch(register(username, email, password))
        }
    }

    return (
        <div className='bg-dark  flex items-center justify-center text-light'>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6} className='bg-[#000220] border border-light/45 px-5 py-10 rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-4'>Sign Up</h1>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    <form onSubmit={submitHandler} className='max-w-sm mx-auto'>

                        <Form.Group controlId='name'>
                            <Form.Label className='mb-2 text-md font-medium mr-11'>
                                Username
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='input-field bg-light/55 border rounded mb-3'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label className='mb-2 text-md font-medium mr-3'>
                                Email Address
                            </Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='input-field bg-light/55 border rounded mb-3'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label className='mb-2 text-md font-medium mr-12'>
                                Password
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='input-field bg-light/55 border rounded mb-3'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='passwordConfirm'>
                            <Form.Label className='mb-2 text-md font-medium mr-12'>
                                Confirm <br/>Password
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='input-field bg-light/55 border rounded mb-3'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" variant='primary' className='submit-button border border-1 border-light/20 p-1 rounded-lg bg-blue-700 hover:bg-blue-500 mt-5'>Sign Up</Button>
                    </form>

                    <Row className="py-3">
                        <Col>
                            Already have an account?
                    <Link
                                href={`/LoginPage`} className='text-blue-500 hover:text-blue-400'
                            > Login</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default RegisterPage