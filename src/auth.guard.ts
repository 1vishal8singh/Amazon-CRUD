

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { validateRequest } from './validateRequest';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean>|any {
    const request = context.switchToHttp().getRequest();
    //console.log(request);
    
     return validateRequest(request);
  }
}