import { createSlice } from "@reduxjs/toolkit";
import myData from "../assets/data.json";

const projectSlice = createSlice({
	name: "projects",
	initialState: [],
	reducers: {
		setProjects(state, action) {
			return action.payload;
		},
	},
});

export const { setProjects } = projectSlice.actions;

export const initializeProject = () => {
	return async (dispatch) => {
		const content = myData;
		const sortedContent = content.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		dispatch(setProjects(sortedContent));
	};
};

export default projectSlice.reducer;
