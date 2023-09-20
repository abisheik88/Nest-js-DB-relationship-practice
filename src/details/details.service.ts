import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Details } from './entity/details.entity';
import { Student } from 'src/student/entity/student.entity';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(Details)
    private readonly details: Repository<Details>,
    @InjectRepository(Student)
    private readonly studentrepo: Repository<Student>,
  ) {}

  //Create data in details table
  async create(data) {
    const { name, age, email, phone } = data;
    const existingStudent = await this.studentrepo.findOne({ where: { name } });
    console.log(existingStudent);
    if (!existingStudent) {
      throw new Error('There is no student with this name');
    }
    data.student = existingStudent;
    console.log(data);
    await this.details.save(data);
    return data;
  }

  //Read the details table
  async find() {
    const data = await this.details.find();
    return data;
  }

  //Update the details table
  async update(id: number, newdata: Partial<Details>) {
    const existingStudent = this.details.findOne({ where: { id } });
    if (!existingStudent) {
      throw new Error('Invalid Id....');
    } else {
      if (newdata.name) {
        const updatedData = await this.studentrepo.findOne({
          where: { name: newdata.name },
        });
        if (!updatedData) {
          throw new Error('There is no student with that name');
        } else {
          newdata.student = updatedData;
        }
      }
      await this.details.update(id, newdata);
    }
  }

  //Delete the details from table
  async delete(id: number) {
    await this.details.delete(id);
    return 'Details Deleted Successfully';
  }
}
