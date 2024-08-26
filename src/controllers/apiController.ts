/*
 * @fileoverview
 * Handles for API requests.
 *
 */

import { Request, Response } from "express";
import { getDataService } from "../services/apiService";

const getData = async (req: Request, res: Response) => {
	const data = await getDataService();
	res.json(data);
};

export { getData };

