import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const VerticalAnimation: React.FC<{
  children: React.ReactNode | string;
  value?: number;
  startValue?: number;
  endValue?: number;
}> = ({ children, value = 0, startValue = 0, endValue = 50 }) => {
  const translateYAnimation = useRef(new Animated.Value(value)).current;

  const styleTranslateXAnim = {
    transform: [
      {
        translateY: translateYAnimation,
      },
    ],
  };

  const autoPlayTiming = useCallback(() => {
    translateYAnimation.setValue(startValue);
    Animated.loop(
      Animated.timing(translateYAnimation, {
        toValue: endValue,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [endValue, startValue, translateYAnimation]);

  useEffect(() => {
    autoPlayTiming();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayTiming]);

  return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
};

export default VerticalAnimation;
