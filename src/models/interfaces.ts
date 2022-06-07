import { Types } from "mongoose";

export interface ICategory {
    name: string;
    subCategories: Types.ObjectId[];
}

export interface ISubCategory {
    name: string;
    from: Types.ObjectId;
}

export interface IBudget {
    name: string;
    amount: number;
    spent?: number;
    categories: Types.ObjectId[];
}