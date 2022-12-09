import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainPost from '../components/Main/MainPost';

export default () => {
  const dispatch = useAppDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);

  useEffect(() => {
    const fc = async () => {
      await dispatch(loadPosts());
      await dispatch(loadMyInfo());
    };
    fc();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <MainPost data={mainPosts} />
    </SafeAreaView>
  );
};
