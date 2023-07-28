import React from 'react';

import { Text, View, Button } from 'react-native';
import CompanyData from './components/CompanyData';
function App(): JSX.Element {
  const fruit = (value) => {
    console.warn(value);
  }


  return (
    <View>
      <Text style={{ fontSize: 30 }}>Components</Text>
      <UserData />
      <CompanyData />
      {/* <Button title="with ()" color={'red'} onPress={fruit()} /> */}
      <Button title="without call () " color={'green'} onPress={fruit} />
      <Button
        title="with arrow () to pass parms"
        onPress={() => fruit('apple')}
      />
    </View>
  );
}
const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Name: Ahmad Ali</Text>
      <Text style={{ fontSize: 30 }}>Age: 25</Text>
      <Text style={{ fontSize: 30 }}>Email: ahmad@admin.com</Text>
    </View>
  );
};

export default App;
