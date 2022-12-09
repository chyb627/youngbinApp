import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';

export default () => {
  const dispatch = useAppDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);
  console.log('mainPosts', mainPosts);

  useEffect(() => {
    const fc = async () => {
      await dispatch(loadPosts());
      await dispatch(loadMyInfo());
    };
    fc();
  }, []);

  return (
    <View>
      <Text>Main페이지입니다.</Text>
    </View>
  );
};
