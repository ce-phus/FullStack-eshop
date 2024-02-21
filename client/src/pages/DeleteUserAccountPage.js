import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userAccountDelete, checkTokenValidation } from '../actions/userActions'
import Message from '../components/Message'
import Spinner from '../components/Spinner'
import { useRouter } from 'next/router'
import { DELETE_USER_ACCOUNT_RESET } from '../constants'


function DeleteUserAccount() {

    let history = useRouter()
    const dispatch = useDispatch()
    const [myPassword, setMyPassword] = useState("")

    
    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // delete user account reducer
    const deleteUserAccountReducer = useSelector(state => state.deleteUserAccountReducer)
    const { success, loading, error } = deleteUserAccountReducer

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            "id": userInfo.id,
            "password": myPassword
        }
        dispatch(checkTokenValidation())        
        dispatch(userAccountDelete(userData))        
    }
    
    if(success) {
        alert("Account successfully deleted.")
        dispatch({
            type: DELETE_USER_ACCOUNT_RESET
        })
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }

    return (
        <div className='text-light grid h-screen place-items-center'>
            
                    <h3 className='text-3xl font-medium text-primary'>Confirm your password to delete your account.</h3>
                    {loading && <span style = {{ display: "flex" }}><h5>Please wait</h5><span className = "ml-2"><Spinner/></span></span>}                    
                    {error && <div role="alert">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Danger
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>Incorrect Password</p>
                    </div>
                    </div>}        
                    <div className="mt-4">
                        <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
                            <div className='mb-5'>
                                <label for='password' className='block mb-2 text-sm font-medium text-light'>Password</label>
                                <input required type='password' placeholder='enter your password' value={myPassword} onChange={(e) => setMyPassword(e.target.value)} className='bg-gray-700  block border border-gray-600 w-full placeholder-gray-400 text-light focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm p-2.5'></input>
                            </div>
                            <button type='submit' className='text-dark focus:ring-blue-800 hover:bg-red-700 bg-red-600 text-center px-5 py-2.5 sm:auto rounded-lg'>
                            Confirm Delete
                            </button>
                        </form>
                    </div>
            
        </div>
    )
}

export default DeleteUserAccount
