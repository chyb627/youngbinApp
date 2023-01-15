import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const Reanimated = () => {
  const value = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    value.value = event.contentOffset.y;
  });

  const floatingButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(value.value, [50, 100], [50, -100], {
            extrapolateRight: Extrapolation.CLAMP,
          }),
        },
      ],
    };
  });

  return (
    <>
      <Animated.FlatList
        style={styles.box}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        onScroll={onScroll}
        scrollEventThrottle={1}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />

      <Pressable style={styles.float}>
        <Animated.View style={[styles.floatIcon, floatingButtonStyle]}>
          <Text style={styles.floatText}>+</Text>
        </Animated.View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: '100%',
  },
  card: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  float: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  floatIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatText: { color: 'white', fontSize: 24 },
});
