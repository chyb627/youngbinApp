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
