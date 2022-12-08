import React from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleProp, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

// children이 있는 부분은 Recat.FC쓰는것이 좋다.
const DismissKeyboardView: React.FC<{ style?: StyleProp<ViewStyle> }> = ({ children, ...props }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;

// accessible은 시각장애인에게 안내하는 기능.
// react-native-keyboard-aware-scrollview 라이브러리 사용.
// react-native-keyboard-aware-scrollview 같은 오래된 라이브러리는 타입스크립트가 없음.
// 일단 @types/react-native-keyboard-aware-scrollview 를 설치해본다. 설치가 됐으면 타입지원이 된것.
// react-native-keyboard-aware-scrollview은 안타깝게도 @type/ 이 없다.
// types 폴더에 react-native-keyboard-aware-scrollview.d.ts 파일을 만들고 설정.
