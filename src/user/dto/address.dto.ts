import { IsNotEmpty, IsString } from "class-validator";
import { IAddressDto } from "../interface/iaddress.dto";
import { ApiProperty } from "@nestjs/swagger";

export class AddressDto implements IAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string
}