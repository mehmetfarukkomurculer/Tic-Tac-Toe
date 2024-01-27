import { View, StyleSheet } from "react-native";
import PlayerInput from "./PlayerInput";
import Colors from "../../utils/colors";
import GameBoard from "../Game/GameBoard";
import { useState } from "react";

function Players() {
  const [activePlayer, setActivePlayer] = useState<string>("X");
  
  function handleSelectSquare() {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
  }

  return (
    <>
      <View style={styles.container}>
        <PlayerInput symbol="X" />
        <PlayerInput symbol="O" />
      </View>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />
    </>
  );
}

export default Players;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderRadius: 8,
    justifyContent: "flex-start",
    padding: 8,
    backgroundColor: Colors.dark500,
  },
});
