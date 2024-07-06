import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto{

@IsNumber()
@IsNotEmpty()
id: number;

@IsNumber()
@IsNotEmpty()
user_id: number;

@IsString()
@IsNotEmpty()
product_name: string;

@IsNumber()
@IsNotEmpty()
price:number;


@IsNumber()
@IsNotEmpty()
stock:number;


}