import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './features/show/showSlice';

export const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});
