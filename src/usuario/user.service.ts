import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

//Com o Injectable não preciso criar um new nomeService()
@Injectable()
export class UserService {
 private users: Array<User> = [];

  public createUser(user: User): User {
    this.users.push(user);

    return user;
  }

  public listUsers() {
    return this.users;
  }

  public searchUserByName(userName: string): User {
    return this.users.find(user => user.userName == userName);
  }
}