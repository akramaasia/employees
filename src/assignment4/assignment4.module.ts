import { Module } from '@nestjs/common';
import { Assignment4Service } from './assignment4.service';
import { Assignment4Controller } from './assignment4.controller';

@Module({
  controllers: [Assignment4Controller],
  providers: [Assignment4Service],
})
export class Assignment4Module {}
