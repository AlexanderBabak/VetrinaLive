import { Center, Pressable, Text, View } from 'native-base';
import React from 'react';
import HeadphonesIcon from '../../assets/icons/HeadphonesIcon';

export const ButtonSupport = () => {
  return (
    <View maxWidth={'128px'}>
      <Pressable onPress={() => {}}>
        {({ isPressed }) => (
          <Center
            flexDirection={'row'}
            paddingY={'15px'}
            paddingX={'24px'}
            borderWidth={1}
            borderColor="primary.green"
            backgroundColor={isPressed ? 'primary.green' : 'transparent'}
            borderRadius={'30px'}
          >
            <HeadphonesIcon />
            <Text
              marginLeft="12px"
              textAlign="center"
              color="neutral.black.default"
              fontFamily="body"
              fontWeight={600}
              fontSize={14}
              lineHeight={20}
            >
              Support
            </Text>
          </Center>
        )}
      </Pressable>
    </View>
  );
};
