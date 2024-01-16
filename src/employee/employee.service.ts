import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';
import { EmployeeEntity } from './entities/employee.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EmployeeService {
  
constructor (
  //@InjectRepository(EmployeeEntity)
  //private readonly employeeEntity: Repository<EmployeeEntity>,
  private readonly employeeRepository: EmployeeRepository)
{}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  async find(): Promise<EmployeeEntity[]> {
    
    return this.employeeRepository.getEmployees();
  }
  
  async findById(id: number) {
    return this.employeeRepository.findById(id);
  }
  // findOne(id: number) {
  //   return this.employeeRepository.findOne(id);
  //   }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
