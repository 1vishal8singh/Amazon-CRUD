import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

 
export class ProductIdDto {
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id: number;
  }