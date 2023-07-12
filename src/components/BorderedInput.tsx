import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface BorderedInputProps {
  hasMarginBottom?: boolean;
  onChangeText?: any;
  value?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  [key: string]: any;
}

const BorderedInput: React.FC<BorderedInputProps> = ({
  hasMarginBottom,
  onChangeText,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: '#fff',
  },
  margin: {
    marginBottom: 16,
  },
});

export default BorderedInput;
