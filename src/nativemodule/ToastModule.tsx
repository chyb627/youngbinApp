/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect } from 'react';
import { NativeModules, Platform, Text, View } from 'react-native';

const ToastModule = () => {
  const { ToastModule, AlertModule } = NativeModules;

  // only android
  useEffect(() => {
    Platform.OS === 'android' && ToastModule.show('Native Module - Toast Module 입니다', ToastModule.LONG);
    Platform.OS === 'ios' && AlertModule.alert('Native Module - Toast Module 입니다');
  }, [AlertModule, ToastModule]);

  return (
    <View>
      <Text>ToastModule</Text>
    </View>
  );
};

export default ToastModule;
