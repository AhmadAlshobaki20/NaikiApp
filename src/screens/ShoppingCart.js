import React from "react";
import {FlatList, Text, View, Image, StyleSheet, SafeAreaView, Touchable, TouchableOpacity} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import StuffAmount from "../components/StuffAmount";
const ShoppingCart = () => {
  return (
    <>
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={()=>{
        return(
            <View style={styles.wrapStuffsPrice}>
            <StuffAmount title={"Price"} price={"980 JD"}/>
            <StuffAmount title={"Delivery"} price={"10 JD"}/>
            <StuffAmount title={"Total"} price={"990 JD"}/>
            </View>
        )
      }}
    />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>Check Out</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  wrapStuffsPrice:{
    borderTopWidth:2,
    borderColor:"gainsboro",
    marginHorizontal:20,
    marginTop:10,
  },
  button:{
    width:"90%",
    backgroundColor:"black",
    padding:15,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:50
  },
  textBtn:{
    color:"white"
  }
})
export default ShoppingCart;
