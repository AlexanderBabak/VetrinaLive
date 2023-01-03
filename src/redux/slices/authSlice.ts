import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { forgotPasswordThunk, loginThunk, registerThunk } from './authThunk';

interface IAuth {
  userName: string | null;
  token: string | null;
  loadingAuth: boolean;
  errorAuth: string | undefined;
}

const initialState: IAuth = {
  userName: null,
  token: null,
  loadingAuth: false,
  errorAuth: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut(state) {
      state.userName = null;
      state.token = null;
      AsyncStorage.removeItem('user');
    },
  },
  extraReducers: builder => {
    // login
    builder.addCase(loginThunk.pending, state => {
      state.loadingAuth = true;
      state.errorAuth = '';
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.userName = action.payload!.displayName;
      state.token = action.payload!.idToken;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.error.message;
    });
    // register
    builder.addCase(registerThunk.pending, state => {
      state.loadingAuth = true;
      state.errorAuth = '';
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.userName = action.payload!.displayName;
      state.token = action.payload!.idToken;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.error.message;
    });
    //forgot
    builder.addCase(forgotPasswordThunk.pending, state => {
      state.loadingAuth = true;
      state.errorAuth = '';
    });
    builder.addCase(forgotPasswordThunk.fulfilled, state => {
      state.loadingAuth = false;
    });
    builder.addCase(forgotPasswordThunk.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.error.message;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
