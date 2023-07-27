import React from 'react';

import { Text, View, Button } from 'react-native';
function App(): JSX.Element {
  let name = 'Ahmad';
  let email = 'ahmad@gmail.com';
  let age = 25;
  function fruit(): React.ReactNode {
    return 'apple';
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>React Native</Text>
      <Button title="Press Here" />
      <Text style={{ fontSize: 30 }}>Another Text</Text>
      <Button title="Press New Button" />
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{email}</Text>
      <Text style={{ fontSize: 30 }}>{age}</Text>
      <Text style={{ fontSize: 30 }}>{fruit()}</Text>
      <Text style={{ fontSize: 30 }}>{5 + 5}</Text>
    </View>
  );
}

export default App;
