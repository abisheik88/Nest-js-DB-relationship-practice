import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeacher {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsNotEmpty()
  subject: string;
}
