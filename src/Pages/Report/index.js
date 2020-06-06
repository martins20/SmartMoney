import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {Picker} from '@react-native-community/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
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

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGroup={entriesGroup} />
      <EntryList lastEntries={lastEntries} />

      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default Report;
