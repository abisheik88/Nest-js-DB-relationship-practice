import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStudent } from './dto/createStudent.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentrepo: StudentService) {}

  @Post('create')
  createStudent(@Body() data: CreateStudent) {
    const newData = this.studentrepo.create(data);
    return newData;
  }
  @Patch('/update/:id')
  updateStudent(@Param('id') id: number, @Body() data) {
    const updated = this.studentrepo.update(id, data);
  }

  @Delete('delete/:id')
  deleteStudent(@Param('id') id: number) {
    this.studentrepo.delete(id);
  }
}
