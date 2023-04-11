import React from 'react';
import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../ui/Button';
import Icon from '../ui/Icons';
import Spacer from '../ui/Spacer';

const DrawerMenu: React.FC<{
  drawerAnim: Animated.Value;
  onPressCloseDrawer: () => void;
}> = ({ drawerAnim, onPressCloseDrawer }) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  // Drawer 메뉴를 일정좌표만큼 움직이면 닫기
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      // console.log(gestureState.dx);
      if (gestureState.dx > 100) {
        onPressCloseDrawer();
      }
    },
  });

  const menuList = [
    '나의정보',
    '지쿠 부스터',
    '친구초대',
    '공지사항/이벤트',
    '서비스안내',
    '할인혜택',
    '고객센터',
    '기기 고장신고',
  ];

  return (
    <>
      {/* Drawer외 화면 */}
      <TouchableWithoutFeedback onPress={onPressCloseDrawer}>
        <Animated.View
          style={[
            styles.background,
            {
              backgroundColor: drawerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#00000000', '#00000080'],
              }),
              zIndex: drawerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 5],
              }),
            },
          ]}
        />
      </TouchableWithoutFeedback>

      {/* Drawer 화면 */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            transform: [
              {
                translateX: drawerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width * 0.9, 0],
                }),
              },
            ],
          },
        ]}>
        {/* 헤더 */}
        <View style={styles.headerContainer}>
          <Button onPress={() => {}}>
            <Icon name="notifications" size={24} color="#000" />
          </Button>
          <Spacer horizontal space={16} />

          <Button onPress={onPressCloseDrawer}>
            <Icon name="close" size={24} color="#000" />
          </Button>

          <Spacer horizontal space={12} />
        </View>

        {/* Contents */}
        <View>
          <FlatList
            keyExtractor={(item) => item}
            data={menuList}
            renderItem={({ item }) => {
              return (
                <Button onPress={() => {}}>
                  <Text style={styles.menuItem}>{item}</Text>
                </Button>
              );
            }}
          />
        </View>
      </Animated.View>
    </>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '75%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 48,
    alignItems: 'center',
  },
  menuContainer: {},
  menuItem: {
    padding: 16,
    fontSize: 16,
  },
});
