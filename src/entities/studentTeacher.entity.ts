import { Student } from 'src/student/entity/student.entity';
import { TeacherEntity } from 'src/teacher/entity/teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('std_teach')
export class StudentTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.TeachertoStudents)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => Student, (student) => student.TeachertoStudents)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
