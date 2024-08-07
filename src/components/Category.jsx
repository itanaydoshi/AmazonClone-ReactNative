import {Text, StyleSheet, Image, ScrollView, View} from 'react-native';
import React from 'react';
import {Categories} from '../data/Category';

const Category = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {Categories.map(item => (
        <View key={item.id} style={styles.category}>
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

export default Category;
