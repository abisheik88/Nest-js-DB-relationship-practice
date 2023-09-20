import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entity/student.entity';
import { Department } from 'src/department/entity/department.entity';
import { TeacherEntity } from 'src/teacher/entity/teacher.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly details: Repository<Student>,
    @InjectRepository(Department)
    private readonly dept: Repository<Department>,
    @InjectRepository(TeacherEntity)
    private readonly teacher: Repository<TeacherEntity>,
  ) {}

  async create(data) {
    const { name, department } = data;
    const existDepartment = await this.dept.findOne({ where: { department } });
    if (!existDepartment) {
      throw new Error('There is no department with this name');
    }
    data.dept = existDepartment;
    await this.details.save(data);
  }

  async update(id, newData: Partial<Student>) {
    const existing = await this.details.findOne({ where: { id } });
    if (!existing) {
      throw new Error('Invalid Id');
    } else {
      if (newData.department) {
        const val = await this.dept.findOne({
          where: { department: newData.department },
        });
        if (!val) {
          throw new Error('There is no department like that...');
        }
        newData.dept = val;
      }
      await this.details.update(id, newData);
    }
  }

  async delete(id: number) {
    await this.details.delete(id);
  }
}
