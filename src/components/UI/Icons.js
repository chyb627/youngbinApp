import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export class Icons extends React.Component {
  render() {
    return <Icon name={this.props.name} size={this.props.size} color={this.props.color} />;
  }
}
