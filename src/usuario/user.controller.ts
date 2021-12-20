import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(
    private userService: UserService
  ) {}

  @Post()
  public createUser(@Body() user: User): User {
    const userCreated = this.userService.createUser(user);

    return userCreated;
  }

  @Get()
  public listUsers() {
    const userList = this.userService.listUsers();
  
    return userList;
  }

  @Get(':userName')
  public searchUserByName(@Param('userName') userName: string) {
    const userByName = this.userService.searchUserByName(userName);
  
    return userByName;
  }
}