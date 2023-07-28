const Project = require("../models/project");

const projectRouter = require("express").Router();

projectRouter.get("/", async (req, res) => {
	const content = await Project.find({});
	return res.json(content);
});

projectRouter.get("/:id", async (req, res) => {
	const content = await Project.findById(req.params.id);
	return res.json(content);
});

projectRouter.post("/", async (req, res) => {
	const body = req.body;

	const newProject = Project({
		...body,
	});

	const savedProject = await newProject.save();
	return res.status(201).json(savedProject);
});

projectRouter.put("/:id", async (req, res) => {
	const response = await Project.findByIdAndUpdate(req.params.id, req.body);
	return res.json(response);
});

module.exports = projectRouter;
