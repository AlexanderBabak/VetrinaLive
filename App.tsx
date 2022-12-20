import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { theme } from './src/assets/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <RegisterScreen />
    </NativeBaseProvider>
  );
};

export default App;
