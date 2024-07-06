import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { OrderDto } from "../dto/order.dto";
import { OrderService } from "../service/order.service";
import { OrderIdDto } from "../dto/delete_order.dto";
import { QueryDto } from "src/product/dto/product_query.dto";

@Controller('order')
export class OrderController
{  
    constructor(private orderService:OrderService){}

    @Get()
    async getAllOrders(@Query() query:QueryDto)
    {
      return await this.orderService.getAllorder(query.limit,query.offset)
    }

    @Get(':id')
    async getOrderById(@Param('id',ParseIntPipe) id:number)
    {
       return await this.getOrderById(id)
    }
    
    @Post()
   async createOrder(@Body() body:OrderDto)
    {
    
     return await this.orderService.createOrder(body);

    }

   @Delete()
   async deleteOrder(@Param() param:OrderIdDto)
   {

     return await this.orderService.deleteOrder(param.id);

   }

}