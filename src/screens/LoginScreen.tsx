import React, { useState } from 'react';
import { Center, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import { Alert } from 'react-native';
import { AuthHeader } from '../components/AuthHeader';
import { InputStyled } from '../components/UI/InputStyled';
import { ButtonStyled } from '../components/UI/ButtonStyled';
import { ButtonStyledOutlined } from '../components/UI/ButtonStyledOutlined';
import { AuthNavigation } from '../components/AuthNavigation';
import { ButtonSupport } from '../components/UI/ButtonSupport';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../interfaces/navigationInterfaces';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../util/auth';
import { useAppDispatch } from '../redux/reduxType';
import { signIn } from '../redux/slices/authSlice';

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  const loginHandler = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    setIsAuth(true);
    try {
      const response = await loginUser(email, password);
      dispatch(signIn(response));
    } catch (error: any) {
      Alert.alert('Authentication error!', error.message);
    }
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <Center flex={1}>
        <Text>Login user...</Text>
      </Center>
    );
  }

  return (
    <ScrollView>
      <VStack flex={1}>
        <AuthHeader
          title="Welcome"
          subtitle="Enter your email and password to access your account"
        />
        <VStack paddingX={'15px'} paddingY={'24px'} space={6}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              // console.log(values);
              loginHandler(values);
              actions.resetForm();
            }}
          >
            {props => (
              <VStack space={4}>
                <InputStyled
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  placeholder="Enter your email"
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  errorMessage={props.errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <InputStyled
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  placeholder="Enter your password"
                  isInvalid={
                    !!props.errors.password && !!props.touched.password
                  }
                  errorMessage={props.errors.password}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                />
                <ButtonStyled onPress={props.handleSubmit}>Login</ButtonStyled>
              </VStack>
            )}
          </Formik>

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
              onPress={() => {
                navigation.navigate('ForgotPasswordScreen');
              }}
            />

            <AuthNavigation
              text="Do not have an account?"
              linkText="Register now"
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}
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
