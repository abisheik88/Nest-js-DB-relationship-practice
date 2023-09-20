import { Student } from 'src/student/entity/student.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column()
  department: string;

  @Column()
  department_block: string;

  @OneToMany(() => Student, (student) => student.dept)
  student: Student[];
}
