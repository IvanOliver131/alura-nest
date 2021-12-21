import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: "userName is required"
  })
  @IsString()
  userName: string;

  @IsEmail({
    message: "email is required"
  })
  email: string;

  @IsNotEmpty({
    message: "password is required"
  })
  @IsString()
  password: string;

  @IsNotEmpty({
    message: "completeName is required"
  })
  @IsString()
  completeName: string;
  
  createDate: Date; 
}