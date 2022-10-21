import { getCharacterSlice, loadingCharacters } from "./";

export const getCharacter = () => {
	return async (dispatch) => {
		dispatch(loadingCharacters());
		const resp = await fetch("https://rickandmortyapi.com/api/character", {
			method: "GET",
		})
			.then((resp) => resp.json())
			.then((data) => data.results);
		console.log(resp);
		dispatch(getCharacterSlice(resp));
	};
};
