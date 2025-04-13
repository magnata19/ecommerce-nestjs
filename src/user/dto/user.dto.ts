import { IsNotEmpty, IsString } from "class-validator";
import { IUserDto } from "../interface/iuser.dto";

export class UserDto implements IUserDto {

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}