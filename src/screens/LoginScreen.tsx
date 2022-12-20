import React from 'react';
import { Center, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { ButtonStyledOutlined } from '../components/UI/ButtonStyledOutlined';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';

export const LoginScreen = () => {
  return (
    <ScrollView>
      <VStack flex={1}>
        <AuthHeader
          title="Welcome"
          subtitle="Enter your email and password to access your account"
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
            <InputStyled
              placeholder="Enter your password"
              isInvalid={false}
              errorMessage="Error name"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </VStack>

          <ButtonStyled onPress={() => {}}>Login</ButtonStyled>

          <HStack alignItems={'center'}>
            <Divider flex={5} bg="neutral.black.500" />
            <Text
              flex={1}
              textTransform={'uppercase'}
              textAlign="center"
              marginX={'24px'}
              fontFamily="body"
              fontSize={14}
              fontWeight={600}
              color="neutral.black.500"
            >
              or
            </Text>
            <Divider flex={5} bg="neutral.black.500" />
          </HStack>

          <VStack space={3}>
            <ButtonStyledOutlined onPress={() => {}} icon="facebook">
              Sign in with Facebook
            </ButtonStyledOutlined>
            <ButtonStyledOutlined onPress={() => {}} icon="google">
              Sign in with Google
            </ButtonStyledOutlined>
          </VStack>

          <VStack space={3}>
            <AuthNavigation
              text=" Did you forget your password?"
              onPress={() => {}}
            />

            <AuthNavigation
              text="Do not have an account?"
              linkText="Register now"
              onPress={() => {}}
            />
          </VStack>

          <Center>
            <ButtonSupport />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
