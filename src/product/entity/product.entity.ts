
import { Table,Column,DataType, Model, AllowNull, CreatedAt, ForeignKey, BelongsTo } from "sequelize-typescript";
  
import { User } from "src/user/entity/user.entity";

@Table
export class Product extends Model<Product> {
    
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock: number;

    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER})
    user_id: number;

    @BelongsTo(() => User)
    user: User;
}



    

    

