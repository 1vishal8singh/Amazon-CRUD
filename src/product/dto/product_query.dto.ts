import { Transform } from "class-transformer"
import { IsNumber, IsOptional } from "class-validator"

export class QueryDto{

@IsNumber()
@IsOptional()
@Transform(({value})=>parseInt(value))
limit:number=10

@IsNumber()
@IsOptional()
@Transform(({value})=>parseInt(value))
offset:number=0

}