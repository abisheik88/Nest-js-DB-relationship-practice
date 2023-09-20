import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDept {
  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  department_block: string;
}
