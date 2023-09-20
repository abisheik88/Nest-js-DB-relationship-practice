import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDept {
  @IsOptional()
  @IsString()
  department: string;

  @IsOptional()
  @IsString()
  department_block: string;
}
