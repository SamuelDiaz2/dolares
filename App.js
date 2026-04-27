import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TasaDolar from './TasaDolar';

const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="TasaDolar" component={TasaDolar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Dólares</Text>

      <View style={styles.menuGrid}>

        {/* Botón 1 (NO TOCAR) */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.icon}>💰</Text>
          <Text style={styles.cardText}>Tasa de Cambio</Text>
        </TouchableOpacity>

        {/* Botón 2 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.icon}>📊</Text>
          <Text style={styles.cardText}>Historial</Text>
        </TouchableOpacity>

        {/* Botón 3 (AQUÍ ponemos la API) */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('TasaDolar')}
        >
          <Text style={styles.icon}>💳</Text>
          <Text style={styles.cardText}>Ver dólar</Text>
        </TouchableOpacity>

        {/* Botón 4 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.icon}>⚙️</Text>
          <Text style={styles.cardText}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: (width / 2) - 30,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
  },
});