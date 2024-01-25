import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Assignment4Service } from './assignment4.service';
import { CreateAssignment4Dto } from './dto/create-assignment4.dto';
import { UpdateAssignment4Dto } from './dto/update-assignment4.dto';

@Controller('assignment4')
export class Assignment4Controller {
  constructor(private readonly assignment4Service: Assignment4Service) {}

  @Post()
  create(@Body() createAssignment4Dto: CreateAssignment4Dto) {
    return this.assignment4Service.create(createAssignment4Dto);
  }

  @Get()
  findAll() {
    return this.assignment4Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignment4Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignment4Dto: UpdateAssignment4Dto) {
    return this.assignment4Service.update(+id, updateAssignment4Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignment4Service.remove(+id);
  }
}
