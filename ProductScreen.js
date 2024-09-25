import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const productData = {
  name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
  rating: 5,
  reviews: 828,
  oldPrice: "1.790.000 đ",
  newPrice: "1.790.000 đ",
  defaultImageUrl: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-200-750x500.png", 
};

export default function ProductScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [imageUrl, setImageUrl] = useState(productData.defaultImageUrl);


  useEffect(() => {
    if (route.params?.selectedImage) {
      setImageUrl(route.params.selectedImage);
    }
  }, [route.params?.selectedImage]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.productName}>{productData.name}</Text>

      <View style={styles.ratingRow}>
        <Text style={styles.star}>★★★★★</Text>
        <Text style={styles.reviewText}>(Xem {productData.reviews} đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.newPrice}>{productData.newPrice}</Text>
        <Text style={styles.oldPrice}>{productData.oldPrice}</Text>
      </View>

      <TouchableOpacity 
        style={styles.colorSelectButton}
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={styles.colorSelectText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  star: {
    fontSize: 20,
    color: '#f5a623',
  },
  reviewText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  oldPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  colorSelectButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 15,
  },
  colorSelectText: {
    fontSize: 16,
    color: '#333',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});