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
}
