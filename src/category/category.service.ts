import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { ICategoryDto } from './interface/category-interface';
import { CategoryDto } from './dto/category-dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) { }

  async createCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    const category = await this.prismaService.category.create({
      data: {
        name: categoryDto.name
      }
    })
    return category;
  }
} 
