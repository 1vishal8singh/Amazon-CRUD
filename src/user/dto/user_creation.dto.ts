

import { IsString,IsNumber,IsNotEmpty,IsEmail,IsPhoneNumber,IsBoolean, isNotEmpty, Matches, IsEnum, matches} from "class-validator";

export class CreateUserDto{
    @IsNumber()
    @IsNotEmpty()
    id:number;

    @IsString()
    @IsNotEmpty()
    firstName:string;

    @IsString()
    @IsNotEmpty()
    lastName:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    phoneNumber:string;
  

    @IsString()
    @IsNotEmpty()
    gender:string;

    @IsNumber()
    @IsNotEmpty()
    age:number;

    @IsString()
    address:string;


    @IsNotEmpty()
    @IsString()
    @Matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/,{message:'Enter valid password'})
    password:string;





}