import React, { ReactElement } from 'react';
import { FlexAlignType, StyleSheet, View } from 'react-native';

const BannerGroup: React.FC<{
  children: ReactElement[] | ReactElement;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  alignItems?: FlexAlignType | undefined;
}> = (props) => (
  <View
    style={[
      styles.container,
      {
        flexDirection: props.flexDirection ?? 'row',
        justifyContent: props.justifyContent ?? 'flex-start',
        alignItems: props.alignItems ?? 'flex-start',
      },
    ]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default BannerGroup;
