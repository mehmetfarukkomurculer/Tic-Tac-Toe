import { View, Text, StyleSheet } from "react-native";
import Button from "../UI/Button";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <View >
      {initialGameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((col, colIndex) => (
            <View  key={colIndex} style={styles.colContainer}>
              <Button onPress={() => {}}>
                <Text>x</Text>
              </Button>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
    },
    colContainer: {
        margin: 4,
    }
})