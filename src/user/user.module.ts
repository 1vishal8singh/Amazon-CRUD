

import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";
import { UserRepository } from "./repository/user.repository";


@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserService,UserRepository],
    exports:[]
})
export class UserModule{
    constructor()
    {
        console.log("this is userModule");
    }

}