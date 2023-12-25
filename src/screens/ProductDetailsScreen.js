import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
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
import { AddToCart } from "../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const ProductsScreenDetails = ({ navigation }) => {
  const product = useSelector((state) => state?.selectedProduct);

  // this function return the dimenssions of the phone screen
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(AddToCart(productId));
  };

  const handelShare = () => {
    console.log("hello from share button");
  };

  const handleClose = () => {
    console.log("Hello from close button");
  };

  return (
    <View>
      <View style={styles.iconsWrap}>
        <TouchableOpacity onPress={handelShare}>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClose}>
          <AntDesign
            name="closecircleo"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("products");
            }}
          />
        </TouchableOpacity>
      </View>
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
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          // It for smooth scrolling make sure the image is close
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          handleAddToCart(product.id);
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
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
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  iconsWrap: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    top: 40,
    right: 20,
    gap: 15,
  },
});

export default ProductsScreenDetails;
