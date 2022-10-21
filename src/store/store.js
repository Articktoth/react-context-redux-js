import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./charactersSlice";
import { counterSlice } from "./counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		charactersData: characterSlice.reducer,
	},
});
