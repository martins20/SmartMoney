import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

const App = () => {

  const addEntry = () => {
    alert('Abrir tela de adicionar lançamento.')
  }

  return (
    <View
      style={{
        padding: 10,
      }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        $2.102,42
      </Text>
      <Button 
        title="Adicionar" 
        onPress={addEntry}
      
      />
      <Text 
         style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}
      >Categorias</Text>

        <FlatList
          data={[
            {key: "Alimentação: $200"},
            {key: "Combustivel: $12"},
            {key: "Aluguel: $120"},
            {key: "Lazer: $250"},
            {key: "Outros: $1200"}
          ]}
         renderItem={({item}) => <Text>{item.key}</Text>}
        >
          
        </FlatList>

        <Text 
         style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}
      >Últimos Lançamentos</Text>

        <FlatList
          data={[
            {key: "Padaria Asa Branca: $210"},
            {key: "Supermercado: $190"},
            {key: "Posto Ipiranga: $190"},
          ]}
         renderItem={({item}) => <Text>{item.key}</Text>}
        >
          
        </FlatList>
    </View>
  );
};

export default App;
