import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { ProductDto } from './dto/product-dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) { }

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    try {
      const category = await this.prismaService.category.findUniqueOrThrow({
        where: { id: Number(productDto.categoryId) }
      });
      const product = await this.prismaService.product.create({
        data: {
          name: productDto.name,
          description: productDto.description,
          stock: productDto.stock,
          price: new Prisma.Decimal(productDto.price),
          category: {
            connect: { id: Number(category.id) }
          }
        }
      })
      return product;
    } catch (err) {
      throw new BadRequestException("Erro ao cadastrar produto, tente novamente!", err.message)
    }
  }
}
