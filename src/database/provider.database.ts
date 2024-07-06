

import { Sequelize } from 'sequelize-typescript';
import { Order } from 'src/order/entity/order.entity';
import { Product } from 'src/product/entity/product.entity';
import { Student } from 'src/student.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'vishal@1',
        database: 'practice',
      });
      sequelize.addModels([Order,Product]);
      await sequelize.sync({alter:true});
      return sequelize;
    },
  },
];
