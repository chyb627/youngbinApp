import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadMyInfo } from '../actions/user';
import { loadPosts } from '../actions/post';
import LoginForm from '../components/UserPage/LoginForm';

export default () => {
  const dispatch = useAppDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    const fc = async () => {
      await dispatch(loadPosts());
      await dispatch(loadMyInfo());
    };
    fc();
  }, [dispatch]);

  if (!me) {
    return <LoginForm />;
  }
  return (
    <View>
      <Text>hihihihihihi</Text>
    </View>
  );
};
