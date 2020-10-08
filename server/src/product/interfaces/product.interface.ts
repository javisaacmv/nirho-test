import { Document } from "mongoose";

export interface Product extends Document{
    NameProduct: string,
    Category: string,
    Description: string,
    ProductQuantity:number,
    Status: boolean,
    TimeStamp: Date
}