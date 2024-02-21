// CreateMpesaComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mpesaCallbackHandler } from '../actions/mpesaActions';

const CreateMpesaComponent = () => {
  const dispatch = useDispatch();
  const [callbackData, setCallbackData] = useState('');
  
  const mpesaCallback = useSelector((state) => state.mpesaCallbackHandlerReducer);
  const { loading, success, error } = mpesaCallback;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch callback handler action
    dispatch(mpesaCallbackHandler(callbackData));
  };

  return (
    <div>
      <h2>Create Mpesa Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Callback Data" value={callbackData} onChange={(e) => setCallbackData(e.target.value)} />
        <button type="submit">Create</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Callback successful!</p>}
    </div>
  );
};

export default CreateMpesaComponent;
