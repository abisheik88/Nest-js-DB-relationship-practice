import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Department } from 'src/department/entity/department.entity';
import { TeacherEntity } from 'src/teacher/entity/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Department, TeacherEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
