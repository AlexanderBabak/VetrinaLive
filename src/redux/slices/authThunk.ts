import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, forgotPassword, loginUser } from '../../util/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (values: { email: string; password: string }) => {
    const { email, password } = values;
    try {
      const response = await loginUser(email, password);
      AsyncStorage.setItem('user', JSON.stringify(response));
      return response;
    } catch (error: any) {
      Alert.alert('Authentication error!', error.message);
    }
  },
);

export const registerThunk = createAsyncThunk(
  'auth/registerThunk',
  async (values: { email: string; password: string; name: string }) => {
    const { email, password, name } = values;

    try {
      const response = await createUser(email, password, name);
      return response;
    } catch (error: any) {
      Alert.alert('Authentication failed!', error.message);
    }
  },
);

export const forgotPasswordThunk = createAsyncThunk(
  'auth/forgotPasswordThunk',
  async (values: { email: string }) => {
    const { email } = values;

    try {
      await forgotPassword(email);
      Alert.alert('Success', 'Check your email to reset password');
    } catch (error: any) {
      Alert.alert('Reset password failed!', 'This user does not exist');
    }
  },
);
