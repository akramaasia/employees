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
    return this.employeeRepository.createEmployee(createEmployeeDto)
   // return 'This action adds a new employee';
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
    //return `This action updates a #${id} employee`;
    return this.employeeRepository.updateEmployee(id, updateEmployeeDto);
  }

  updatePut (id : number , updateemployeeDto: UpdateEmployeeDto)
  {
    return this.employeeRepository.updateEmployeePut(id , updateemployeeDto)
  }

  remove(id: number) {
    return this.employeeRepository.removeEmployee(id);
  }
}
