const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	imageUrl: {
		type: String,
		require: true,
	},
	categories: [{ type: String }],
});

projectSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("project", projectSchema);
