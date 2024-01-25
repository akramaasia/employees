import { Test, TestingModule } from '@nestjs/testing';
import { Assignment4Controller } from './assignment4.controller';
import { Assignment4Service } from './assignment4.service';

describe('Assignment4Controller', () => {
  let controller: Assignment4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Assignment4Controller],
      providers: [Assignment4Service],
    }).compile();

    controller = module.get<Assignment4Controller>(Assignment4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
