import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../types/navigationType';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export const useRootNavigation = <RouteName extends keyof RootStackParamList>() =>
  useNavigation<NativeStackNavigationProp<RootStackParamList, RouteName>>();

export const useRootRoute = <RouteName extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, RouteName>>();
