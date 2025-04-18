import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  providers: [CategoryService, PrismaService],
  controllers: [CategoryController]
})
export class CategoryModule { }
