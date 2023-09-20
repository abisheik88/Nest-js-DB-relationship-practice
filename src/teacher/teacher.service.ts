import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TeacherEntity } from './entity/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entity/student.entity';
import { StudentTeacher } from 'src/entities/studentTeacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherEntity)
    public readonly teacher: Repository<TeacherEntity>,
    @InjectRepository(Student)
    public readonly student: Repository<Student>,
    @InjectRepository(StudentTeacher)
    public readonly stdtech: Repository<StudentTeacher>,
  ) {}

  //creating teacher with many to many relationship with student
  // async create(teacherdata) {
  //   const { name, department, subject } = teacherdata;
  //   const checkDept = await this.student.find({
  //     where: { department: department },
  //   });
  //   if (checkDept.length === 0) {
  //     throw new Error('There is no student with particular Department');
  //   } else {
  //     const val = await this.teacher.save(teacherdata);
  //     checkDept.map(
  //       async (student) => await this.stdtech.save({ teacher: val, student }),
  //     );
  //   }
  // }

  async create(teacherData) {
    const { name, age, department } = teacherData;
    const checkStudent = await this.student.find({
      where: { department: department },
    });

    if (checkStudent.length === 0) {
      throw new Error('There is no student with particular department');
    } else {
      const teacherVal = await this.teacher.save(teacherData);
      checkStudent.map(
        async (student) =>
          await this.stdtech.save({ teacher: teacherVal, student }),
      );
    }
  }
  //Read teacher teacherdata
  async read() {
    const all_teacher = await this.teacher.find();
    return all_teacher;
  }

  //Deleting teacher teacherdata
  async delete(id) {
    await this.teacher.delete(id);
    return `Teacher with ID:${id} was deleted successfully`;
  }
}
