import React from 'react';
import { Center, ScrollView, VStack } from 'native-base';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../interfaces/navigationInterfaces';
import { Formik } from 'formik';
import * as yup from 'yup';

const forgotPasswordSchema = yup.object({
  email: yup.string().required().email(),
});

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
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
              console.log(values);
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
                <ButtonStyled onPress={props.handleSubmit}>Login</ButtonStyled>
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
