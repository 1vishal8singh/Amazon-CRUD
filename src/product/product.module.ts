

import { Module } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';


@Module({
    imports: [],
    providers: [ProductRepository,ProductService],
    controllers: [ProductController],
    exports: [],
})
export class ProductModule {}
