import { FormControl, Input } from 'native-base';
import React, { ChangeEvent } from 'react';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean | undefined;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
};

export const InputStyled: React.FC<Props> = ({
  placeholder,
  isInvalid,
  errorMessage,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
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
