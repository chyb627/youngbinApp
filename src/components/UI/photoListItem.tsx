import React, { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import { useRootNavigation } from '../navigation/RootNavigation';
import { Button } from './Button';
import { RemoteImage } from './RemoteImage';

export const PhotoListItem: React.FC<{ url: string }> = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useRootNavigation();

  const onPressItem = useCallback(() => {
    navigation.navigate('ImageDetail', { url: props.url });
  }, []);

  return (
    <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
      <RemoteImage url={props.url} width={width - 40} height={width * 1.2} />
    </Button>
  );
};
