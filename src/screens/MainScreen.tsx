import { Center, Text } from 'native-base';
import React from 'react';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { useAppDispatch } from '../redux/reduxType';
import { signOut } from '../redux/slices/authSlice';

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <Center>
      <Text>Hello user!</Text>
      <ButtonStyled onPress={() => dispatch(signOut())}>Logout</ButtonStyled>
    </Center>
  );
};
