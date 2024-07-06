


import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";
import { Column, DataType, Table,Model, ForeignKey, AutoIncrement, Index } from "sequelize-typescript";
import { Order } from "src/order/entity/order.entity";
import { Product } from "src/product/entity/product.entity";

@Table
export class OrderProductMapper extends Model<OrderProductMapper>
{   @AutoIncrement
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @ForeignKey(() => Order)
    @Column({type:DataType.INTEGER})
    orderId: number;

    @ForeignKey(() => Product)
    @Column({type:DataType.INTEGER})
    productId: number;


}