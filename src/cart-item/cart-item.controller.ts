import { Body, Controller, Post, Req } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemDto } from './dto/cartItem-dto';
import { IRequest } from 'src/types/irequest.user';
import { UserRoles } from 'src/auth/constant';
import { Roles } from '@prisma/client';

@Controller('api/v1/cartItem')
export class CartItemController {
  constructor(private cartItemService: CartItemService) { }

  @Post("create")
  async createCartItem(@Req() req: IRequest, @Body() cartItemDto: CartItemDto): Promise<CartItemDto> {
    return await this.cartItemService.createCartItem(req.user, cartItemDto);
  }
}
