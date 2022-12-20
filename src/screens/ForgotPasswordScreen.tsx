import React from 'react';
import { Center, ScrollView, VStack } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';

export const ForgotPasswordScreen = () => {
  return (
    <ScrollView>
      <VStack flex={1}>
        <AuthHeader
          title="Forgot Password"
          subtitle="Enter your email and you will receive an email to recover your password"
        />
        <VStack paddingX={'15px'} paddingY={'24px'} space={6}>
          <VStack space={4}>
            <InputStyled
              placeholder="Enter your email"
              isInvalid={false}
              errorMessage="Error name"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </VStack>

          <ButtonStyled onPress={() => {}}>Login</ButtonStyled>

          <AuthNavigation
            text="Do you have an account?"
            linkText="Sign in now"
            onPress={() => {}}
          />

          <Center>
            <ButtonSupport />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
