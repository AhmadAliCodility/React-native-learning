import React from 'react';

import { Text, StyleSheet, View } from 'react-native';
import externalStyles from './style';
function App(): JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'red' }}>Inline Style in react-native</Text>
      <Text style={styles.textBox}>Internal in react-native</Text>
      <Text style={externalStyles.textBox}>External in react-native</Text>
      <Text style={[styles.textBox, externalStyles.textBox]}>2 styles applied</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    backgroundColor: 'yellow',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 2,
  },
});

export default App;
