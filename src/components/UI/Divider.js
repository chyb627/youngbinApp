import React from 'react';
import { StyleSheet, View } from 'react-native';

// export class Divider extends React.Component {
//   render() {
//     return (
//       <View
//         style={{
//           alignSelf: 'stretch',
//           borderWidth: 0.5,
//           marginHorizontal: 24,
//           borderColor: 'gray',
//         }}
//       />
//     );
//   }
// }

export const Divider = (props) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderWidth: 0.5,
    marginHorizontal: 24,
    borderColor: 'gray',
  },
});
