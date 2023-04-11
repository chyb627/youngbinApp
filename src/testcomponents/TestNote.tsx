import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SnackBar from '../components/common/SnackBar';
import DrawerMenu from '../components/common/DrawerMenu';
import { Header } from '../components/ui/Header/Header';
import Spacer from '../components/ui/Spacer';
import Banner from '../components/common/Banner/Banner';
import Typography from '../components/ui/Typography';
import Icon from '../components/ui/Icons';
import SeparationLine from '../components/ui/SeparationLine';
import AnimationButton from '../components/ui/AnimationButton';
import HorizontalAnimation from '../components/animation/HorizontalAnimation';
import FadeOutAnimation from '../components/animation/FadeOutAnimation';
import VerticalAnimation from '../components/animation/VerticalAnimation';
import { useHome } from '../hooks/useHome';
import LottieBike from '../assets/animations/bike.json';

const TestNote = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { drawerAnim, onPressOpenDrawer, onPressCloseDrawer } = useHome();

  return (
    <>
      {/* 스낵바 */}
      <SnackBar />

      {/* Drawer */}
      <DrawerMenu drawerAnim={drawerAnim} onPressCloseDrawer={onPressCloseDrawer} />

      {/* Header */}
      <Header>
        <Header.Title title="GCOO" color="#178C76" />

        <Header.Group>
          <Header.Icon iconName="notifications" onPress={() => {}} />
          <Spacer horizontal space={16} />
          <Header.Icon iconName="menu" onPress={onPressOpenDrawer} />
        </Header.Group>
      </Header>

      {/* Contents */}
      <ScrollView style={styles.container}>
        <Spacer space={12} />

        <Banner backgroundColor="#4299e150" justifyContent="space-between">
          <Typography fontSize={12}>지쿠 요금 및 이용시간</Typography>
          <Icon name="chevron-forward" size={16} color="#000" />
        </Banner>

        <Banner backgroundColor="#ddd" flexDirection="column">
          <Banner.Group justifyContent="space-between">
            <View>
              <Typography fontSize={14} fontWeight="bold">
                Dave님이
              </Typography>
              <Typography fontSize={14} fontWeight="bold">
                지구를 아껴준 시간 🌱
              </Typography>
            </View>

            <Icon name="person-circle" size={32} color="#aaa" />
          </Banner.Group>

          <Spacer space={12} />
          <Banner.Group>
            <Typography fontSize={10} color="#178C76" textDecorationLine="underline">
              WHITE 등급
            </Typography>
            <Spacer horizontal space={4} />
            <Typography>(다음등급까지 30P)</Typography>
          </Banner.Group>

          <Spacer space={12} />
          <Banner.Group alignItems="center">
            <View style={styles.whiteBox} />

            <View style={styles.pointBox}>
              <Typography fontSize={16} color="green">
                0
              </Typography>
              <Typography color="#000"> / 30p</Typography>
            </View>
          </Banner.Group>

          <Spacer space={12} />
          <SeparationLine />

          <Spacer space={12} />
          <Banner.Group>
            <View style={styles.halfBox}>
              <Typography fontSize={12} color="#555">
                크레딧
              </Typography>
              <Typography fontSize={14} color="green" fontWeight="bold">
                0
              </Typography>
            </View>

            <View style={styles.halfBox}>
              <Typography fontSize={12} color="#555">
                쿠폰
              </Typography>
              <Spacer horizontal space={4} />
              <Typography fontSize={12} color="green">
                0 개
              </Typography>
            </View>
          </Banner.Group>
        </Banner>

        <View style={styles.buttonContainer}>
          <AnimationButton onPress={() => {}}>
            <View
              style={[
                styles.buttonContentContainer,
                {
                  height: width * 0.5,
                },
              ]}>
              <Typography fontSize={14}>주차구역 확인하고</Typography>
              <Typography fontSize={14}>지쿠 찾기</Typography>
            </View>
          </AnimationButton>

          <Spacer horizontal space={8} />

          <AnimationButton onPress={() => {}}>
            <View
              style={[
                styles.buttonContentContainer,
                {
                  height: width * 0.5,
                },
              ]}>
              <Typography fontSize={14}>QR 스캔하고</Typography>
              <Typography fontSize={14}>대여하기</Typography>
            </View>
          </AnimationButton>
        </View>

        <View style={styles.buttonContainer}>
          <AnimationButton onPress={() => {}}>
            <View
              style={[
                styles.buttonContentContainer,
                {
                  height: width * 0.2,
                },
              ]}
            />
          </AnimationButton>

          <Spacer horizontal space={8} />

          <AnimationButton onPress={() => {}}>
            <View
              style={[
                styles.buttonContentContainer,
                {
                  height: width * 0.2,
                },
              ]}
            />
          </AnimationButton>
        </View>

        {/* 합성 컴포넌트 패턴 Banner */}
        <Banner backgroundColor="#73C6B6" justifyContent="space-between">
          {/* 애니메이션 컴포넌트 적용 */}
          <HorizontalAnimation startValue={-5} endValue={100}>
            <Banner.Lottie BannerSource={LottieBike} height={60} />
          </HorizontalAnimation>

          <View style={styles.textContentContainer}>
            {/* 애니메이션 컴포넌트 적용 */}
            <FadeOutAnimation>
              <Banner.Title fontWeight="bold" title="오늘도 😎" />
            </FadeOutAnimation>

            <Banner.Title title="즐거운 라이딩!!" />
          </View>
        </Banner>

        <Banner backgroundColor="#aaa" justifyContent="space-between">
          {/* 애니메이션 컴포넌트 적용 */}
          <VerticalAnimation startValue={20} endValue={-5}>
            <Banner.Lottie BannerSource={LottieBike} height={60} />
          </VerticalAnimation>

          <View style={styles.textContentContainer}>
            {/* 애니메이션 컴포넌트 적용 */}
            <FadeOutAnimation>
              <Banner.Title fontWeight="bold" title="오늘도 😎" />
            </FadeOutAnimation>

            <Banner.Title title="즐거운 라이딩!!" />
          </View>
        </Banner>

        <Banner backgroundColor="pink" justifyContent="space-between">
          {/* 애니메이션 컴포넌트 적용 */}
          <VerticalAnimation startValue={20} endValue={-5}>
            <Banner.Lottie BannerSource={LottieBike} height={60} />
          </VerticalAnimation>

          <View style={styles.textContentContainer}>
            {/* 애니메이션 컴포넌트 적용 */}
            <FadeOutAnimation>
              <Banner.Title fontWeight="bold" title="오늘도 😎" />
            </FadeOutAnimation>

            <Banner.Title title="즐거운 라이딩!!" />
          </View>
        </Banner>

        <Spacer space={insets.bottom} />
      </ScrollView>
    </>
  );
};

export default TestNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  halfBox: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  whiteBox: {
    height: 12,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 2,
  },
  pointBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 12,
  },
  buttonContentContainer: {
    flex: 1,
    backgroundColor: '#aaa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
