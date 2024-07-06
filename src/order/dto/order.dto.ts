

import { Transform } from "class-transformer";
import { IsString,IsNumber,IsNotEmpty,IsEmail,IsPhoneNumber,IsBoolean, isNotEmpty, Matches, IsEnum, IsDateString} from "class-validator";

export class OrderDto{
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id: number;

    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    user_id: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    product_id: number;

    
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    quantity: number;

    
    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsDateString()
    order_date:Date




}