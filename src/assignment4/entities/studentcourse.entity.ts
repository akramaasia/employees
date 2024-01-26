import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { StudentsEntity } from './student.entity';
import { coursesEntity } from './course.entity';

@Entity('studentcourses')
export class StudentCourseEntity extends BaseEntity {
  @ManyToOne(() => StudentsEntity, (student) => student.stdcourses)
  @JoinColumn({ name: 'studentId' })
  student: StudentsEntity;

  @ManyToOne(() => coursesEntity, (courses) => courses.stdCourses)
  @JoinColumn({ name: 'courseId' })
  courses: coursesEntity;
}
