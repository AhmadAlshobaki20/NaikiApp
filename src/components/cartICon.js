import { FontAwesome5 } from '@expo/vector-icons';
import {Text, TouchableOpacity} from "react-native";
const CartIcons = ({navigation}) =>{
    return (
        <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>{
            navigation.navigate("Cart")
        }}>
            <FontAwesome5 name={"shopping-cart"} size={18} color={"gray"} />
            <Text style={{fontWeight:"500", marginLeft:5}}>1</Text>
        </TouchableOpacity>
    )
}

export default CartIcons;