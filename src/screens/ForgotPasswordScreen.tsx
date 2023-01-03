import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Center, ScrollView, VStack, Text } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../interfaces/navigationInterfaces';
import { Formik } from 'formik';
import * as yup from 'yup';
import { forgotPassword } from '../util/auth';

const forgotPasswordSchema = yup.object({
  email: yup.string().required().email(),
});

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [isAuth, setIsAuth] = useState(false);

  const forgotPassportHandler = async (values: { email: string }) => {
    const { email } = values;
    setIsAuth(true);
    try {
      await forgotPassword(email);
      Alert.alert('Success', 'Check your email to reset password');
      navigation.navigate('LoginScreen');
    } catch (error: any) {
      Alert.alert('Reset password failed!', 'This user does not exist');
    }
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <Center flex={1}>
        <Text>Wait server response...</Text>
      </Center>
    );
  }
  return (
    <ScrollView>
      <VStack flex={1}>
        <AuthHeader
          title="Forgot Password"
          subtitle="Enter your email and you will receive an email to recover your password"
        />
        <VStack paddingX={'15px'} paddingY={'24px'} space={6}>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values, actions) => {
              forgotPassportHandler(values);
              actions.resetForm();
            }}
          >
            {props => (
              <VStack space={4}>
                <InputStyled
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  errorMessage={props.errors.email}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <ButtonStyled onPress={props.handleSubmit}>
                  Reset password
                </ButtonStyled>
              </VStack>
            )}
          </Formik>

          <AuthNavigation
            text="Do you have an account?"
            linkText="Sign in now"
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          />

          <Center>
            <ButtonSupport />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
