import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import Button from "../UI/Button";
import Colors from "../../utils/colors";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setOuser, setWinner, setXuser } from "../../redux/player-slice";

interface GameBoardProps {
  onSelectSquare: () => void;
  activePlayer: string;
  setActivePlayer: Dispatch<SetStateAction<string>>;
}

const initialGameBoard = [
  ["", "", ""], // rowIndex
  ["", "", ""], // rowIndex
  ["", "", ""], // rowIndex
  //colIndex
];

const GameBoard: React.FC<GameBoardProps> = ({
  onSelectSquare,
  activePlayer,
  setActivePlayer,
}) => {
  const [gameBoard, setGameBoard] = useState<string[][]>(initialGameBoard);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const winner = useAppSelector((state) => state.winner.winner);
  const xUserName = useAppSelector((state) => state.winner.Xuser);
  const oUserName = useAppSelector((state) => state.winner.Ouser);
  useEffect(() => {
    // Move the logic inside useEffect
    if (winner === '') {
      checkGameStatus(activePlayer === "X" ? "O" : "X");
    }
  }, [winner, activePlayer]);
  const checkWinner = (board: string[][], player: string): boolean => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true;
      }
    }
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }
    return false;
  };

  const isBoardFull = (board: string[][]): boolean => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const checkGameStatus = (player: string) => {
    if (checkWinner(gameBoard, player)) {
      dispatch(setWinner(player));
      setModalVisible((isVisible) => !isVisible);
    } else if (isBoardFull(gameBoard)) {
      dispatch(setWinner("draw"));
      setModalVisible((isVisible) => !isVisible);
    } else {
    }
  };
  function handleSelectSquare(rowIndex: number, colIndex: number) {
    if (gameBoard[rowIndex][colIndex] === "") {
      setGameBoard((prevGameBoard) => {
        const updatedBoard = [
          ...prevGameBoard.map((innerArray) => [...innerArray]),
        ];
        updatedBoard[rowIndex][colIndex] = activePlayer;
        return updatedBoard;
      });

      onSelectSquare();
    }
  }
  /*if(winner === ''){
    checkGameStatus(activePlayer === "X" ? "O" : "X");
  }*/

  function resetGame(){
    setGameBoard(initialGameBoard);
    dispatch(setWinner(""));
    setActivePlayer('X');
    setModalVisible((isVisible) => !isVisible);
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {winner === "X"
                ? `${xUserName} has won`
                : winner === "O"
                ? `${oUserName} has won`
                : "Draw"}
            </Text>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={resetGame}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {gameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((col, colIndex) => (
            <View key={colIndex} style={styles.colContainer}>
              <Button
                style={styles.button}
                key={col}
                onPress={() => handleSelectSquare(rowIndex, colIndex)}
              >
                <Text style={styles.symbolStyle}>{col}</Text>
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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 16,
  },
  rowContainer: {
    flexDirection: "row",
  },
  colContainer: {
    margin: 6,
    backgroundColor: Colors.dark500,
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  symbolStyle: {
    color: Colors.primary300,
    fontSize: 48,
    fontFamily: "Alfa-Slab-One",
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary100,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: Colors.dark500,
    
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
    width: 150,
  },
  textStyle: {
    color: Colors.primary100,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: Colors.dark500
  },
});
