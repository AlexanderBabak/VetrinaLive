import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { RootStackParamList } from '../interfaces/navigationInterfaces';
import { MainScreen } from '../screens/MainScreen';
import { useAppDispatch, useAppSelector } from '../redux/reduxType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSelector, signIn } from '../redux/slices/authSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  const { token } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser) {
        dispatch(signIn(JSON.parse(storedUser)));
      }
    };

    fetchToken();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
