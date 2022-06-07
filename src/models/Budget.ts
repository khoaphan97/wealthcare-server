import { Schema, model, SchemaTypes } from "mongoose";
import { IBudget } from "./interfaces";


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
    categories: [{type: SchemaTypes.ObjectId, ref: 'SubCategory'}]
});

export default model('Budget', BudgetSchema);