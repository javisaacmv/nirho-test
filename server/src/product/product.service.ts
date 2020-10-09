import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PaginateModel } from 'mongoose';

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO, PaginationDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product_JavierMontano') private readonly productModel: PaginateModel<Product>){}

    async getProducts(paginationDTO: PaginationDTO): Promise<any>{
        let products
        if(!paginationDTO.page && !paginationDTO.limit){
             products = await this.productModel.find()
        }else{
            const options = {
                populate: [
                    // Your foreign key fields to populate
                ],
                page: Number(paginationDTO.page),
                limit: Number(paginationDTO.limit),
            };
             products = await this.productModel.paginate({}, options);
        }
     
        
        return products;
    }

    async getProductById(id: string): Promise<Product>{
        const product = await this.productModel.findById(id)

        return product
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        const product =  new this.productModel(createProductDTO)
        return await product.save()
    }

    async deleteProduct(productID: string): Promise<Product>{
        return await this.productModel.findByIdAndDelete(productID)
    }

    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product>{
        return await this.productModel.findByIdAndUpdate(productID,createProductDTO, {new: true})
    }

}
