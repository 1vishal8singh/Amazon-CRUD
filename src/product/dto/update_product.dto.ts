import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateDto{


@IsNumber()
@IsNotEmpty()
id: number;

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
