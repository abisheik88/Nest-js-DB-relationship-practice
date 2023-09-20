import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDept } from './dto/createDept.dto';
import { departmentService } from './department.service';
import { UpdateDept } from './dto/updatedepartment.dto';

@Controller('department')
export class departmentController {
  constructor(public readonly dept: departmentService) {}

  //Create department
  @Post('create')
  create(@Body() data: CreateDept) {
    this.dept.create(data);
  }

  //Read department
  @Get()
  getDepartment() {
    return this.dept.read();
  }

  //Update department
  @Patch('update/:id')
  updateDepartment(@Param('id') id: number, @Body() updatedept: UpdateDept) {
    return this.dept.update(id, updatedept);
  }

  //Delete department
  @Delete('delete/:id')
  deleteDept(@Param('id') id: number) {
    return this.dept.delete(id);
  }
}
