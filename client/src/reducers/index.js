import { combineReducers } from "redux";

import {
    productsListReducer,
    productDetailsReducer,
    createProductReducer,
    deleteProductReducer,
    changeDeliveryStatusReducer,
} from "./productReducers";

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer,
    checkTokenValidationReducer,
    getSingleAddressReducer,
    getAllAddressesOfUserReducer,
    createUserAddressReducer,
    updateUserAddressReducer,
    deleteUserAddressReducer,
    getAllOrdersReducer,
} from "./userReducers";

import {
    mpesaCallbackHandlerReducer,
    mpesaStkPushReducer
} from "./mpesaReducers"

import {
    cartReducer,
} from "./cartReducers"

const allReducers = combineReducers({
    productsListReducer,
    productDetailsReducer,
    createProductReducer,
    deleteProductReducer,
    changeDeliveryStatusReducer,
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer,
    checkTokenValidationReducer,
    getSingleAddressReducer,
    getAllAddressesOfUserReducer,
    createUserAddressReducer,
    updateUserAddressReducer,
    deleteUserAddressReducer,
    getAllOrdersReducer,
    mpesaCallbackHandlerReducer,
    mpesaStkPushReducer,
    cart: cartReducer
})

export default allReducers
