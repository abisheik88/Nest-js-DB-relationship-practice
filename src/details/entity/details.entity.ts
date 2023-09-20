import { Student } from 'src/student/entity/student.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Details {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
