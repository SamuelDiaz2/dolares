import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaDolares() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(json => {
        const lista = Object.entries(json.rates);
        setData(lista);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasas del dólar</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.moneda}>{item[0]}</Text>
            <Text style={styles.valor}>{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F2F5'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moneda: {
    fontWeight: 'bold'
  },
  valor: {
    color: '#333'
  }
});