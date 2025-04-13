import { IsNotEmpty, IsString } from "class-validator";
import { IAuthDto } from "../interface/user.interface";

export class AuthDto implements IAuthDto {

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}