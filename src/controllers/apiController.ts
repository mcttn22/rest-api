/*
 * @fileoverview
 * Handles for API requests.
 *
 */

import { Request, Response } from "express";
import { readData, createData } from "../services/apiService";

const getData = async (req: Request, res: Response) => {
	const data = await readData();
	res.json(data);
};

const postData = async (req: Request, res: Response) => {
	const { data } = req.body;
	if (!data) {
		res.status(400).json({ message: "Invalid POST request "});
	}
	const savedData = await createData(data);
	res.status(201).json(savedData);
};


export { getData, postData };

