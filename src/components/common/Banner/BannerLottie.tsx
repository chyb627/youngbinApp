import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView, { AnimationObject } from 'lottie-react-native';
import LottieBike from '../../../assets/animations/bike.json';

const BannerLottie: React.FC<{
  height?: number | undefined;
  BannerSource?:
    | string
    | AnimationObject
    | {
        uri: string;
      }
    | undefined;
}> = ({ height = 340, BannerSource }) => {
  return (
    <View style={styles.lottieContainer}>
      <LottieView style={{ height }} source={BannerSource ?? LottieBike} loop={true} resizeMode="contain" autoPlay />
    </View>
  );
};

export default BannerLottie;

const styles = StyleSheet.create({
  lottieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieImage: {
    height: 340,
  },
});
