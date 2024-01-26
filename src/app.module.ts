import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee/entities/employee.entity';
import { DepartmentModule } from './department/department.module';
import { ExpenseModule } from './expense/expense.module';
import { Assignment4Module } from './assignment4/assignment4.module';
import { UsersEntity } from './assignment4/entities/users.entity';
import { CnicEntity } from './assignment4/entities/cnic.entity';
import { BaseEntity } from './assignment4/entities/base.entity';
import { PostEntity } from './assignment4/entities/posts.entity';
import { StudentCourseEntity } from './assignment4/entities/studentcourse.entity';
import { StudentsEntity } from './assignment4/entities/student.entity';
import { coursesEntity } from './assignment4/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aasia',
      password: 'aasia123',
      database: 'test',
      entities: [
        EmployeeEntity,
        UsersEntity,
        CnicEntity,
        BaseEntity,
        PostEntity,
        StudentCourseEntity,
        StudentsEntity,
        coursesEntity,
      ],
      synchronize: true,
    }),
    EmployeeModule,
    DepartmentModule,
    ExpenseModule,
    Assignment4Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
