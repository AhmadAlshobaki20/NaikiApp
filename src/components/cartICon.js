import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const productsOfCart = useSelector((state) => state.cart);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ flexDirection: "row" }}
      onPress={() => {
        navigation.navigate("Cart");
      }}
    >
      <FontAwesome5 name="shopping-cart" size={18} color="gray" />
      <Text style={{ fontWeight: "500", marginLeft: 5 }}>
        {productsOfCart.length}
      </Text>
    </TouchableOpacity>
  );
};

export default CartIcon;
