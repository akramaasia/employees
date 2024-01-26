import { Entity, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { StudentsEntity } from "./student.entity";
import { StudentCourseEntity } from "./studentcourse.entity";

@Entity("courses")

export class coursesEntity extends BaseEntity{

@Column()
name : string;

@OneToMany (()=> StudentCourseEntity , (stdCourses) => stdCourses.courses)
stdCourses: StudentCourseEntity[]
}