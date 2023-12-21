import { StyleSheet, View } from "react-native";
import ProductsScreen from "./src/screens/producdScreen";
import ProductsScreenDetails from "./src/screens/ProductDetailsScreen";
import ShoopingCart from "./src/screens/ShoppingCart";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NikeReducer } from "./src/reducer/NikeReducer";
export default function App() {
  const store = createStore(NikeReducer);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ShoopingCart />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
