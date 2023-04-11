import React from 'react';
import { Text, View } from 'react-native';
import Icon from './src/components/ui/Icons';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Icon name="person" size={24} color="#000" />
    </View>
  );
};

export default App;
