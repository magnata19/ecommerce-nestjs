import { IsNotEmpty, IsString } from "class-validator";
import { IUserDto } from "../interface/iuser.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto implements IUserDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}