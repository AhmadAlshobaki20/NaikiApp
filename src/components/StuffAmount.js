import { StyleSheet, Text, View } from "react-native";
const StuffAmount = ({ title, price }) => {
  return (
    <>
      {title.toLowerCase() === "total" ? (
        <View style={styles.row}>
          <Text style={styles.total}>{title}</Text>
          <Text style={styles.total}>${price}</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>${price}</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    color: "green",
  },
  total: {
    color: "black",
    fontWeight: 600,
  },
});

export default StuffAmount;
