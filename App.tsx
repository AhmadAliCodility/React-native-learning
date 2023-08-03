import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
function App(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const clear = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple Form in React</Text>
      {display ? (
        <View>
          <Text style={{ fontSize: 20 }}>Your Name: {name}</Text>
          <Text style={{ fontSize: 20 }}>Your email: {email}</Text>
          <Text style={{ fontSize: 20 }}>Your password: {password}</Text>
        </View>
      ) : null}
      <TextInput
        style={styles.textInput}
        placeholder="Enter name"
        value={name}
        // onChangeText={setName}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter email"
        value={email}
        // onChangeText={setName}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Enter password"
        value={password}
        // onChangeText={setName}
        onChangeText={text => setPassword(text)}
      />
      <View style={{ marginBottom:10 }}>
        <Button
          title="Submit"
          color={'green'}
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Input" onPress={clear} />
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
