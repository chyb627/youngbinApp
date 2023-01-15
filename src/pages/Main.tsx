import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Reanimated } from '../components/UI/Reanimated';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';
// import { Button } from '../components/UI/Button';
// import { TabIcon } from '../components/UI/TabIcon';
// import LoadingView from '../components/UI/LoadingView';
// import Calendar from '../components/UI/Calendar';

export default () => {
  const dispatch = useAppDispatch();
  // const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    const fc = async () => {
      await dispatch(loadPosts());
      await dispatch(loadMyInfo());
    };
    fc();
  }, [dispatch]);

  // const value = useSharedValue(0);
  // const onPressBtn = useCallback(() => {
  //   // value.value = withTiming(Math.random() * 100);
  //   value.value = withSpring(Math.random() * 100);
  // }, [value]);
  // const animStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateX: value.value }],
  //   };
  // });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Calendar /> */}
        {/* <LoadingView /> */}
        {/* <MainPost data={mainPosts} /> */}
        {/* <TabIcon iconName="home" />
        <TabIcon iconName="home" visibleBadge /> */}
        {/* <Button title="박스 움직이기" onPress={onPressBtn}></Button>
        <Animated.View style={[styles.box, animStyles]} /> */}
        <Reanimated />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
});
