import { IsNotEmpty, IsNumber } from "class-validator";
import { ICartItemDto } from "../interface/cartItem-interface-dto";

export class CartItemDto implements ICartItemDto {

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}