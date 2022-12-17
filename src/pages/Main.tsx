import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainPost from '../components/Main/MainPost';
// import LoadingView from '../components/UI/LoadingView';
// import Calendar from '../components/UI/Calendar';

export default () => {
  const dispatch = useAppDispatch();
  const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    const fc = async () => {
      await dispatch(loadPosts());
      await dispatch(loadMyInfo());
    };
    fc();
  }, [dispatch]);

  return (
    <SafeAreaView>
      {/* <Calendar /> */}
      {/* <LoadingView /> */}
      <MainPost data={mainPosts} />
    </SafeAreaView>
  );
};
