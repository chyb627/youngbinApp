import React, { ReactElement } from 'react';
import { FlexAlignType, ImageBackground, StyleSheet, View } from 'react-native';
import BannerLottie from './BannerLottie';
import BannerTitle from './BannerTitle';
import { AnimationObject } from 'lottie-react-native';
import BannerGroup from './BannerGroup';
import AnimationButton from '../../ui/AnimationButton';

type CompoundComposition = {
  Lottie: React.FC<{
    height?: number | undefined;
    BannerSource?:
      | string
      | AnimationObject
      | {
          uri: string;
        }
      | undefined;
  }>;
  Title: React.FC<{
    title: string;
    color?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  }>;
  Group: React.FC<{
    children: ReactElement[] | ReactElement;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    justifyContent?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    alignItems?: FlexAlignType | undefined;
  }>;
};

const Banner: React.FC<{
  backgroundColor: string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  children: React.ReactNode | string;
  bgImage?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
}> &
  CompoundComposition = ({ backgroundColor, children, justifyContent, bgImage, flexDirection = 'row' }) => {
  return (
    <AnimationButton onPress={() => {}}>
      {bgImage ? (
        <ImageBackground
          source={bgImage}
          style={[
            styles.container,
            { backgroundColor, flexDirection, justifyContent: justifyContent ?? 'flex-start' },
          ]}>
          {children}
        </ImageBackground>
      ) : (
        <View
          style={[
            styles.container,
            { backgroundColor, flexDirection, justifyContent: justifyContent ?? 'flex-start' },
          ]}>
          {children}
        </View>
      )}
    </AnimationButton>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginBottom: 12,
    padding: 12,
    borderRadius: 24 / 8,
    // alignItems: 'center',
  },
});

Banner.Lottie = BannerLottie;
Banner.Title = BannerTitle;
Banner.Group = BannerGroup;
