import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsUserNameUnique } from './is-user-name-unique.validator';

export class User {
  id: number;

  @IsUserNameUnique({
    message: "userName need to be unique"
  })
  @IsNotEmpty({
    message: "userName is required"
  })
  @IsString({
    message: "userName need to be a string"
  })
  userName: string;

  @IsEmail({
    message: "email is required"
  })
  email: string;

  // @Expose({
  //   // Transforma o nome da propriedade na hora que for serializado
  //   name: 'password'
  // })
  @Exclude({
    // Exclui a propriedade senha no momento de serialização
    toPlainOnly: true
  })
  @IsNotEmpty({
    message: "password is required"
  })
  @IsString()
  password: string;

  @IsNotEmpty({
    message: "fullName is required"
  })
  @IsString()
  fullName: string;
  
  createDate: Date; 
}