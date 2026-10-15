import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

const menuItems = [
  {
    id: '1',
    name: 'Chicken Burger',
    category: 'Main Course',
    price: 85,
  },
  {
    id: '2',
    name: 'Beef Burger',
    category: 'Main Course',
    price: 95,
  },
  {
    id: '3',
    name: 'Greek Salad',
    category: 'Starter',
    price: 60,
  },
  {
    id: '4',
    name: 'Chocolate Cake',
    category: 'Dessert',
    price: 45,
  },
  {
    id: '5',
    name: 'Grilled Chicken',
    category: 'Main Course',
    price: 120,
  },
  {
    id: '6',
    name: 'Tomato Soup',
    category: 'Starter',
    price: 50,
  },
];

export default function MenuItemsScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase())
  );

    const renderMenuItem = ({ item }: { item: { id: string; name: string; category: string; price: number } }) => (
    <View style={styles.menuCard}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>

      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>
        CHRISTOFFEL'S RESTAURANT
      </Text>

      <Text style={styles.title}>Our Menu</Text>

      <Text style={styles.subtitle}>
        View and search available dishes
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by dish or category..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No dishes found. Try another search.
          </Text>
        }
      />

      <Text style={styles.footer}>
        Total dishes shown: {filteredItems.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    padding: 20,
    paddingTop: 55,
  },

  restaurantName: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#315C45',
    textAlign: 'center',
    marginBottom: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24352B',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6D6D0',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 18,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  itemInfo: {
    flex: 1,
    marginRight: 10,
  },

  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#24352B',
    marginBottom: 5,
  },

  category: {
    fontSize: 14,
    color: '#777777',
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#315C45',
  },

  emptyText: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 25,
    fontSize: 15,
  },

  footer: {
    textAlign: 'center',
    color: '#315C45',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});