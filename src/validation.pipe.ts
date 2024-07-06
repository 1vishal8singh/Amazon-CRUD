

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { isBoolean } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value:string, metadata: ArgumentMetadata) {

    if(value == 'true' || value == 'false'){
      return value == 'true'    
    }
    throw new BadRequestException('Invalid input. Value must be a boolean.');

    // console.log("inside validator",value,typeof value);

    // console.log(value);
    // const val=Boolean(value);
    // console.log(val)
  
    // if(typeof value == 'boolean')
    //   return true;

    // else
    

    // const transformedValue = Number(value);
    // console.log(transformedValue);
    // if (isBoolean(transformedValue)) {
      
    //   return 'valid input is boolean'
    //console.log(transformedValue, typeof transformedValue);
   // return transformedValue;

    // }
    // else
    // throw new BadRequestException('Invalid input. Value must be a boolean.');
  }
}