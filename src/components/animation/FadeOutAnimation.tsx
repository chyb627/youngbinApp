import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const FadeOutAnimation: React.FC<{
  children: React.ReactNode | string;
}> = ({ children }) => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;

  const styleOpacityAnim = {
    opacity: opacityAnimation,
  };

  const autoPlayFadeOut = useCallback(() => {
    Animated.loop(
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [opacityAnimation]);

  useEffect(() => {
    autoPlayFadeOut();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayFadeOut]);

  return <Animated.View style={styleOpacityAnim}>{children}</Animated.View>;
};

export default FadeOutAnimation;
