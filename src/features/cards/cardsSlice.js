import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
	cards: {},
};

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		addCard: (state, action) => {
			const { id, front, back } = action.payload;
			state.cards[id] = {
				id,
				front,
				back,
			};
		},
	},
});

export const selectCard = (id) => (state) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
