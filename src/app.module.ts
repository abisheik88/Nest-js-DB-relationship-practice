import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { DetailsModule } from './details/details.module';
import { DepartmentModule } from './department/department.module';
import { Teacher } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entity/student.entity';
import { Details } from './details/entity/details.entity';
import { Department } from './department/entity/department.entity';
import { TeacherEntity } from './teacher/entity/teacher.entity';
import { StudentTeacher } from './entities/studentTeacher.entity';

@Module({
  imports: [
    StudentModule,
    DetailsModule,
    DepartmentModule,
    Teacher,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'student_practice',
      username: 'postgres',
      password: 'Abisheik88@',
      entities: [Student, Details, Department, TeacherEntity, StudentTeacher],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
