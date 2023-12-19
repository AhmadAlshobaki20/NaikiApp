import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Products from "../data/products";

const ProductsScreen = () => {
  return (
    <FlatList
      data={Products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
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
