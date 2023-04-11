import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useHome = () => {
  // DrawerMenu 동작 시키는 애니메이션 로직
  // drawerAnim, onPressOpenDrawer, onPressCloseDrawer
  const drawerAnim = useRef(new Animated.Value(0)).current;

  const onPressOpenDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };
  const onPressCloseDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return {
    drawerAnim,
    onPressOpenDrawer,
    onPressCloseDrawer,
  };
};
