/*
 * @fileoverview
 * Define API endpoints and associated controller methods.
 *
 */

import { Router } from "express";
import { getData, postData } from "../controllers/apiController";

const router = Router();

router.get("/", getData);
router.post("/", postData);

export { router };

