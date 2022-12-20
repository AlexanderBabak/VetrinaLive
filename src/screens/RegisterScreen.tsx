import React from 'react';
import { Center, Text, VStack } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';

export const RegisterScreen = () => {
  return (
    <VStack flex={1}>
      <AuthHeader
        title="Create your e-commerce"
        subtitle="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta."
      />
      <InputStyled
        placeholder="Name and Surname"
        isInvalid={true}
        errorMessage="Error name"
        autoCapitalize="words"
      />

      <InputStyled
        placeholder="Name and Surname"
        isInvalid={true}
        errorMessage="Error name"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </VStack>
  );
};
