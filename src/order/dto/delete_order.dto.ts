
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

 
export class OrderIdDto {
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id: number;
  }