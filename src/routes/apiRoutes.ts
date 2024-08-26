/*
 * @fileoverview
 * Define API endpoints and associated controller methods.
 *
 */

import { Router } from "express";
import { getData } from "../controllers/apiController";

const router = Router();

router.get("/", getData);

export { router };

