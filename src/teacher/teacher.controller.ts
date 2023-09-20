import {
  Controller,
  Post,
  Body,
  Patch,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTeacher } from './dto/createTeacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacher: TeacherService) {}

  @Post('create')
  createTeacher(@Body() data: CreateTeacher) {
    return this.teacher.create(data);
  }

  @Get('read')
  readTeacher() {
    return this.teacher.read();
  }

  @Delete('delete/:id')
  deleteTeacher(@Param('id') id: number) {
    return this.teacher.delete(id);
  }
}
