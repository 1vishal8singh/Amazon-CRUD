import { Module } from '@nestjs/common';
import { OrderController } from './controller/order.controller';
import { OrderRepository } from './repository/order.repository';
import { OrderService } from './service/order.service';


@Module({
    imports: [],
    providers: [OrderService,OrderRepository],
    controllers: [OrderController],
    exports: [],
})
export class OrderModule {}
