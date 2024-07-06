import { IsNotEmpty, IsString } from "class-validator";

export class AdressDto{
    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    state:string;
}