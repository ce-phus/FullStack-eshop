import { combineReducers } from "redux";

import {
    productsListReducer,
    productDetailReducer,
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

const allReducers = combineReducers({
    productsListReducer,
    productDetailReducer,
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
    mpesaStkPushReducer
})

export default allReducers
