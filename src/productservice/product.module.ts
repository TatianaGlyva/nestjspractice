import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';


@Module({
  controllers: [ProductController],
  providers: [ ProductService,
    /*{
      provide: ProductService,
      useClass: ProductService,
    },*/
  ]
})

export class ProductModule {}