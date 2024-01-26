import { View, StyleSheet } from "react-native";
import PlayerInput from "./PlayerInput";
import Colors from "../../utils/colors";

function Players() {
  return (
    <View style={styles.container}>
      <PlayerInput symbol="X" name="Player 1" />
      <PlayerInput symbol="O" name="Player 2" />
    </View>
  );
}

export default Players;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'flex-start',
    padding: 8,
    backgroundColor: Colors.dark500,
  },
});
