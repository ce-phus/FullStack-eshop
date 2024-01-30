import {
    MPESA_STK_PUSH_SUCCESS,
    MPESA_STK_PUSH_REQUEST,
    MPESA_STK_PUSH_FAIL,

    MPESA_CALLBACK_HANDLER_REQUEST,
    MPESA_CALLBACK_HANDLER_SUCCESS,
    MPESA_CALLBACK_HANDLER_FAIL,
} from '../constants/index';

import axios from 'axios';

// stk push
export const mpesastkpush = (stkpush) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MPESA_STK_PUSH_REQUEST,
        });

        const {
            userLoginReducer: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post('http://127.0.0.1:8000/api/checkout/', stkpush, config);

        dispatch({
            type: MPESA_STK_PUSH_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MPESA_STK_PUSH_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

// callback handler
export const mpesaCallbackHandler = (callbackData) => async (dispatch) => {
    try {
        dispatch({
            type: MPESA_CALLBACK_HANDLER_REQUEST,
        });

        // Assuming you have a token or other necessary data for the callback
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // Include other headers if required
            },
        };

        // Send the callback data to the Django backend endpoint (POST request)
        const { data } = await axios.post('http://127.0.0.1:8000/api/callback/', callbackData, config);

        // Dispatch success action for the POST request
        dispatch({
            type: MPESA_CALLBACK_HANDLER_SUCCESS,
            payload: data,
        });

        // Now, perform a GET request if needed
        const response = await axios.get('/api/some-data', config);

        // Dispatch success action for the GET request and store the data in the Redux store
        dispatch({
            type: SOME_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: MPESA_CALLBACK_HANDLER_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};