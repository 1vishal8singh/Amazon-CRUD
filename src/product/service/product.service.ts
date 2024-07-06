import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../repository/product.repository";
import { ProductDto } from "../dto/product.dto";
import { UpdateDto } from "../dto/update_product.dto";

@Injectable()
export class ProductService{
    constructor(private productRepository:ProductRepository){}
    async getAllProduct(limit:number,offset:number)
    {
        return await this.productRepository.getAllProduct(limit,offset);
    }

    async getProductById(id:number)
    {
        return await this.productRepository.getProductById(id);
    }

    async createProduct(obj:ProductDto)
    {
        return this.productRepository.createProduct(obj);
    }

    
    async updateProduct(obj:UpdateDto)
    {
        return this.productRepository.updateProduct(obj);
    }

    
    async deleteProduct(productId:number,userId:number)
    {
        return await this.productRepository.deleteProduct(productId,userId);
        
    }
    
}