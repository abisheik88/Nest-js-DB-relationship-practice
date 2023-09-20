import { StudentTeacher } from 'src/entities/studentTeacher.entity';
import { Student } from 'src/student/entity/student.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class TeacherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department: string;

  @Column()
  subject: string;

  @OneToMany(() => StudentTeacher, (studentTeacher) => studentTeacher.teacher)
  TeachertoStudents: StudentTeacher[];

  // @ManyToMany(() => Student, (student) => student.teacher, {
  //   onDelete: 'CASCADE',
  //   cascade: true,
  // })
  // @JoinTable({ name: 'student_teacher' })
  // student: Student[];
}
