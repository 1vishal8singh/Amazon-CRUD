import { IsNotEmpty, IsString, Matches } from "class-validator";

export class BodyDto{
    
@IsNotEmpty()
@IsString()
@Matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/,{message:'Enter valid password'})
password:string;

}