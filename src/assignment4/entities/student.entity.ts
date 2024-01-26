import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { coursesEntity } from "./course.entity";
import { StudentCourseEntity } from "./studentcourse.entity";

@Entity("students")

export class StudentsEntity extends BaseEntity{

@Column()
name : string;

@Column()
age : number;

@Column()
contact : string;

@OneToMany (() => StudentCourseEntity, (stdcourses) => stdcourses.student)
stdcourses: StudentCourseEntity[]

}