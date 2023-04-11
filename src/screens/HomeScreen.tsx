import React from 'react';
import { Header } from '../components/ui/Header/Header';
import ToastModule from '../nativemodule/ToastModule';

const HomeScreen = () => {
  return (
    <>
      <Header>
        <Header.Title title="Main" />
      </Header>

      <ToastModule />
    </>
  );
};

export default HomeScreen;
