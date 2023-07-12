import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  hasMarginBottom?: boolean;
  theme?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, hasMarginBottom, theme }) => {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && { opacity: 0.5 },
        ]}
        android_ripple={{
          color: isPrimary ? '#fff' : '#5092CD',
        }}>
        <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>{title}</Text>
      </Pressable>
    </View>
  );
};

CustomButton.defaultProps = {
  theme: 'primary',
};

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  margin: {
    marginBottom: 8,
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  primaryWrapper: {
    backgroundColor: '#5092CD',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#5092CD',
  },
});

export default CustomButton;
