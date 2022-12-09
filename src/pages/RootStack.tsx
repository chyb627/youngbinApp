import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './Main';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootStack;
