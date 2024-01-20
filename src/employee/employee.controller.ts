import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
//import { serializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { employeeDto } from './dto/employee.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('employee')
@Serialize(employeeDto) // this will apply decorator on whole controller can be applied invididually to each method if need to pass different dtos for different rules.
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  //@UseInterceptors(new serializeInterceptor(employeeDto))
  //@Serialize(employeeDto) //custom decorator()
  @Get()
  async findAll() {
    return this.employeeService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.employeeService.findById(parseInt(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(parseInt(id), updateEmployeeDto);
  }

  @Put(':id')
  updateData(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const employee = this.employeeService.findById(parseInt(id));
    if (!employee) {
      throw new NotFoundException('user not found');
    }
    // const updateemployee=this.employeeService.update
    return this.employeeService.updatePut(parseInt(id), updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(parseInt(id));
  }
}
