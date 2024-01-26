import { View, StyleSheet, Image, Text } from "react-native";

function Header() {
  return (
    <View style={styles.imgcontainer}>
      <Image
        source={require("../../assets/tic-tac-toe.png")}
        style={styles.img}
      />
      <Text style={styles.text}>Tic-Tac-Toe</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  imgcontainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    marginVertical: 16,
    fontSize: 32,
    fontFamily: 'Poor-Story',
  }
});
