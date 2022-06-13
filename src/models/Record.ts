import { Schema, model, SchemaTypes, Types } from "mongoose";
import { CommonRecord } from "./interfaces";

export interface IRecord extends CommonRecord {
    ammount: number;
    account: Types.ObjectId;
    category: Types.ObjectId;
    userId: Types.ObjectId;
    prePaid: boolean;
    note: string;
}

const RecordSchema = new Schema<IRecord>({
    ammount: {
        type: Number,
        required: true,
    },
    account: {
        type: SchemaTypes.ObjectId,
        ref: 'Account',
        required: true,
    },
    category: {
        type: SchemaTypes.ObjectId,
        ref: 'Category',
        required: true,
    },
    userId: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    prePaid: Boolean,
    created: Number,
    updated: Number,
});

export default model('Record', RecordSchema);