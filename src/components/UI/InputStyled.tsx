import { FormControl, Input } from 'native-base';
import React from 'react';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
};

export const InputStyled: React.FC<Props> = ({
  placeholder,
  isInvalid,
  errorMessage,
  keyboardType,
  autoCapitalize,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        placeholder={placeholder}
        size="xl"
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        backgroundColor="tranparent"
        borderColor="neutral.black.transparent"
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
