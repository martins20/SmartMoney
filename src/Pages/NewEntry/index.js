import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

import BalaceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalaceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
