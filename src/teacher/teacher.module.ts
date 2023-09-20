import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from './entity/teacher.entity';
import { Student } from 'src/student/entity/student.entity';
import { StudentTeacher } from 'src/entities/studentTeacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity, Student, StudentTeacher])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class Teacher {}
