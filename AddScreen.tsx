import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AddMenuItemScreen() {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishCategory, setDishCategory] = useState('');
  const [dishPrice, setDishPrice] = useState('');

  function addDish() {
    if (
      dishName.trim() === '' ||
      dishDescription.trim() === '' ||
      dishCategory.trim() === '' ||
      dishPrice.trim() === ''
    ) {
      Alert.alert(
        'Missing Information',
        'Please complete all the fields before adding the dish.'
      );
      return;
    }

    if (isNaN(Number(dishPrice)) || Number(dishPrice) <= 0) {
      Alert.alert(
        'Invalid Price',
        'Please enter a valid price for the dish.'
      );
      return;
    }

    Alert.alert(
      'Success',
      dishName + ' has been added successfully.'
    );

    setDishName('');
    setDishDescription('');
    setDishCategory('');
    setDishPrice('');
  }

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.restaurantName}>
        Christoffel's Restaurant
      </Text>

      <Text style={styles.heading}>Add a New Dish</Text>

      <Text style={styles.introduction}>
        Use this page to add a new dish to the restaurant menu.
        Enter the details below so the chef can keep the menu
        organised.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Dish Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the name of the dish"
          value={dishName}
          onChangeText={setDishName}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Describe the dish"
          value={dishDescription}
          onChangeText={setDishDescription}
          multiline
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="For example, Starter or Dessert"
          value={dishCategory}
          onChangeText={setDishCategory}
        />

        <Text style={styles.label}>Price (R)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the price"
          value={dishPrice}
          onChangeText={setDishPrice}
          keyboardType="decimal-pad"
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addDish}
        >
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            setDishName('');
            setDishDescription('');
            setDishCategory('');
            setDishPrice('');
          }}
        >
          <Text style={styles.clearButtonText}>
            Clear Fields
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Christoffel's Restaurant
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    padding: 20,
    paddingTop: 45,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#315C45',
    textAlign: 'center',
    marginBottom: 25,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#24352B',
    marginBottom: 10,
  },

  introduction: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
    marginBottom: 22,
  },

  form: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#24352B',
    marginTop: 12,
    marginBottom: 7,
  },

  input: {
    backgroundColor: '#FAFAF8',
    borderWidth: 1,
    borderColor: '#D6D6D0',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },

  description: {
    minHeight: 85,
    textAlignVertical: 'top',
  },

  addButton: {
    backgroundColor: '#315C45',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  clearButton: {
    borderWidth: 1,
    borderColor: '#315C45',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  clearButtonText: {
    color: '#315C45',
    fontSize: 15,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#777777',
    marginBottom: 20,
  },
});