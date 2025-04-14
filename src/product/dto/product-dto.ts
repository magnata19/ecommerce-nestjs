import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price: Prisma.Decimal;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  stock: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  categoryId: number | null;
}