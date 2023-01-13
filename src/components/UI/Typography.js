import React from 'react';
import { Text as RNText } from 'react-native';

export class Typography extends React.Component {
  render() {
    return (
      <RNText style={{ color: this.props.color, fontSize: this.props.fontSize }}>
        {this.props.children}
      </RNText>
    );
  }
}
