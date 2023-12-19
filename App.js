import { StyleSheet, View } from "react-native";
import ProductsScreen from "./src/screens/producdScreen";
import ProductsScreenDetails from "./src/screens/ProductDetailsScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreenDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
