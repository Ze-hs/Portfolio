const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");

// All routers from the controllers folder
const projectRouter = require("./controllers/project");

mongoose
	.connect(config.MONGODB_URI)
	.then(() => {
		logger.info("Connected");
	})
	.catch((error) => {
		logger.error("error connecting to MongoDB:", error.message);
	});

const app = express();

app.use(cors());
app.use(express.json());

// Middleware starts
app.use(middleware.requestLogger);

app.use("/api/projects", projectRouter);

// Unknown endpoint middleware, after all available routes
app.use(middleware.unknownEndPoint);
app.use(middleware.errorHandler);

module.exports = app;
