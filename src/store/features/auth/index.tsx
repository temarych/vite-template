import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
