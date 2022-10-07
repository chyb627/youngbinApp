import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './SignIn';

const Stack = createNativeStackNavigator();

function RootStack() {
  const isLoggedIn = true;

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
