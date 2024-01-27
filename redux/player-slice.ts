import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface winnerState {
    winner: string;
    Xuser: string;
    Ouser: string;
  }
  
  const initialState: winnerState = {
    winner: "",
    Xuser: "Player 1",
    Ouser: "Player 2",
  };

  const winnerSlice = createSlice({
    name: "winner",
    initialState,
    reducers: {
      setWinner(state, action: PayloadAction<string>) {
        state.winner = action.payload;
      },
      setXuser(state, action: PayloadAction<string>) {
        state.Xuser = action.payload;
      },
      setOuser(state, action: PayloadAction<string>) {
        state.Ouser = action.payload;
      },
    },
  });
  export const { setWinner, setXuser, setOuser } = winnerSlice.actions;
  export default winnerSlice;