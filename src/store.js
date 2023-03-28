import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
