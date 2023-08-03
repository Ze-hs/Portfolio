import axios from "axios";

const baseUrl = "http://localhost:3001/api/projects";

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const get = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`);
	return response.data;
};

const create = async (data) => {
	const response = await axios.post(baseUrl, data);
	return response.data;
};

const update = async (id, data) => {
	const response = await axios.put(`${baseUrl}/${id}`, data);
	return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, get, create, update };
