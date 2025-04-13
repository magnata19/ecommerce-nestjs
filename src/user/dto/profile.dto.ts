import { IsNotEmpty, IsString } from "class-validator";
import { IAddressDto } from "../interface/iaddress.dto";
import { IProfileDto } from "../interface/iprofile.dto";

export class ProfileDto implements IProfileDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  address: IAddressDto;

}