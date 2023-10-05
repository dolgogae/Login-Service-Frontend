// src/store/authSlice.ts

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  refreshToken: localStorage.getItem('refreshToken') || null,
  accessToken: localStorage.getItem('accessToken') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshToken: (state, action: PayloadAction<string>) => {
      // state.token = action.payload;
      console.log("set refresh token" + action.payload);
      localStorage.setItem('refreshToken', action.payload);
      state.accessToken = action.payload;
    },
    removeRefreshToken: (state) => {
      state.refreshToken = null;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      // state.token = action.payload;
      console.log("set access token" + action.payload);
      localStorage.setItem('accessToken', action.payload);
      state.accessToken = action.payload;
    },
    removeAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setRefreshToken, removeRefreshToken, setAccessToken, removeAccessToken } = authSlice.actions;

export default authSlice.reducer;
