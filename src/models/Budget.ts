import { Schema, model, SchemaTypes, Types } from "mongoose";
import { CommonRecord } from "./interfaces";

export interface IBudget extends CommonRecord {
    name: string;
    amount: number;
    spent?: number;
    categories: Types.ObjectId[];
    accounts: Types.ObjectId[];
}

const BudgetSchema = new Schema<IBudget>({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    spent: {
        type: Number,
    },
    categories: [{ type: SchemaTypes.ObjectId, ref: 'SubCategory' }],
    accounts: [{ type: SchemaTypes.ObjectId, ref: 'Account' }],
    created: Number,
    updated: Number,
});

export default model('Budget', BudgetSchema);