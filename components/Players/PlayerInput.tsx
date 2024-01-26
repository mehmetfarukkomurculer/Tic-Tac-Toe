import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Button from "../UI/Button";
import Colors from "../../utils/colors";

interface PlayerInputProps {
  symbol: string;
  name: string;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ symbol, name }) => {
  const [editedPlayerName, setEditedPlayerName] = useState<string>(name);
    const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(editedName: string){
    setEditedPlayerName(editedName);
  }

  let playerName = (
    <View style={styles.name}>
      <Text style={styles.nameText}>{editedPlayerName}</Text>
    </View>
  );

  if (isEditing) {
    playerName = (
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.dark500}
        defaultValue={editedPlayerName}
        onChangeText={handleChange}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {playerName}
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
      <Button onPress={handleEdit}>
        <Text style={styles.editText}>{isEditing ? "Save" : "Edit"}</Text>
      </Button>
    </View>
  );
};

export default PlayerInput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  name: {
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    width: "80%",
  },
  nameText: {
    fontSize: 16,
    color: Colors.primary500
  },
  input: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.primary300,
    borderWidth: 2,
    borderColor: Colors.primary500,
    width: "80%",
  },
  symbol: {
    fontSize: 24,
    marginHorizontal: 8,
    color: Colors.primary500,
  },
  editText: {
    fontSize: 16,
    color: Colors.primary500,
  },
});
