import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const productData = {
  colors: [
    { name: "Xanh nhạt", hex: "#b2f4ff", imageUrl: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-200-750x500.png" },
    { name: "Đỏ", hex: "#ff2d2d", imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/s/vsmart-star-3_3_.png" },
    { name: "Đen", hex: "#000000", imageUrl: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-black-200-750x500.png" },
  ],
  imageUrl: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-200-750x500.png", 
};

export default function ColorScreen() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(productData.colors[0].imageUrl);

  const renderColorItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.colorItem, { backgroundColor: item.hex }]}
      onPress={() => {
        setSelectedImage(item.imageUrl);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Image source={{ uri: selectedImage }} style={styles.productImage} />
        <View style={styles.productTextContainer}>
          <Text style={styles.productName}>{productData.name}</Text>
          <Text style={styles.productDescription}>{productData.description}</Text>
        </View>
      </View>

      <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>
      <FlatList
        data={productData.colors}
        renderItem={renderColorItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.colorList}
      />

      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={() => navigation.navigate('Product', { selectedImage })} 
      >
        <Text style={styles.confirmButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 20,
    justifyContent: 'space-between',
  },
  productInfoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
  },
  selectColorText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorItem: {
    width: 100,
    height: 100,
    marginVertical: 5,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});