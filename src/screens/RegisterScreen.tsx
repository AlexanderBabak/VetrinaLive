import React from 'react';
import { Center, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { ButtonStyledOutlined } from '../components/UI/ButtonStyledOutlined';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';

export const RegisterScreen = () => {
  return (
    <ScrollView>
      <VStack flex={1}>
        <AuthHeader
          title="Create your e-commerce"
          subtitle="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta."
        />
        <VStack paddingX={'15px'} paddingY={'24px'} space={6}>
          <VStack space={4}>
            <InputStyled
              placeholder="Name and Surname"
              isInvalid={false}
              errorMessage="Error name"
              autoCapitalize="words"
            />

            <InputStyled
              placeholder="Email"
              isInvalid={false}
              errorMessage="Error name"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <InputStyled
              placeholder="Password"
              isInvalid={false}
              errorMessage="Error name"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </VStack>

          <ButtonStyled onPress={() => {}}>Create your shop</ButtonStyled>

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
              Sign up with Facebook
            </ButtonStyledOutlined>
            <ButtonStyledOutlined onPress={() => {}} icon="google">
              Sign up with Google
            </ButtonStyledOutlined>
          </VStack>

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
