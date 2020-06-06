import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Realm';

// navigation.navigate('NewEntry');

const Main = ({navigation}) => {
  const [currentBalance, setCurretBalace] = useState(2064.35);
  const [lastEntries, setLastEntries] = useState([]);
  const [entriesGroup, setEntriesGroup] = useState([]);

  useEffect(() => {
    setLastEntries([
      {key: '1', description: 'Padaria Asa Branca', amount: 210},
      {key: '2', description: 'Supermercado', amount: 190},
      {key: '3', description: 'Posto Ipiranga', amount: 190},
    ]);

    setEntriesGroup([
      {key: '1', description: 'Alimentação', amount: 200},
      {key: '2', description: 'Combustivel', amount: 12},
      {key: '3', description: 'Aluguel', amount: 120},
      {key: '4', description: 'Lazer', amount: 250},
      {key: '5', description: 'Outros', amount: 1200},
    ]);
  }, []);

  const save = () => {
    saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button title="Adicionar" onPress={save} />
      <EntrySummary entriesGroup={entriesGroup} />
      <EntryList lastEntries={lastEntries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default Main;
