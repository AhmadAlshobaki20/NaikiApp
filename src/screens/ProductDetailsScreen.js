import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import products from "../data/products";

const ProductsScreenDetails = () => {
  const product = products[0];
  // this function return the dimenssion of the phone screen
  const { width } = useWindowDimensions();

  return (
    <View>
      <ScrollView>
        {/* Image Cursoel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          // It for smooth scrolling make sure the image is close
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Titel */}
          <Text style={styles.titel}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          console.log("hello from button");
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titel: {
    fontSize: 34,
    fontWeight: 500,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 15,
    lineHeight: 30,
    fontWeight: 300,
  },
  btn: {
    width: "90%",
    padding: 20,
    backgroundColor: "black",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default ProductsScreenDetails;
