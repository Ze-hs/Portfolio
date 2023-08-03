import { createSlice } from "@reduxjs/toolkit";
import projectService from "../services/project";

const projectSlice = createSlice({
	name: "projects",
	initialState: [],
	reducers: {
		setProjects(state, action) {
			return action.payload;
		},

		addProject(state, action) {
			return state.concat(action.payload);
		},

		removeProject(state, action) {
			const id = action.payload;
			return state.filter((project) => project.id !== id);
		},

		updateProject(state, action) {
			const newProject = action.payload;
			return state.map((project) =>
				project.id !== newProject.id ? project : newProject
			);
		},
	},
});

export const { setProjects, addProject, removeProject, updateProject } =
	projectSlice.actions;

export const initializeProject = () => {
	return async (dispatch) => {
		const content = await projectService.getAll();
		console.log("inside reducer", content);
		const sortedContent = content.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		dispatch(setProjects(sortedContent));
	};
};

export const handleCreate = (data) => {
	return async (dispatch) => {
		const content = await projectService.create(data);
		dispatch(addProject(content));
	};
};

export const handleDelete = (id) => {
	return async (dispatch) => {
		await projectService.delete(id);
		dispatch(removeProject(id));
	};
};

export const handeUpdate = (id, data) => {
	return async (dispatch) => {
		const content = await projectService.update(id, data);
		dispatch(updateProject(content));
	};
};

export default projectSlice.reducer;
