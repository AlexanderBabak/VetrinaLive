import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from './src/assets/theme';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
