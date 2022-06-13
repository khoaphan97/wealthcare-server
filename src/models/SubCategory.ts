import { Schema, model, SchemaTypes, Types } from "mongoose";
import { CommonRecord } from "./interfaces";

export interface ISubCategory extends CommonRecord {
    name: string;
    from: Types.ObjectId;
}

const CategorySchema = new Schema<ISubCategory>({
    name: {
        type: String,
        required: true,
    },
    from: { type: SchemaTypes.ObjectId, ref: 'Category' },
    created: Number,
    updated: Number,
});

export default model('Budget', CategorySchema);