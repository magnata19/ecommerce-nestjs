import { IsNotEmpty, IsSemVer, IsString } from "class-validator";
import { ICategoryDto } from "../interface/category-interface";

export class CategoryDto implements ICategoryDto {

  @IsString()
  @IsNotEmpty()
  name: string;

}