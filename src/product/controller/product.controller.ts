import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { QueryDto } from "../dto/product_query.dto";
import { ProductIdDto } from "../dto/product_param.dto";
import { ProductDto } from "../dto/product.dto";
import { UpdateDto } from "../dto/update_product.dto";

@Controller('product')
export class ProductController{
    constructor(private productService:ProductService){}
    @Get()
    async getallProduct(@Query() query:QueryDto)
    {
      return await this.productService.getAllProduct(query.limit,query.offset);
    }
    
    @Get('id')
    async getProductByid(@Param() productId:ProductIdDto)
    {
        return await this.productService.getProductById(productId.id);
    }

    @Post()
    async createProduct(@Body() body:ProductDto)
    {
       return await this.productService.createProduct(body);
    }

    
    @Put()
    async updateProduct(@Body() body:UpdateDto)
    {
       return await this.productService.updateProduct(body);
    }

    @Delete()
    async deleteProduct(@Param('id',ParseIntPipe) id:number,@Body('user_id') user_id:number)
    {
      return await this.deleteProduct(id,user_id);
    }
}