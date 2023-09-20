import { IsString, IsInt, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDetails {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;
}
