import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function TasaDolar() {
  const [tasa, setTasa] = useState(null);
  const [cop, setCop] = useState('');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(data => setTasa(data.rates.COP))
      .catch(err => console.log(err));
  }, []);

  const convertir = () => {
    if (!tasa || !cop) return;

    const valor = parseFloat(cop) / tasa;
    setResultado(valor.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertir COP a USD</Text>

      <TextInput
        placeholder="Cantidad en COP"
        keyboardType="numeric"
        value={cop}
        onChangeText={setCop}
        style={styles.input}
      />

      <TouchableOpacity style={styles.boton} onPress={convertir}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Convertir
        </Text>
      </TouchableOpacity>

      {resultado && (
        <Text style={styles.resultado}>
          USD: {resultado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10
  },
  resultado: {
    marginTop: 15,
    fontSize: 18
  }
});