import { FormControl, Input } from 'native-base';
import React from 'react';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean | undefined;
  secureTextEntry?: boolean;
};

export const InputStyled: React.FC<Props> = ({
  placeholder,
  isInvalid,
  errorMessage,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        size="xl"
        backgroundColor="tranparent"
        fontFamily={'heading'}
        fontSize={14}
        lineHeight={16}
        color="neutral.black.default"
        _focus={{ borderColor: 'primary.blue.main' }}
      />
      <FormControl.ErrorMessage marginTop="0" position="absolute" top="43px">
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
