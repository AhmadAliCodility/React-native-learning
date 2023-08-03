import React, { useState } from 'react';

import { Button, Text, View } from 'react-native';

function App(): JSX.Element {
  const [name, setName] = useState('AHmad');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Propss in react-native</Text>
      <User name={name} />
      <Button title="Click here" onPress={() => setName('Ali')} />
    </View>
  );
}
function User(props): JSX.Element {
  console.warn(props)
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Child Component {props.name}</Text>
    </View>
  );
}

export default App;
