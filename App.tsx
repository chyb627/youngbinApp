import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {
  return (
    <SafeAreaView>
      <Text className="underline text-3xl">Hello, RN!</Text>
      <Icon name="home" size={42} />
    </SafeAreaView>
  );
}

export default App;
