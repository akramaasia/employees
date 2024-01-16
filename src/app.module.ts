import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employee/entities/employee.entity';
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
  ), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
