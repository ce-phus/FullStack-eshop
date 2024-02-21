import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { userDetails, userUpdateDetails, checkTokenValidation, logout } from '../actions/userActions'
import Message from '../components/Message'
import { Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router' 
import { UPDATE_USER_DETAILS_RESET } from '../constants'


function AccountUpdatePage() {

    let history = useRouter()
    const dispatch = useDispatch()
  

    // check token validation reducer
    const checkTokenValidationReducer = useSelector(state => state.checkTokenValidationReducer)
    const { error: tokenError } = checkTokenValidationReducer

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // user details reducer
    const userDetailsReducer = useSelector(state => state.userDetailsReducer)
    const { user: userAccDetails, loading } = userDetailsReducer

    // user update details reducer
    const userDetailsUpdateReducer = useSelector(state => state.userDetailsUpdateReducer)
    const { success } = userDetailsUpdateReducer

    useEffect(() => {
        if (!userInfo) {
            history.push("/LoginPage")
        }
        dispatch(checkTokenValidation())
        dispatch(userDetails(userInfo.id))
    }, [dispatch, history, userInfo])

    if (userInfo && tokenError === "Request failed with status code 401") {
        alert("Session expired, please login again.")
        dispatch(logout())
        history.push("/LoginPage")
        window.location.reload()
      }

    const onSubmit = (e) => {
        e.preventDefault()
        const updatedUsername = username === "" ? userAccDetails.username : username
        const updatedEmail = email === "" ? userAccDetails.email : email

        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            const userData = {
                'username': updatedUsername,
                'email': updatedEmail,
                'password': password,
            }
            dispatch(userUpdateDetails(userData))
        }
    }

    // logout
    const logoutHandler = () => {
        history.push("/LoginPage")
        dispatch(logout()) // action        
    }

    if(success) {
        alert("Account successfully updated.")
        dispatch({
            type: UPDATE_USER_DETAILS_RESET
        })
        history.push("/AccountPage")
        dispatch(userDetails(userInfo.id))
    }

    const renderData = () => {
        try {
            return (

                <>
                   <Head>
                    <title>account-update</title>
                        <meta name="description" content="AccountUpdate" />
                    </Head> 

    <div className='grid justify-items-center h-screen place-items-center'>
                    <Row className='justify-content-md-center'>
                        <Col xs={12} md={6}>
                            <span
                                className="d-flex justify-content-center italic font-semibold"
                                style={{ display: "flex", marginBottom: "15px", color: "#008080" }}>
                                Update User Details
                            </span>
                            {loading && <Spinner animation="border" />}
                            <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
                                <div className='mb-5'>
                                    <label for='username' className='block mb-2 text-sm font-medium text-light'>
                                        Username
                                    </label>
                                    <input type='text' autoFocus={true} defaultValue={userAccDetails.username} placeholder='username' onChange={(e) => setUsername(e.target.value)} className='bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
                                </div>
                                <div className='mb-5'>
                                    <label for='email-address' className='block mb-2 text-sm font-medium text-light'>
                                        Email Address
                                    </label>
                                    <input type='text' autoFocus={true} defaultValue={userAccDetails.email} placeholder='enter email' onChange={(e) => setEmail(e.target.value)} className='bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
                                </div>
                                <div className='mb-5'>
                                    <label for='username' className='block mb-2 text-sm font-medium text-light'>
                                        Reset Password
                                    </label>
                                    <input type='text' autoFocus={true}  placeholder='password' onChange={(e) => setPassword(e.target.value)} className='bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
                                </div>
                                <div className='mb-5'>
                                    <label for='username' className='block mb-2 text-sm font-medium text-light'>
                                        Confirm Password
                                    </label>
                                    <input type='text' autoFocus={true} placeholder='confirm new password' onChange={(e) => setConfirmPassword(e.target.value)} className='bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
                                </div>
                                <button type='submit' variant='success' className='text-light bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-center px-5 py-2.5 sm:w-auto w-1/2 text-sm fornt-medium rounded-lg'>Save Changes</button>
                                <Link href={`/AccountPage`}>
                                    <button className="font-medium bg-purple-600 rounded-lg px-5 py-2.5 ml-5 hover:bg-purple-700 focus:ring-purple-900 text-sm text-light" type="button">
                                        Cancel
                                    </button>
                                </Link>
                            </form>
                        </Col>
                    </Row>
                </div>
                </>
                
            )
        } catch (error) {
            return <Message variant='danger'>Something went wrong, go back to <Link
                onClick={logoutHandler} href='/LoginPage'
            > Login</Link> page.</Message>
        }
    }

    return renderData()
}

export default AccountUpdatePage
