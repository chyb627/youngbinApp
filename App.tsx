import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

import RootStack from './src/pages/RootStack';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
