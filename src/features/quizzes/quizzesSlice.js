import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
	quizzes: {},
};

// create slice
const quizzesSlice = createSlice({
	name: "quizzes",
	initialState,
	reducers: {
		addQuiz: (state, action) => {
			const { id, name, topicId, cardIds } = action.payload;
			state.quizzes[id] = {
				id: id,
				name: name,
				topicId: topicId,
				cardIds: cardIds,
			};
		},
	},
});

// create and export selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Export action creators and reducer
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
