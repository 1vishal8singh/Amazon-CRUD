import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from './database/module.database';
import { LoggerMiddleware } from './logger';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [DatabaseModule,UserModule,ProductModule,OrderModule],
  controllers: [],
  providers: [],
})

export class AppModule {

}

