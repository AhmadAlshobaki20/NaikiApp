var id = 0;
import React from "react";
import { checkout } from "../actions/productsActions";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import StuffAmount from "../components/StuffAmount";
import { useDispatch, useSelector } from "react-redux";
const ShoppingCart = () => {
  // get products from the cart
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCehckOut = () => {
    dispatch(checkout());
  };
  return (
    <>
      <FlatList
        data={product.cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={(item) => id++}
        ListFooterComponent={() => {
          return (
            <View style={styles.wrapStuffsPrice}>
              <StuffAmount title={"Price"} price={product.totalPrice} />
              <StuffAmount title={"Delivery"} price={"10"} />
              <StuffAmount title={"Total"} price={product.totalPrice + 10} />
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCehckOut();
        }}
      >
        <Text style={styles.textBtn}>Check Out</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  wrapStuffsPrice: {
    borderTopWidth: 2,
    borderColor: "gainsboro",
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 4,
  },
  textBtn: {
    color: "white",
  },
});
export default ShoppingCart;
