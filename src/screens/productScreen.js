import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ShowProduct } from "../actions/productsActions";
import { useEffect } from "react";

const ProductsScreen = ({ navigation }) => {
  const Products = useSelector((state) => state?.products);
  const dispatch = useDispatch();

  const handleShow = (id) => {
    dispatch(ShowProduct(id));
  };

  //  we can use useNavigation hook it refer to navigate object
  return (
    <FlatList
      data={Products}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            handleShow(item.id);
            navigation.navigate("ProductDetails");
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    aspectRatio: 1,
  },
  image: {
    //  when we use aspectRatio -> the height will be calculate baesd on the width and the aspectRatio
    // we use 100% and aspectRatio to make responsive app
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
