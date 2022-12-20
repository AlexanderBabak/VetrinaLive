import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from './src/assets/theme';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ForgotPasswordScreen />
    </NativeBaseProvider>
  );
};

export default App;
