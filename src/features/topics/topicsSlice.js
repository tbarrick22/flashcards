// add imports here
import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

// set initial state
const initialState = {
	topics: {},
};

// create slice
const topicsSlice = createSlice({
	name: "topics",
	initialState,
	reducers: {
		addTopic: (state, action) => {
			const { id, name, icon } = action.payload;
			state.topics[id] = {
				id: id,
				name: name,
				icon: icon,
				quizIds: [],
			};
		},
	},
	extraReducers: {
		[addQuiz]: (state, action) => {
			const { id, topicId } = action.payload;
			state.topics[topicId].quizIds.push(id);
		},
	},
});

// Create and export selectors
export const selectTopics = (state) => state.topics.topics;

// Export action creators and reducer
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
