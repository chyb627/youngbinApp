/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../ui/Icons';

const SnackBar = () => {
  const translateYanim = useRef(new Animated.Value(100)).current;
  const insets = useSafeAreaInsets();

  const snakBarAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(translateYanim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(translateYanim, {
        toValue: 100,
        duration: 500,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateYanim]);

  useEffect(() => {
    snakBarAnimation();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          bottom: insets.bottom,
          transform: [
            {
              translateY: translateYanim,
            },
          ],
        },
      ]}>
      <View style={styles.contentsContainer}>
        <Icon name="alert" size={20} color="white" />
        <Text style={styles.snackBarContents}>SnakBar message</Text>
      </View>
    </Animated.View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 50,
  },
  contentsContainer: {
    backgroundColor: '#222',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    margin: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  snackBarIcon: {
    color: '#fff',
  },
  snackBarContents: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 10,
  },
});
