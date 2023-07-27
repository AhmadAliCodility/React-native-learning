import React from 'react';

import { Text, View, Button } from 'react-native';
function App(): JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>React Native</Text>
      <Button title="Press Here" />
      <Text style={{ fontSize: 30 }}>Another Text</Text>
      <Button title="Press New Button" />
    </View>
  );
}

export default App;
