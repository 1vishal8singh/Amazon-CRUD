import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user_creation.dto';
import { UserService } from '../service/user.service';
import { BodyDto } from '../dto/user_body.dto';
import { UserIdDto } from '../dto/user_param.dto';
import { QueryDto } from '../dto/user_query.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(@Query() query:QueryDto)
  {
    return this.userService.getAllUsers(query.limit,query.offset);
  }

  @Get(':id')
  async getUserById(@Param() param:UserIdDto)
  {
    return this.userService.getUserById(param.id);
  }

  @Post()

  async createUser(@Body() newUser: CreateUserDto) {
    const obj = newUser;
    return this.userService.createUser(obj);

  }
  
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number, @Body() body:BodyDto) {
   
    return this.userService.deleteUser(id,body.password);

  }
}
