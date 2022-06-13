import { Schema, model } from "mongoose";
import { CommonRecord } from "./interfaces";

export interface IUser extends CommonRecord {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: Number,
    updated: Number,
});

export default model('Budget', UserSchema);