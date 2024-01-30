import { configureStore } from '@reduxjs/toolkit';
import allReducers from '../reducers/index';

const store = configureStore({
  reducer: allReducers, // Pass the combined reducers directly
});

export default store;
