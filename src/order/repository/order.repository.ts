import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { Order } from '../entity/order.entity';
import { OrderIdDto } from '../dto/delete_order.dto';
import { UserRepository } from 'src/user/repository/user.repository';
import { Sequelize } from 'sequelize-typescript';
import { create } from 'domain';
import { Transaction } from 'sequelize';
import { ProductRepository } from 'src/product/repository/product.repository';
import { OrderProductMapper } from 'src/order-product-mapper/order_product_mapper.entity';
import { error } from 'console';
import { Product } from 'src/product/entity/product.entity';

@Injectable()
export class OrderRepository {
  constructor(
    private readonly userRepository: UserRepository,
    private productRepository: ProductRepository,
    private readonly sequelize: Sequelize,
  ) {}
  async createOrder(obj: OrderDto) {
    const transaction = await this.sequelize.transaction();
    const createdOrder = await Order.create(obj, { transaction });
    try {
      if (createdOrder) {
        const productId = obj.product_id;
        const orderId = obj.id;
        const customerId = createdOrder?.user_id;
        const user = await this.userRepository.getUserById(customerId);
        const product = await this.productRepository.getProductById(
          obj.product_id,
        );
        product.stock = product.stock - obj.quantity;
        await OrderProductMapper.create(
          { productId, orderId },
          { transaction },
        );
        await transaction.commit();
        return createdOrder;
      }
    } catch {
      await transaction.rollback();
      throw new error('User not created');
    }
  }

  async deleteOrder(orderId: number) {
    const transaction = await this.sequelize.transaction();
    try {
      const order = await Order.findByPk(orderId);
      if (!order) throw new Error('Order not found');

      await OrderProductMapper.destroy({ where: { orderId }, transaction });
      await order.destroy({ transaction });

      await transaction.commit();
      return order;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  
  async getAllOrders(offset: number, limit: number) {
    return await OrderProductMapper.findAndCountAll({
        include: [
            {
                model: Product,
            },
        ],
        offset,
        limit,
    });
}

async getOrderById(id: number) {
    return OrderProductMapper.findOne({ where: { id } });
}
}
