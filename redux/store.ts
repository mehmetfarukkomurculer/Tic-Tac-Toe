import { configureStore} from "@reduxjs/toolkit";
import winnerSlice from "./player-slice";

const store = configureStore({
  reducer: {
    winner: winnerSlice.reducer,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;