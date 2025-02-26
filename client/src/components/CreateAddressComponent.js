import React, { useState } from 'react'
import { Form, Button, Card, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUserAddress, getAllAddress } from '../actions/userActions'
import { CREATE_USER_ADDRESS_RESET } from '../constants'
import Message from './Message'


const CreateAddressComponent = ({ toggleCreateAddress }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [landmark, setLandmark] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    // Create User Address Reducer
    const createUserAddressReducer = useSelector(state => state.createUserAddressReducer)
    const { success: addressCreationSuccess, error: errorCreatingAddress } = createUserAddressReducer

    const addressSubmitHandler = (e) => {
        e.preventDefault()
        const addressData = {
            "name": name,
            "phone_number": phoneNumber,
            "pin_code": pinCode,
            "house_no": houseNumber,
            "landmark": landmark,
            "city": city,
            "state": state,
        }
        dispatch(createUserAddress(addressData))
    }

    if (addressCreationSuccess) {
        alert("Address successfully created.")
        toggleCreateAddress()
        dispatch({
            type: CREATE_USER_ADDRESS_RESET
        })
        dispatch(getAllAddress())
    }

    return (
        <div className='grid justify-items-center'>
            <p className="text-center text-semibold"><em>New Address</em></p>
            {errorCreatingAddress
                ? <Message variant='danger'>
                    {errorCreatingAddress}
                </Message>
                :
                ""}
                <form className='text-light w-full max-w-lg'
                onSubmit={addressSubmitHandler}>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 pl-10 pt-10 mb-6 md:mb-0'>
                        <label className='block uppercase tracking-wide text-light-700 text-xs font-bold mb-2' for='grid-first-name'>
                            Name
                        </label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 pl-10 mb-3 leading-tight focus:outline-none focude:bg-white' id='grid-first-name' type='text' placeholder='Jane' value={name}
                        onChange={(e)=> setName(e.target.value)}></input>
                        <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
                    </div>
                    <div className='w-full md:w-1/2 px-3 pt-10 pl-10'>
                        <label className='block uppercase tracking-wide text-light-700 text-xs font-bold mb-2 ' for='grid-phonenumber'>
                            Phone Number
                        </label>
                        <input className='appearance-none block w-full px-4 py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-phone-number' type='text' placeholder='phone number' onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3 pl-10'>
                        <label className='block uppercase tracking-wide text-light-700 text-xs font-bold mb-2' for='grid-pin-code'>
                            Pin Code
                        </label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type='text' placeholder='pin code' value={pinCode} pattern='[0-9]+' maxLength='6' onChange={(e) => setPinCode(e.target.value)}></input>
                    </div>
                    <div class="w-full  px-3 mb-6 md:mb-0 pl-10">
                <label class="block uppercase tracking-wide text-light-700 text-xs font-bold mb-2" for="grid-zip">
                    landmark
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="landmark" value={landmark}
                                onChange={(e) => setLandmark(e.target.value)}/>
                </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pl-10">
                <label class="block uppercase tracking-wide text-light-700 text-xs font-bold mb-2" for="grid-zip">
                    House No./Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={houseNumber}
                                onChange={(e) => setHouseNumber(e.target.value)}/>
                </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-4 pl-10">
                <label class="block uppercase tracking-wide text-light-700 text-xs font-bold mb-2" for="grid-city">
                STATE
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Nairobi" value={state}
                                onChange={(e) => setState(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-4 pl-10">
                <label class="block uppercase tracking-wide text-light-700 text-xs font-bold mb-2" for="grid-state">
                    City
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" type='text' value={city} onChange={(e) => setCity(e.target.value)}>
                    <option>Nairobi</option>
                    <option>Bungoma</option>
                    <option>Nyeri</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                
                    </div>
                    <button style={{width: "30%"}}
                    className='bg-sky-500/50 hover:bg-blue-700 text-light font-bold py-2 px-4 rounded-full ' type='submit'>Save Address</button>
                    <button className='bg-sky-500/50 hover:bg-blue-700 text-light font-bold rounded-full py-2 px-4 ml-20' style={{width: '20%'}}>Cancel</button>
                </form>
            
        </div>
    )
}

export default CreateAddressComponent
