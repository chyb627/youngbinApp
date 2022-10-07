import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './SignIn';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const isLoggedIn = true;

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
