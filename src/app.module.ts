import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee/entities/employee.entity';
import { DepartmentModule } from './department/department.module';
import { ExpenseModule } from './expense/expense.module';
import { Assignment4Module } from './assignment4/assignment4.module';
@Module({
  
  imports:  [ TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aasia',
      password: 'aasia123',
      database: 'test',
      entities: [EmployeeEntity],
      synchronize: true,
      
    }
  ), EmployeeModule, DepartmentModule, ExpenseModule, Assignment4Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
