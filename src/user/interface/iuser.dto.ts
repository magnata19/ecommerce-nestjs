import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export interface IUserDto {
  username: string;
  password: string;
}