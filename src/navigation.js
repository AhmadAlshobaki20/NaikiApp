import ProductScreen from "./screens/productScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingCart from "./screens/ShoppingCart";
import CartIcon from "./components/cartICon";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen
          name={"products"}
          component={ProductScreen}
          options={{
            headerRight: () => <CartIcon />,
          }}
        />
        <Stack.Screen
          name={"ProductDetails"}
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name={"Cart"} component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
