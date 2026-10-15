import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.restaurantName}>
        CHRISTOFFEL'S RESTAURANT
      </Text>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}></Text>
      </View>

      <Text style={styles.title}>
        Restaurant Menu Manager
      </Text>

      <Text style={styles.subtitle}>
        Manage your restaurant menu easily
      </Text>

      <View style={styles.card}>
        <Text style={styles.welcome}>
          Welcome, Chef!
        </Text>

        <Text style={styles.description}>
          Add new dishes, view your menu items,
          and keep your restaurant menu organised
          in one place.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => alert('Menu Items Screen')}
        >
          <Text style={styles.buttonText}>
            View Menu Items
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => alert('Add Menu Item Screen')}
        >
          <Text style={styles.secondaryButtonText}>
            + Add New Dish
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Fresh food. Great service. Every day.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  restaurantName: {
    color: '#315C45',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 25,
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#315C45',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  icon: {
    fontSize: 52,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#24352B',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    elevation: 4,
  },

  welcome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#315C45',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#555555',
    marginBottom: 25,
  },

  primaryButton: {
    backgroundColor: '#315C45',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#315C45',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#315C45',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    color: '#777777',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
  },
});