
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
