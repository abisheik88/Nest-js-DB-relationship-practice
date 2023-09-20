import { Injectable } from '@nestjs/common';
import { Department } from './entity/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class departmentService {
  constructor(
    @InjectRepository(Department)
    private readonly dept: Repository<Department>,
  ) {}
  //Create department
  async create(data) {
    const dat = await this.dept.save(data);
    return dat;
  }
  //Read department
  async read() {
    const departmentData = await this.dept.find();
    return departmentData;
  }
  //Update department
  async update(id: number, newData: any) {
    const updatedDepartment = await this.dept.update(id, newData);
    return updatedDepartment;
  }

  //Delete department
  async delete(id) {
    const idCheck = await this.dept.findOne({ where: { department_id: id } });
    console.log(idCheck);
    if (!idCheck) {
      throw new Error('There is no department with this particular id');
    }
    await this.dept.delete(id);
    return `Department with ${id} deleted successfully`;
  }
}
