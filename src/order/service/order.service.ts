import { Injectable } from "@nestjs/common";
import { OrderDto } from "../dto/order.dto";
import { OrderIdDto } from "../dto/delete_order.dto";
import { OrderRepository } from "../repository/order.repository";
import { Order } from "../entity/order.entity";

@Injectable()
export class OrderService{
    constructor(private orderRepository:OrderRepository){}
    async createOrder(obj:OrderDto):Promise<Order>
    {
      return await this.orderRepository.createOrder(obj);
    }

    async deleteOrder(id:number)
    {
      return await this.orderRepository.deleteOrder(id);
    }

    
    async getAllorder(limit:number,offset:number)
    {
      return await this.orderRepository.getAllOrders(limit,offset);
    }

    
    async getOrderById(id:number)
    {
      return await this.orderRepository.getOrderById(id);
    }

}