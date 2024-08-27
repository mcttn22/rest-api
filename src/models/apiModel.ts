/*
 * @fileoverview
 * Provide methods to interact with database.
 *
 */

import mongoose, { Document, Schema } from "mongoose";

interface IData extends Document {
	animal: String;
}

const dataSchema = new Schema ({animal: {type: String, required: false}});

const dataModel = mongoose.model<IData>("dataCollection", dataSchema);

export { dataModel };

