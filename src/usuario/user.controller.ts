import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(
    private userService: UserService
  ) {}

  @Post()
  public createUser(@Body() user: User ): NestResponse {
    try {
      const userCreated = this.userService.createUser(user);
       
      return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withHeaders({
          'Location': `/users/${user.userName}`,
        })
        .withBody(userCreated)
        .build();

      // Quando utilizamos o Res (Res pode ser utilizado somente no express) não utilizamos o return e dessa forma tiramos o retorno User
      // res.status(HttpStatus.CREATED)
      //   .location(`/users/${user.userName}`)
      //   .json(userCreated)
    } catch(error) {
      throw new Error("Error in create User");
    }   
  }

  @Get()
  public listUsers() {
    try {
      const userList = this.userService.listUsers();
      
      return userList;
    } catch(error) {
      throw new Error('Users not found');
    }
  }

  @Get(':userName')
  public searchUserByName(@Param('userName') userName: string): User {
    const userByName = this.userService.searchUserByName(userName);
    if (!userByName) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "User not found"
      });
    }
  
    return userByName; 
  }
}