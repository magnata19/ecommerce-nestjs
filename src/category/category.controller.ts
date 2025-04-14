import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category-dto';

@Controller('api/v1/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Post('create')
  async createCategory(@Body() category: CategoryDto): Promise<CategoryDto> {
    return await this.categoryService.createCategory(category);
  }
}
