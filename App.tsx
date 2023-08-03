import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
function App(): JSX.Element {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
      <Text style={{ fontSize: 30 }}>Your Name is: {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter name"
        value={name}
        // onChangeText={setName}
        onChangeText={text => setName(text)}
      />
      <Button title="Clear Input" onPress={() => setName('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    margin: 10,
  },
});

export default App;
