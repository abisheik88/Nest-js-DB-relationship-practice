import { Department } from 'src/department/entity/department.entity';
import { StudentTeacher } from 'src/entities/studentTeacher.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department: string;

  @ManyToOne(() => Department, (dept) => dept.student)
  @JoinColumn({ name: 'department_id' })
  dept: Department;

  @OneToMany(() => StudentTeacher, (studentTeacher) => studentTeacher.student)
  TeachertoStudents: StudentTeacher[];

  // @ManyToMany(() => TeacherEntity, (teacher) => teacher.student, {
  //   onDelete: 'CASCADE',
  //   nullable: true,
  // })
  // teacher: TeacherEntity[];
}
