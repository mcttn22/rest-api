/*
 * @fileoverview
 * Entrypoint of project.
 *
 */

import dotenv from "dotenv";
import { setupDatabase } from "./config/database";
import { app } from "./app";

dotenv.config();

setupDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

