/*
 * @fileoverview
 * Provide functionality and interact with models.
 *
 */

import { dataModel } from "../models/apiModel";

const getDataService = async () => {
	return await dataModel.find({});
};

export { getDataService };

