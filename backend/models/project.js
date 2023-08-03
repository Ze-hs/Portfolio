const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		githubUrl: {
			type: String,
			required: true,
		},
		tags: [{ type: String }],
	},
	{
		timestamps: true,
	}
);

projectSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("project", projectSchema);
