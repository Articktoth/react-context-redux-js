import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
	name: "characters",
	initialState: {
		loading: false,
		characters: [],
	},
	//Acciones
	reducers: {
		loadingCharacters: (state) => {
			state.loading = true;
		},
		getCharacterSlice: (state, action) => {
			state.characters = action.payload;
			state.loading = false;
		},
	},
});

export const { getCharacterSlice, loadingCharacters } = characterSlice.actions;
