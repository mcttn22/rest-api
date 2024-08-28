/*
 * @fileoverview
 * Provide functionality and interact with models.
 *
 */

import { dataModel } from "../models/apiModel";

const readData = async () => {
	return await dataModel.find({});
};

const createData = async (data: string) => {
	dataModel.create({ data }).then((savedData) => {
		console.log(`${data} saved to database`);
		return savedData;
	}).catch((e) => {
		console.log(e);
	});
};

export { readData, createData };

