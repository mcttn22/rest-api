/*
 * @fileoverview
 * Setup of application.
 *
 */

import express from "express";
import { router } from "./routes/apiRoutes";

const app = express();
app.use("/", router);

export { app };

