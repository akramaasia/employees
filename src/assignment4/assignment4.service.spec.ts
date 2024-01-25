import { Test, TestingModule } from '@nestjs/testing';
import { Assignment4Service } from './assignment4.service';

describe('Assignment4Service', () => {
  let service: Assignment4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Assignment4Service],
    }).compile();

    service = module.get<Assignment4Service>(Assignment4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
