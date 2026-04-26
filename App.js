import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Dólares</Text>
      
      <View style={styles.menuGrid}>
        {/* Botón 1 */}
        <TouchableOpacity style={styles.card} onPress={() => console.log('Cambio')}>
          <Text style={styles.icon}>💰</Text>
          <Text style={styles.cardText}>Tasa de Cambio</Text>
        </TouchableOpacity>

        {/* Botón 2 */}
        <TouchableOpacity style={styles.card} onPress={() => console.log('Historial')}>
          <Text style={styles.icon}>📊</Text>
          <Text style={styles.cardText}>Historial</Text>
        </TouchableOpacity>

        {/* Botón 3 */}
        <TouchableOpacity style={styles.card} onPress={() => console.log('Billetera')}>
          <Text style={styles.icon}>💳</Text>
          <Text style={styles.cardText}>Mi Billetera</Text>
        </TouchableOpacity>

        {/* Botón 4 */}
        <TouchableOpacity style={styles.card} onPress={() => console.log('Ajustes')}>
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
    color: '#1A1A1A',
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
    // Sombra simple para iOS y Android
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
});