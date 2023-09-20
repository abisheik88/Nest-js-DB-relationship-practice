import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStudent {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  department: string;
}
