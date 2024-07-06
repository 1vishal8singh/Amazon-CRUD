import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../dto/user_creation.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: CreateUserDto) {
    return this.userRepository.createUser(user);
  }

  async getAllUsers(limit:number,offset:number)
  {
    return await this.userRepository.getAllUsers(limit,offset);
  }

  async getUserById(id:number)
  {
    return await this.userRepository.getUserById(id);
  }

  async deleteUser(id:number,password:string) {
    return this.userRepository.deleteUser(id,password);
  }
}
