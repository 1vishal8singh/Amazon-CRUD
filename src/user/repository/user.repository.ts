import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/user_creation.dto';
import { BodyDto } from '../dto/user_body.dto';

@Injectable()
export class UserRepository {

  async getAllUsers(limitNum:number,offsetNum:number)
  {
    return await User.findAndCountAll({limit:limitNum,offset:offsetNum});
  }

  async getUserById(userId:number)
  {
     return await User.findOne({where:{id:userId}});
  }

  async createUser(user: CreateUserDto) {
    let id = user.id;
    let checkUser = await User.findOne({ where: { id } });

    if (checkUser) {
      throw new ConflictException('user already exist');
    }

    return await User.create(user);
  }

  async deleteUser(userId: number,userPassword:string) {
    let user = await User.findOne({where:{id:userId,password:userPassword}} );

    if (!user) {
      throw new NotFoundException('user not found');
    }
     
    User.destroy({ where: { id:userId} });
    return 'User deleted success fully';
  }
}
