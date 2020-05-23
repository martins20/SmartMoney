import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  const data = [
    {key: 'Padaria Asa Branca: $210'},
    {key: 'Supermercado: $190'},
    {key: 'Posto Ipiranga: $190'},
  ];

  return (
    <View styles={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
