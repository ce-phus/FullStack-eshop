import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { userDetails, logout, checkTokenValidation } from '../actions/userActions'
//import { UPDATE_USER_ACCOUNT_RESET } from '../constants'
import Message from '../components/Message'
import Spinner from '../components/Spinner' 
import { useRouter } from 'next/router' 


function AccountPage() {


    let history = useRouter()
    const dispatch = useDispatch()

    // check token validation reducer
    const checkTokenValidationReducer = useSelector(state => state.checkTokenValidationReducer)
    const { error: tokenError } = checkTokenValidationReducer

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // user details reducer
    const userDetailsReducer = useSelector(state => state.userDetailsReducer)
    const { user: userAccDetails, loading } = userDetailsReducer

    useEffect(() => {
        if (!userInfo) {
            history.push("/LoginPage")
        } else {
            try {
                dispatch(checkTokenValidation())
                dispatch(userDetails(userInfo.id))
            } catch (error) {
                history.push("/")
            }
        }
    }, [history, userInfo, dispatch])

    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
    }

    if (userInfo && tokenError === "Request failed with status code 401") {
        alert("Session expired, please login again.")
        dispatch(logout())
        history.push("/LoginPage")
        window.location.reload()
      }

    const renderData = () => {
        try {

            return (
                   
                    
                        <div className='text-light pl-10 pt-10 pr-10 grid h-screen place-items-center'>
                    {loading && <span style = {{ display: "flex" }}><h5>Getting User Information</h5><span className = "ml-2"><Spinner/></span></span>}
                    <div className='container mx-auto items-center grid justify-items-center border border-2 rounded-md bg-gray-700' style={{width: '30%'}}>
                        <div className='grid grid-rows-1 grid-cols-2 gap-4 pt-4'>
                            <div className='text-light p-3 text-semibold'>Name:</div>
                            <div className='p-3 text-light'>{userAccDetails.username}</div>
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 gap-4'>
                            <div className='text-light p-3 text-semibold'>Email:</div>
                            <div className='p-3 text-light'>{userAccDetails.email}</div>
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 gap-4 mb-3'>
                            <div className='text-light p-3 text-semibold'>Admin Priviledges:</div>
                            <div className='p-3 text-light'>{userAccDetails.admin ? "Yes" : "No"}</div>
                        </div>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href={`/AccountUpdatePage`} className='text-accent pb-5'>Update Account details</Link>
                        <span className="ml-1 text-primary pb-5">| </span>
                        <span className="ml-1"></span>

                        <Link href={`/DeleteUserAccountPage`} className='text-primary pb-5'>Delete Account</Link>
                    </span>
                    </div>
                </div>
                    
                
            )
        } catch (error) {
            return <Message variant='danger text-light'>Something went wrong, go back to <Link href='/LoginPage'
                onClick={logoutHandler}
            > Login</Link> page.</Message>
        }
    }


    return renderData()

}

export default AccountPage
