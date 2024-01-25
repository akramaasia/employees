import { Injectable } from '@nestjs/common';
import { CreateAssignment4Dto } from './dto/create-assignment4.dto';
import { UpdateAssignment4Dto } from './dto/update-assignment4.dto';

@Injectable()
export class Assignment4Service {
  create(createAssignment4Dto: CreateAssignment4Dto) {
    return 'This action adds a new assignment4';
  }

  findAll() {
    return `This action returns all assignment4`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignment4`;
  }

  update(id: number, updateAssignment4Dto: UpdateAssignment4Dto) {
    return `This action updates a #${id} assignment4`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment4`;
  }
}
