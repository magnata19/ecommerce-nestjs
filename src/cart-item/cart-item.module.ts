import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  providers: [CartItemService, PrismaService],
  controllers: [CartItemController]
})
export class CartItemModule { }
