import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/user/entity/user.entity";
import { Product } from "../entity/product.entity";
import { ProductDto } from "../dto/product.dto";
import { UpdateDto } from "../dto/update_product.dto";

@Injectable()
export class ProductRepository{
    async getAllProduct(limitNum,offsetNum)
    {
        
        const products = await Product.findAll({
            include: [{
                model: User
            }],
            limit:limitNum,
            offset:offsetNum
        });
    }

    async getProductById(productId:number)
    {
        
        const product = await Product.findByPk(productId, {
            include: [{
                model: User,
            }]

        });

        
        if(!product)
            {
                throw new NotFoundException('product not found');
            }

        return product;
    }

    async createProduct(obj:ProductDto)
    {
        const product= await Product.findOne({where:{id:obj.id}})
        if(product)
            {
                throw new ConflictException('product already exist');
            }

        return await Product.create(obj);


    }

    
    async updateProduct(obj:UpdateDto)
    {
        const product= await Product.findOne({where:{id:obj.id}})
        if(!product)
            {
                throw new NotFoundException('Product not found');
            }

     
        await product.update(obj);
        return product;

    }

    async deleteProduct(productId:number,userId:number)
    {
        const product= await Product.findOne({where:{id:productId}})
        if(!product)
            {
                throw new NotFoundException('Product not found');
            }
        if(product.user_id===userId)
        {

         Product.destroy({where:{id:productId}});
         return 'Product deleted successfully';

        }
        
        else
         throw new BadRequestException('You can not delete product');
        
    }

}