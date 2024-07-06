


import { Table,Column,DataType, Model, AllowNull, CreatedAt, PrimaryKey, Index } from "sequelize-typescript";

import {   HasMany } from 'sequelize-typescript';
import { Order } from "src/order/entity/order.entity";
import { Product } from "src/product/entity/product.entity";

@Table({
    indexes: [
        {
            unique: true,
            fields: ['email']
        }
    ]
})
export class User extends Model<User> {

    @Column({primaryKey:true,allowNull:false,type:DataType.INTEGER})
    id:number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName: string;
     
    @Index
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column(DataType.STRING)
    password: string;

    @Column(DataType.INTEGER)
    phone: number;

    @Column(DataType.STRING)
    address: string;

    @Column(DataType.STRING)
    city: string;

    @Column(DataType.STRING)
    state: string;

    @Column(DataType.STRING)
    zipCode: string;

    @HasMany(() => Order)
    orders: Order[];

    @HasMany(() => Product)
    products: Product[];

}



