import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product-dto';
import { Roles } from '@prisma/client';
import { UserRoles } from 'src/auth/constant';

@Controller('api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post("create")
  @UserRoles(Roles.ADMIN)
  async createProduct(@Body() productDto: ProductDto): Promise<ProductDto> {
    return await this.productService.createProduct(productDto);
  }
}
