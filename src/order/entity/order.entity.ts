

 import { Table, Column, Model, DataType, ModelClassGetter,ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { OrderProductMapper } from 'src/order-product-mapper/order_product_mapper.entity';
import { User } from "src/user/entity/user.entity";

@Table
export class Order extends Model<Order> {
    @Column({primaryKey:true,allowNull:false,type:DataType.INTEGER})
    id:number;

    
    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER})
    user_id: number;


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    item_quantities: number;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    orderDate: Date;


    @BelongsTo(() => User)
    user: User;

    
    @BelongsTo(() => OrderProductMapper)
    order: OrderProductMapper;
}




