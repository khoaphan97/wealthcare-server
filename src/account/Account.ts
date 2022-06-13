import { Schema, model, SchemaTypes, Types } from "mongoose";
import { CommonRecord } from "../models/interfaces";

export type AcountType = 'cash' | 'bank' | 'crypto'
export interface IAccount extends CommonRecord {
    name: string;
    type: AcountType;
    initialAmount: number;
    balance: number;
    userId: Types.ObjectId;
}

const AccountSchema = new Schema<IAccount>({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    initialAmount: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true,
    },
    userId: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
    },
    created: Number,
    updated: Number,
});

export default model('Account', AccountSchema);