// import { Inject, Injectable } from "@nestjs/common";
// import { DataSource, Repository } from "typeorm";
// import { EmployeeEntity } from "./entities/employee.entity";
// import { error } from "console";

// @Injectable()
// export class EmployeeRepository extends Repository<EmployeeEntity> {
//     constructor (private dataSource: DataSource)
//     {
//         super (EmployeeEntity, dataSource.createEntityManager());
//     }
//     async getEmployees(): Promise<EmployeeEntity[]> {
//         try{
//         return this.find();
//         }
//         catch(error){
//             throw error;
//         }
//       }
//       async findById(id: number) {
//        //return this.findOneBy(id);
//        try{
//         return this.findOne({
//             where:{
//                 id,
//             },
//         });
//        }
//        catch (error)
//        {
//         return error;
//        }
//       }
//     //   async findOne(id:number){
//     //     return this.findOne(id)
//     //   }
//     // async findById(id : number)
//     // {
//     //     return this.findOne(id);
//     // }

// }
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';
import { employeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeRepository extends Repository<EmployeeEntity> {
  constructor(private dataSource: DataSource) {
    super(EmployeeEntity, dataSource.createEntityManager());
  }
  
  async getEmployees() {
    return this.find();
  }

  async findById(id: number) {
    return this.findOne({
      where: {
        id,
      },
    });
  }
  async createEmployee(employeeData: CreateEmployeeDto)
  {
      return this.save(employeeData);
  }
  async removeEmployee(id :number)
  {
    try{

      return this.delete(id);
    }
    catch(error){
      throw error;
    }
  }
  async updateEmployeePut(id:number , updateEmployeeDto: UpdateEmployeeDto)
  {
    //const emp= this.findById(id);
    return this.update(id, updateEmployeeDto);
  }

  async updateEmployee(id:number , updateEmployeeDto: UpdateEmployeeDto)
  {
    try
    {
     
      const employee= await this.findById(id);
      //console.log("enter hhh")
      //console.log(employee)
      const updateEmployees= {...employee, ...updateEmployeeDto};
     // console.log(UpdateEmployeeDto)
      return this.save(updateEmployees);
    }
    catch(error)
    {
      throw error;
    }
  }
}
