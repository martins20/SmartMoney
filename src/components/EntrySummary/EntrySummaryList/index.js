import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = () => {
  const data = [
    {key: 'Alimentação: $200'},
    {key: 'Combustivel: $12'},
    {key: 'Aluguel: $120'},
    {key: 'Lazer: $250'},
    {key: 'Outros: $1200'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} />
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

export default EntrySummaryList;
