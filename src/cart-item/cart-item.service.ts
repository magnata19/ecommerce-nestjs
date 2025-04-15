import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { ICartItemDto } from './interface/cartItem-interface-dto';
import { IRequest } from 'src/types/irequest.user';
import { Product } from '@prisma/client';

@Injectable()
export class CartItemService {
  constructor(private prismaService: PrismaService) { }

  async createCartItem(user: IRequest['user'], cartItemDto: ICartItemDto): Promise<ICartItemDto> {
    try {
      const profile = await this.prismaService.profile.findFirstOrThrow({
        where: { userId: user.id }
      })

      const product = await this.prismaService.product.findFirstOrThrow({
        where: { id: cartItemDto.productId }
      })

      const cartItem = await this.prismaService.cartItems.create({
        data: {
          profileId: profile.id,
          productId: product.id,
          quantity: cartItemDto.quantity
        }
      })

      return cartItem;
    } catch (err) {
      throw new BadRequestException("Erro ao criar carrinho de compras.")
    }
  }
}
