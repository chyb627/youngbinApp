import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const HorizontalAnimation: React.FC<{
  children: React.ReactNode | string;
  value?: number;
  startValue?: number;
  endValue?: number;
}> = ({ children, value = 0, startValue = 0, endValue = 50 }) => {
  const translateXAnimation = useRef(new Animated.Value(value)).current;

  const styleTranslateXAnim = {
    transform: [
      {
        translateX: translateXAnimation,
      },
    ],
  };

  const autoPlayTiming = useCallback(() => {
    translateXAnimation.setValue(startValue);
    Animated.loop(
      Animated.timing(translateXAnimation, {
        toValue: endValue,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [endValue, startValue, translateXAnimation]);

  useEffect(() => {
    autoPlayTiming();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayTiming]);

  return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
};

export default HorizontalAnimation;
