import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
