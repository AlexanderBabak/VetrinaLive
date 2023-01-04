import React from 'react';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { useAppDispatch } from '../redux/reduxType';
import { signOut } from '../redux/slices/authSlice';
import { Center, Heading } from 'native-base';

export const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <Center flex={1}>
      <Heading>DashboardScreen</Heading>
      <Center>
        <ButtonStyled onPress={() => dispatch(signOut())}>Logout</ButtonStyled>
      </Center>
    </Center>
  );
};
