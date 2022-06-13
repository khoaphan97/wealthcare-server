import { Schema, model, SchemaTypes, Types } from "mongoose";
import { CommonRecord } from "./interfaces";

export interface ICategory extends CommonRecord {
    name: string;
}

const CategorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
    },
    created: Number,
    updated: Number,
});

export default model('Budget', CategorySchema);