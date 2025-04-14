import { IsNotEmpty, IsString } from "class-validator";
import { IAddressDto } from "../interface/iaddress.dto";
import { IProfileDto } from "../interface/iprofile.dto";
import { ApiProperty } from "@nestjs/swagger";

export class ProfileDto implements IProfileDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: IAddressDto;

}