import { Module, OnModuleInit } from '@nestjs/common';
import { AdminProductsService } from './admin/admin-products.service';
import { AdminProductsController } from './admin/admin-products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsController } from './public/products.controller';
import { ProductService } from './public/products.service';

@Module({
  controllers: [AdminProductsController, ProductsController],
  providers: [AdminProductsService, ProductService],
  exports: [ProductService]
})
export class ProductsModule implements OnModuleInit {

  constructor (
    private prismaService: PrismaService,
    private adminProductService: AdminProductsService,
  ) {}

  async onModuleInit() {
    const products = new Array(10).fill(0).map((_, index) => index + 1);
    
    await this.prismaService.product.deleteMany();

    for (const productIndex of products) {
      await this.adminProductService.create({
        name: `Product ${productIndex}`,
        slug: `product-${productIndex}`,
        description: `Description of product ${productIndex}`,
        price: productIndex * 100,
      });
    }
  }
  
}
