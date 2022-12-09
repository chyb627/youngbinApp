import React from 'react';
import { Animated, Image, View, Text } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

function SplashScreen() {
  // const edges = useSafeAreaInsets();

  return (
    <View className="absolute top-0 bottom-0 left-0 right-0 bg-wr-green-100">
      <Animated.View className="flex-1 items-center justify-center">
        <Image className="h-50 w-50 mb-4" source={require('~assets/images/turtle.png')} />
        <Text className="font-bold text-3xl mb-4 text-yellow-900">고품격 클라이밍 관리앱</Text>
        <Text className="font-bold text-6xl my-2">영차영차</Text>
      </Animated.View>
    </View>
  );
}

export default SplashScreen;
