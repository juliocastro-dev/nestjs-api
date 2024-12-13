import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductQueryDto } from './dto/product-query.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService){}
    
    @Get()
    findAll(@Query() queryDto: ProductQueryDto){
        return this.productService.findAll(queryDto);
    }
    

    @Get(':slug')
    findOnde(@Param('slug') slug: string) {
        return this.productService.findOne(slug);
    }

}
