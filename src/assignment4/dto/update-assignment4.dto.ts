import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignment4Dto } from './create-assignment4.dto';

export class UpdateAssignment4Dto extends PartialType(CreateAssignment4Dto) {}
