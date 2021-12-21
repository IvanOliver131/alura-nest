import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "./user.service";

// Colocando o @Injectable() você transforma a classe IsUserNameConstraint em um provider... Desta forma você consegue utilizar normalmente a função
@Injectable()
@ValidatorConstraint()
export class IsUserNameUniqueConstraint implements ValidatorConstraintInterface {
  
  constructor(private userService: UserService) {}
  
  validate(userName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.userService.searchUserByName(userName);  
  }
}

export function IsUserNameUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserNameUniqueConstraint,
    });
  };
}