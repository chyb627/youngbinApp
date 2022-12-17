import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '../constants/styles';
import Main from './Main';
import UserPage from './UserPage';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.teal100 },
        headerTintColor: 'black',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.teal100 },
        tabBarActiveTintColor: GlobalStyles.colors.pink500,
        headerRight: ({ color, size }) => <Icon name="add" size={size} color={color} />,
      })}>
      <BottomTabs.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Youngbin App',
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Main2"
        component={UserPage}
        options={{
          title: 'User Page',
          tabBarLabel: 'User Page',
          tabBarIcon: ({ color, size }) => <Icon name="person" size={size} color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomOverview"
        component={BottomOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Main1" component={Main} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootStack;
