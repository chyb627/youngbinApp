import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Calendar /> */}
        {/* <LoadingView /> */}
        {/* <MainPost data={mainPosts} /> */}
        {/* <TabIcon iconName="home" />
        <TabIcon iconName="home" visibleBadge /> */}
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
});
