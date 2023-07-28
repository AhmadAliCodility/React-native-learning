import React, { useState } from 'react';

import { Button, Text, View } from 'react-native';
function App(): JSX.Element {
  const [name, setName] = useState('Ali');
  const changeName = () => {
    setName('Ahmad');
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>State in react-native</Text>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title='Chnage Name' onPress={changeName} />
    </View>
  );
}

export default App;
