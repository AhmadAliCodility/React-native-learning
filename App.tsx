import React from 'react';

import { Text, View, FlatList } from 'react-native';
function App(): JSX.Element {
  const DATA = [
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
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>List with Flat Component</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text style={{ fontSize: 30 }}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

export default App;
