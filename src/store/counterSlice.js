import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		counter: 0,
		name: "Counter Redux",
	},
	//Acciones
	reducers: {
		sum: (state) => {
			state.counter += 1;
		},
	},
});

export const { sum } = counterSlice.actions;
