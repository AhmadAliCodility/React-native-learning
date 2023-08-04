import React from 'react';

import { ScrollView, Text, View } from 'react-native';
function App(): JSX.Element {
  const users = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>List with Flat Component</Text>
      <ScrollView>
        {users.map(user => <Text>{user.title}</Text>)}
      </ScrollView>
    </View>
  );
}

export default App;
