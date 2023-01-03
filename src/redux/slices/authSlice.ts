import { createSlice } from '@reduxjs/toolkit';

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
    signIn(state, action) {
      state.userName = action.payload.displayName;
      state.token = action.payload.idToken;
    },

    signOut(state) {
      state.userName = null;
      state.token = null;
    },
  },
  extraReducers: builder => {},
});

export const { signOut, signIn } = authSlice.actions;
export default authSlice.reducer;
