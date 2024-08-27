/*
 * @fileoverview
 * Basic connection to MongoDB
 *
 */

import mongoose from "mongoose";

async function setupDatabase () {
	const URI = process.env.MONGO_URI || "mongodb://localhost:27017";
	try {
		await mongoose.connect(URI);
	} catch (e) {
		console.log(e);
	}
}

export { setupDatabase };

