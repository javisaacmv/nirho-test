import { Schema } from "mongoose";
import * as mongoosePaginate from 'mongoose-paginate';

export const ProductSchema = new Schema({
    NameProduct: {
        type:String, 
        required:true, 
        maxlength:150
    },
    Category:{
        type: String,
        enum:['Bebidas', 'Limpieza', 'Botanas','Cremeria'],
        required: true
    },
    Description:{
        type: String,
        required: true,
        maxlength: 450
    },
    ProductQuantity:{
        type: Number,
        required: true,
        min:0,
        max:100
    },
    Status:{
        type: Boolean,
        required: true
    },
    TimeStamp:{
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate);