import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('products')
export class ProductController {
  constructor(public readonly productService: ProductService) {}

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);

  }

  @Get()
  getProducts() {
    return this.productService.getProducts()
  }
}