import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './features/show/showSlice';

export const store = configureStore({
  reducer: {
    shows: casesReducer,
  },
});
