import { IsNotEmpty, IsString } from "class-validator";
import { IAddressDto } from "../interface/iaddress.dto";

export class AddressDto implements IAddressDto {
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string
}